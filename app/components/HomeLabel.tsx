"use client"

export default function HomeLabel({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">
            {children}
        </span>
    );
}