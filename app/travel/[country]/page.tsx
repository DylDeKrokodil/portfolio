import WorkInProgress from "@/app/components/WorkInProgress";
import { notFound } from "next/navigation";

const VALID_COUNTRIES = ["pt", "es", "at", "cw", "cl"];

type CountryParams = {
    country: string;
}

export default async function CountryPage({ params }: { params: Promise<CountryParams> }) {
    const { country } = await params;

    if (!VALID_COUNTRIES.includes(country)) {
        return notFound();
    }

    return (
        <WorkInProgress/>
    );
}
