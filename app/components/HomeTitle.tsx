"use client"

export default function HomeTitle({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {children}
        </h2>
    );
}