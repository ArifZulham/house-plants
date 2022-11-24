import Link from "next/link";
import Image from "next/image";
import icon from "../public/assets/apple-icon.png";

export default function Header() {
  return (
    <header class="sticky top-0 text-gray-600 body-font z-50 bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        ></Link>
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/tools" class="mr-5 hover:text-gray-900">
            Tools
          </Link>
          <Link href="/review" class="mr-5 hover:text-gray-900">
            Review
          </Link>
          <Link href="/aboutus" class="mr-5 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Image alt="icon" src={icon} width="40" height="40" />
          <span class="ml-3 text-xl">House Plants</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
      </div>
    </header>
  );
}
