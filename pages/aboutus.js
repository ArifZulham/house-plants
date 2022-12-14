import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import banner from "../public/assets/house-plants-banner.webp";
import Profile from "../public/assets/profiltappb.png";

export default function Aboutus() {
  return (
    <div>
      <Meta title="About Us" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                class="object-cover object-center h-full w-full"
                width="1200"
                height="50"
                src={banner}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image alt="profile" className="rounded-full" src={Profile} />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Arif Zulham Bagaskara
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    Hi, I'm Arif Zulham Bagaskara I Have interest in UI/UX design and gardening
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                house-plant app is about how to decorate a house with a proper technique and with good angle. 
                our application helps you to decorate your home with plants with an interesting point of view and placement  
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
