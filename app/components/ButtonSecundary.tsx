"use clinet"

export const ButtonSecundary = ({
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
              border border-black/20 dark:border-white/20
              text-black dark:text-white
              hover:bg-black/5 dark:hover:bg-white/10
              transition whitespace-nowrap
      "
        >
            {children}
        </a>
    );
}