import { getCitiesCount, getCountryCount } from "@/lib/travelUtils";
import TripTimeline from "./(components)/TripTimeLine";

export default function TravelPage() {
    const countryCount = getCountryCount();
    const cityCount = getCitiesCount();

    return (
        <TripTimeline countryCount={countryCount} cityCount={cityCount} />
    );
}
