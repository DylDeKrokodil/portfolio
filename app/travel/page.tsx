import { getCitiesCount, getCountryCount } from "@/lib/travelUtils";
import TripTimeline from "./(components)/TripTimeLine";

export const metadata = {
    title: "Travel – Dylan de Groot",
    description: "Explore my travel timeline and destinations."
};

export default function TravelPage() {
    const countryCount = getCountryCount();
    const cityCount = getCitiesCount();

    return (
        <TripTimeline countryCount={countryCount} cityCount={cityCount} />
    );
}
