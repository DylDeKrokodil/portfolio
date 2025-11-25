import { getCitiesCount, getCountryCount, getTripTimeline } from "@/lib/travelUtils";
import TripTimeline from "./(components)/TripTimeLine";

export default function TravelPage() {
    const countryCount = getCountryCount();
    const cityCount = getCitiesCount();
    const timeline = getTripTimeline();

    console.log(timeline);
    return (
        <div>
            <TripTimeline />
            <p className="mt-4 text-lg">
                Countries visited: <span className="font-bold">{countryCount}</span>
            </p>
            <p>Total cities visited: {cityCount}</p>
            
        </div>
    );
}