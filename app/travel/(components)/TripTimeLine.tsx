"use client";

import HomeLabel from "@/app/components/HomeLabel";
import HomeTitle from "@/app/components/HomeTitle";
import { useLang } from "@/app/components/LanguageProvider";
import { Section } from "@/app/components/Section";
import { getTripTimeline } from "@/lib/travelUtils";

type TripTimelineProps = {
    countryCount: number;
    cityCount: number;
};

export default function TripTimeline({ countryCount, cityCount }: TripTimelineProps) {
    const { t } = useLang();
    const trips = getTripTimeline().sort((a, b) =>
        b.date.localeCompare(a.date)
    );

    return (
        <Section id="travel" innerClassName="space-y-12">
            <div className="max-w-3xl space-y-4">
                <HomeLabel>{t.navbar.travel}</HomeLabel>
                <HomeTitle>Trip timeline</HomeTitle>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                    A neutral look at recent trips, destinations, and dates using the same typography scale as the homepage sections.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 border border-neutral-200 dark:border-neutral-700">{countryCount} countries</span>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 border border-neutral-200 dark:border-neutral-700">{cityCount} cities</span>
                </div>
            </div>

            <div className="space-y-8">
                {trips.map((trip, i) => (
                    <div
                        key={i}
                        className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm"
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1 h-3 w-3 rounded-full bg-neutral-900 dark:bg-neutral-100" aria-hidden />
                            <div className="flex-1 space-y-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl" aria-hidden>
                                        {getFlag(trip.country)}
                                    </span>
                                    <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                        {trip.country}
                                    </p>
                                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                        {formatDate(trip.date)}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-400">Destinations</p>
                                    <div className="flex flex-wrap gap-2">
                                        {trip.destinations.map((d) => (
                                            <span
                                                key={d}
                                                className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" aria-hidden />
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    {trip.descriptionKey}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
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
