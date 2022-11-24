import Link from "next/link";

export default function Footer() {
  return (
    <footer class="sticky bottom-0 text-gray-600 body-font z-50 bg-white">
      <div class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
        <p class="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
          © 2022 House Plants —
          <Link
            href="https://www.instagram.com/arif_zulham10"
            class="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @arif_zulham10
          </Link>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://www.instagram.com/arif_zulham10"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
