"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";


export function Companies() {
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
    { src: "/assets/logos/yelp.png", alt: "Yelp" },
    // { src: "/assets/logos/genesys.png", alt: "Genesys" },
  ];

  return (
    // Change duration will change the speed of the marquee
    // Mobile: 60s, Desktop: 50s
    <Marquee className="[--duration:60s] md:[--duration:50s]">
      {logos.map((logo) => (
        <Image key={logo.alt} src={logo.src} alt={logo.alt} width={200} height={100} className="h-12 w-auto mr-8 md:mr-12" />
      ))}
    </Marquee>
  );
}
