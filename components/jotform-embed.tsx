"use client";

import Script from "next/script";

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, origin: string) => void;
  }
}

const FORM_ID = "262894633447065";

// Embeds the "Website Lead Form" from Jotform. The embed handler script resizes
// the iframe to fit the form as its content changes.
export default function JotformEmbed() {
  return (
    <>
      <iframe
        id={`JotFormIFrame-${FORM_ID}`}
        title="Website Lead Form"
        src={`https://form.jotform.com/${FORM_ID}`}
        allow="geolocation; microphone; camera; fullscreen; payment"
        scrolling="no"
        style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onReady={() => {
          window.jotformEmbedHandler?.(
            `iframe[id='JotFormIFrame-${FORM_ID}']`,
            "https://form.jotform.com/",
          );
        }}
      />
    </>
  );
}
