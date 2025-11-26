import { travelData } from "@/data/travelData";
import { group } from "console";

export function getCountryCount(){
    return Object.keys(travelData).length;
}

export function getCitiesCount() {
    const set = new Set<string>();

    for (const country of Object.values(travelData)) {
        if ("cities" in country) {
            country.cities.forEach((c) => set.add(c));
        }

        if ("trips" in country) {
            for (const trip of country.trips) {
                for (const cityGroup of trip.cities) {
                    cityGroup.keys.forEach((c) => set.add(c));
                }
            }
        }
    }

    return set.size;
}

type Destination = string;

type Trip = {
    country: string;
    date: string;
    //returnDate: String | null;
    descriptionKey: string;
    destinations: Destination[]
};

export function getTripTimeline() {
    const timeline: Trip[] = [];

    for (const [countryCode, country] of Object.entries(travelData)) {
        if (!("trips" in country)) continue;

        for (const trip of country.trips) {
            const destinations = trip.cities.flatMap(group => group.keys);

            timeline.push({
                country: countryCode,
                date: trip.date,
                descriptionKey: trip.descriptionKey,
                destinations: destinations
            });
        }
    }
    
    return timeline;
}