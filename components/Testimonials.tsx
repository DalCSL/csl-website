"use client";

import { AnimatedTestimonials } from "./ui/animated-testimonials";
import GradientBackground from "./wrapper/GradientBackground";

const testimonials = [
  {
    quote: "CSL's mock interview program completely transformed my interview preparation. The personalized feedback and real-world scenarios helped me ace my interview. I can't recommend it enough!",
    name: "Kanav Bhardwaj",
    designation: "Software Engineer @ Magnet Forensic",
    src: "/assets/team/kanav.jpeg",
  },
  {
    quote: "The ICPC training sessions were incredible. I went from struggling with basic algorithms to competing at a national level. The community support here is unmatched.",
    name: "Hassan Chowdhry",
    designation: "Software Engineer @Ansys",
    src: "/assets/team/hassan.jpeg",
  },
  {
    quote: "Joining CSL was the best decision I made in college. The system design workshops and behavioral interview prep gave me the confidence I needed to succeed.",
    name: "Hoang Le",
    designation: "2-time ICPC Regional Winner | Software Engineer",
    src: "/assets/team/hoang.jpeg",
  },
];

export default function Testimonials() {
  return (
    <GradientBackground className="py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our members say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from our successful alumni who have landed their dream jobs at top tech companies.
          </p>
        </div>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </GradientBackground>
  );
} 