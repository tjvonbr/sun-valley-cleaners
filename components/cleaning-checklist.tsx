"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

type CleaningItem = {
  task: string;
  standard: boolean;
  deep: boolean;
  moveInOut: boolean;
};

type RoomChecklist = {
  name: string;
  items: CleaningItem[];
};

const checklistData: RoomChecklist[] = [
  {
    name: "Kitchen",
    items: [
      { task: "Sweep and mop", standard: true, deep: true, moveInOut: true },
      { task: "Thorough dusting", standard: true, deep: true, moveInOut: true },
      {
        task: "Sinks, fixtures, counters cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Exterior of appliances cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Exterior of cabinets and drawers cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      { task: "Remove cobwebs", standard: true, deep: true, moveInOut: true },
      {
        task: "Dust light fixtures and vents",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Exterior of range hood cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Stove top, burners, drip pans, and knobs cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Stainless steel polished",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Empty trash, wipe down trash can",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Switch plates wiped down",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Doorknobs cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Interior fridge, freezer, oven",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Interior cabinets and drawers",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe down all doors and doorframes",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down baseboards",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Clean interior pantry and shelves",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Spot clean walls",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe interior of windows (must be added on)",
        standard: false,
        deep: false,
        moveInOut: false,
      },
    ],
  },
  {
    name: "Bathrooms",
    items: [
      {
        task: "Counters, sinks, showers, bathtubs, fixtures",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Toilets cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Floors cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Carpeting vacuumed",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust light fixtures and vents",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust window sills",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Mirrors cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      { task: "Remove cobwebs", standard: true, deep: true, moveInOut: true },
      {
        task: "Empty trash, wipe down trash can",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Switch plates wiped down",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Doorknobs cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down doors and doorframes",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Scrub tile and grout",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down baseboards",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down windowsills and window frames",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Clean linen closet",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe down inside of cabinets and drawers",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Spot clean walls",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe interior of windows (must be added on)",
        standard: false,
        deep: false,
        moveInOut: false,
      },
    ],
  },
  {
    name: "Bedrooms",
    items: [
      { task: "Sweep and mop", standard: true, deep: true, moveInOut: true },
      { task: "Remove cobwebs", standard: true, deep: true, moveInOut: true },
      {
        task: "Dust all surfaces and items",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust light fixtures and vents",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust windowsills",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      { task: "Make beds", standard: true, deep: true, moveInOut: true },
      {
        task: "Switch plates cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Doorknobs cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down windowsills and tracks",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down baseboards",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust blinds",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust ceiling fans",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down doors and door frames",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Clean inside closets",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Spot clean walls",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe interior of windows (must be added on)",
        standard: false,
        deep: false,
        moveInOut: false,
      },
    ],
  },
  {
    name: "Common Areas",
    items: [
      { task: "Sweep and mop", standard: true, deep: true, moveInOut: true },
      { task: "Remove cobwebs", standard: true, deep: true, moveInOut: true },
      {
        task: "Dust all surfaces and items",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust light fixtures and vents",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust windowsills",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Switch plates cleaned",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Doorknobs cleaned and disinfected",
        standard: true,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down windowsills and tracks",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down baseboards",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust blinds",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Dust ceiling fans",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Wipe down doors and door frames",
        standard: false,
        deep: true,
        moveInOut: true,
      },
      {
        task: "Clean inside closets",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Spot clean walls",
        standard: false,
        deep: false,
        moveInOut: true,
      },
      {
        task: "Wipe interior of windows (must be added on)",
        standard: false,
        deep: false,
        moveInOut: false,
      },
    ],
  },
];

export default function CleaningChecklist() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {checklistData.map((room, index) => (
          <button
            key={room.name}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full font-medium transition-colors text-white ${
              activeTab === index
                ? "border-2 border-secondary"
                : "border-2 border-transparent hover:border-secondary/50"
            }`}
          >
            {room.name}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-6 font-medium text-muted-foreground"></th>
              <th className="py-4 px-3 font-medium text-primary text-center text-sm">
                Standard Clean
              </th>
              <th className="py-4 px-3 font-medium text-primary text-center text-sm">
                Deep Clean
              </th>
              <th className="py-4 px-3 font-medium text-primary text-center text-sm">
                Move In/Out
              </th>
            </tr>
          </thead>
          <tbody>
            {checklistData[activeTab].items.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4 px-6 text-muted-foreground">{item.task}</td>
                <td className="py-4 px-3 text-center">
                  {item.standard ? (
                    <Check className="inline-block w-5 h-5 text-green-500" />
                  ) : (
                    <X className="inline-block w-5 h-5 text-red-500" />
                  )}
                </td>
                <td className="py-4 px-3 text-center">
                  {item.deep ? (
                    <Check className="inline-block w-5 h-5 text-green-500" />
                  ) : (
                    <X className="inline-block w-5 h-5 text-red-500" />
                  )}
                </td>
                <td className="py-4 px-3 text-center">
                  {item.moveInOut ? (
                    <Check className="inline-block w-5 h-5 text-green-500" />
                  ) : (
                    <X className="inline-block w-5 h-5 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
