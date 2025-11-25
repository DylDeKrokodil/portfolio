"use client";

import { useLang } from "@/app/components/LanguageProvider";
import { getTripTimeline } from "@/lib/travelUtils";

export default function TripTimeline() {
    const { t } = useLang()
    const trips = getTripTimeline().sort((a, b) =>
        b.date.localeCompare(a.date)
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold mb-12 text-center">Trip Timeline</h2>

            <div className="space-y-8">
                {trips.map((trip, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-blue-400 hover:border-blue-600 transition-colors">
                        {/* Dot */}
                        <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-900 hover:bg-blue-600 transition-colors"></div>

                        {/* Country Header */}
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                            <span className="text-3xl">{getFlag(trip.country)}</span>
                            <span className="text-blue-600 dark:text-blue-400">{(`travel.${trip.country}.title`)}</span>
                        </h3>

                        {/* Date */}
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                            {formatDate(trip.date)}
                        </p>

                        {/* Destinations */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 mb-3">
                            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide">Destinations</p>
                            <ul className="grid grid-cols-2 gap-2">
                                {trip.destinations.map((d) => (
                                    <li key={d} className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed border-l-2 border-blue-200 pl-3">
                            {(trip.descriptionKey)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ---------- Helpers ----------

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

function getFlag(code: string) {
    const flags: Record<string, string> = {
        us: "🇺🇸", es: "🇪🇸", uk: "🇬🇧", hr: "🇭🇷", cw: "🇨🇼",
        at: "🇦🇹", sk: "🇸🇰", cl: "🇨🇱", mx: "🇲🇽", pt: "🇵🇹",
        nl: "🇳🇱", be: "🇧🇪", de: "🇩🇪", lu: "🇱🇺", gi: "🇬🇮",
    };
    return flags[code] ?? "🌍";
}