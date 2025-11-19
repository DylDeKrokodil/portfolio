import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-32 border-t border-neutral-200 dark:border-neutral-800 py-8">
            <div className="max-w-4xl mx-auto px-6 md:px-20 lg:px-32 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
                <p>© {new Date().getFullYear()} Dylan de Groot</p>

                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/DylDeKrokodil"
                        target="_blank"
                        className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/dylan-de-groot"
                        target="_blank"
                        className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://instagram.com/dylaaan______"
                        target="_blank"
                        className="hover:text-neutral-900 dark:hover:text-neutral-200 transition"
                    >
                        <FaInstagram size={22} />
                    </a>
                </div>

            </div>
        </footer>
    );
}
