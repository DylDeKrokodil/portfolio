"use client"

export const ButtonPrimary = ({
    children,
    href
}: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <a
            href={href}
            className="
        px-7 py-3 rounded-lg 
              bg-black text-white dark:bg-white dark:text-black 
              font-medium 
              hover:opacity-80 transition whitespace-nowrap
      "
        >
            {children}
        </a>
    );
}