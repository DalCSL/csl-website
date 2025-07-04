"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Companies() {
  const logos = [
    { src: "/assets/logos/amazon.png", alt: "Amazon" },
    { src: "/assets/logos/google.png", alt: "Google" },
    { src: "/assets/logos/ibm.png", alt: "IBM" },
    { src: "/assets/logos/magnet.png", alt: "Magnet Forensics" },
    { src: "/assets/logos/arup.png", alt: "Arup" },
    { src: "/assets/logos/dayforce.webp", alt: "Dayforce" },
    { src: "/assets/logos/telus.png", alt: "Telus" },
    { src: "/assets/logos/nasdaq.png", alt: "Nasdaq" },
    { src: "/assets/logos/ansys.png", alt: "Ansys" },
    { src: "/assets/logos/cohere.png", alt: "Cohere" },
    { src: "/assets/logos/cpp.png", alt: "CPPIB" },
    { src: "/assets/logos/doordash.png", alt: "DoorDash" },
    { src: "/assets/logos/ea.svg", alt: "EA" },
    { src: "/assets/logos/shopify.png", alt: "Shopify" },
    { src: "/assets/logos/robinhood.svg", alt: "Robinhood" },
    { src: "/assets/logos/1password.svg", alt: "1Password" },
    { src: "/assets/logos/sentry.png", alt: "Sentry" },
    { src: "/assets/logos/super.com.png", alt: "Super.com" },
    { src: "/assets/logos/bloomberg.webp", alt: "Bloomberg" },
    { src: "/assets/logos/yelp.svg", alt: "Yelp" },
    // { src: "/assets/logos/genesys.png", alt: "Genesys" },
  ];

  return (
    <div className="bg-transparent pb-2 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-3xl font-bold mb-4">
              {/* Our members have gotten offers from these companies */}
              {/* Get offers from these companies */}
              Our members have gotten offers and interviews from these companies
            </h1>
          </div>
        </div>
        {/* <div> */}
        <div>
          <InfiniteMovingCards
            items={logos}
            direction="right"
            speed="normal"
           />
        </div>
      </div>
    </div>
  );
}
