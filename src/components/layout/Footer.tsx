// src/components/layout/Footer.tsx

// Button links
const LINKS = [
  {
    href: "https://twitter.com/DogeBetsSOL",
    title: " Twitter",
  },
  {
    href: "https://t.me/DogeBetsSOL",
    title: " Telegram",
  },
  {
    href: "",
    title: " WhitePaper V1",
  },
];

// Twitter link
const TWITTER_LINK = {
  href: "https://twitter.com/DogeBetsSOL",
  title: "© 2024 DogeBets Casino",
};

export default function Footer() {
  return (
    <footer className="bg-black rounded-t-2xl shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gamba.so/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/DogeBets.png" className="h-14" alt="Gamba Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  className="hover:underline me-4 md:me-6"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href={TWITTER_LINK.href} className="hover:underline">
            {TWITTER_LINK.title}
          </a>
        </span>
      </div>
    </footer>
  );
}
