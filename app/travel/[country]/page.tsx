import { notFound } from "next/navigation";

const VALID_COUNTRIES = ["pt", "es"];

type CountryParams = {
    country: string;
}

export default async function CountryPage({ params }: { params: Promise<CountryParams> }) {
    const { country } = await params;

    if (!VALID_COUNTRIES.includes(country)) {
        return notFound();
    }

    return (
        <main className="px-6 py-10 max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">
                Travel: {country.toUpperCase()}
            </h1>

            {/* Shared description */}
            <p className="text-gray-700 dark:text-gray-300 mb-8">
                This is my travel page for <strong>{country.toUpperCase()}</strong>.
                All countries use the same page layout — unless a route has its own
                custom layout (like <code>/travel/pt</code>).
            </p>

            {/* Shared content example */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <h2 className="font-semibold mb-2">Cities Visited</h2>
                    <p className="text-sm opacity-80">
                        Here will come your list of cities visited in {country.toUpperCase()}.
                    </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <h2 className="font-semibold mb-2">Photo Highlights</h2>
                    <p className="text-sm opacity-80">
                        You can add a gallery or carousel here.
                    </p>
                </div>

            </section>

            {/* Optional dynamic info */}
            <div className="mt-10 text-sm text-gray-500">
                <p>Route: /travel/{country}</p>
            </div>
        </main>
    );
}
