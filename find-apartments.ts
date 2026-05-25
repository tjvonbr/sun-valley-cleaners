const AIRTABLE_TOKEN =
  "patSQ18jLOinSbb18.6d908d637ad99a048b9c57f70a5d4c69ce991a9994610c3859e59105f69a7064";
const AIRTABLE_BASE_ID = "app0ZEtycmvW7AGFE";
const AIRTABLE_TABLE_ID = "tblKfMcsPSRqndlAN";
const GOOGLE_API_KEY = "AIzaSyCxuY4lnm8f-ggqvfqbTmaP-Re4cxHJJNI";

const FIVE_MILES_METERS = 8047;

// --- Airtable helpers ---

async function airtableGet(path: string, params?: Record<string, string>) {
  const url = new URL(`https://api.airtable.com/v0/${path}`);
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
  });
  if (!res.ok) throw new Error(`Airtable GET failed: ${await res.text()}`);
  return res.json();
}

async function fetchExistingNames(): Promise<Set<string>> {
  const names = new Set<string>();
  let offset: string | undefined;

  do {
    const params: Record<string, string> = { "fields[]": "Name" };
    if (offset) params.offset = offset;
    const data = await airtableGet(`${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, params);
    for (const record of data.records) {
      if (record.fields.Name) names.add(record.fields.Name);
    }
    offset = data.offset;
  } while (offset);

  return names;
}

async function airtablePost(path: string, body: unknown) {
  const res = await fetch(`https://api.airtable.com/v0/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Airtable POST failed: ${await res.text()}`);
  return res.json();
}

// --- Google helpers ---

async function geocode(street: string, city: string, state: string) {
  const address = encodeURIComponent(`${street}, ${city}, ${state}`);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== "OK") throw new Error(`Geocoding failed: ${data.status} — ${data.error_message ?? ""}`);
  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}

async function searchNearby(lat: number, lng: number) {
  const results: any[] = [];
  let pageToken: string | undefined;

  do {
    const body: Record<string, any> = {
      textQuery: "apartment complex",
      maxResultCount: 20,
      locationBias: {
        circle: {
          center: { latitude: lat, longitude: lng },
          radius: FIVE_MILES_METERS,
        },
      },
    };
    if (pageToken) body.pageToken = pageToken;

    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "X-Goog-FieldMask": "places.id,places.displayName,places.addressComponents,nextPageToken",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`Places API failed: ${await res.text()}`);
    const data = await res.json();
    results.push(...(data.places ?? []));
    pageToken = data.nextPageToken;

    if (pageToken) await new Promise((r) => setTimeout(r, 2000));
  } while (pageToken);

  return results;
}

function parseAddress(components: any[]) {
  let streetNumber = "",
    route = "",
    city = "",
    state = "";

  for (const c of components) {
    if (c.types.includes("street_number")) streetNumber = c.longText;
    else if (c.types.includes("route")) route = c.longText;
    else if (c.types.includes("locality")) city = c.longText;
    else if (c.types.includes("administrative_area_level_1")) state = c.shortText;
  }

  return { street: `${streetNumber} ${route}`.trim(), city, state };
}

// --- Main ---

async function main() {
  // 1. Fetch anchor record
  console.log("Fetching anchor record from Airtable...");
  const data = await airtableGet(`${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
    maxRecords: "1",
    "sort[0][field]": "Name",
    "sort[0][direction]": "asc",
    filterByFormula: `{Name}="The Common"`,
  });
  const fields = data.records[0].fields;
  const { "Street Address": street, City: city, State: state } = fields;
  console.log(`Anchor: ${street}, ${city}, ${state}`);

  // 2. Geocode
  console.log("Geocoding address...");
  const { lat, lng } = await geocode(street, city, state);
  console.log(`Coordinates: ${lat}, ${lng}`);

  // 3. Find nearby apartments
  console.log("Searching for apartment complexes within 5 miles...");
  const places = await searchNearby(lat, lng);
  console.log(`Found ${places.length} places`);

  // 4. Build records, skipping any already in Airtable
  console.log("Fetching existing records to avoid duplicates...");
  const existingNames = await fetchExistingNames();
  console.log(`Found ${existingNames.size} existing records`);

  const apartments: Record<string, string>[] = [];
  const seen = new Set<string>();

  for (const place of places) {
    const name: string = place.displayName?.text ?? "";
    if (!name || seen.has(name) || existingNames.has(name)) continue;
    seen.add(name);

    const { street: aptStreet, city: aptCity, state: aptState } = parseAddress(
      place.addressComponents ?? []
    );

    apartments.push({ Name: name, "Street Address": aptStreet, City: aptCity, State: aptState });
    console.log(`  + ${name} — ${aptStreet}, ${aptCity}, ${aptState}`);
  }

  // 5. Write to Airtable in batches of 10
  console.log(`\nAdding ${apartments.length} records to Airtable...`);
  for (let i = 0; i < apartments.length; i += 10) {
    const batch = apartments.slice(i, i + 10);
    await airtablePost(`${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      records: batch.map((f) => ({ fields: f })),
    });
    console.log(`  Saved records ${i + 1}–${i + batch.length}`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
