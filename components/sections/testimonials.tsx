"use client";

import { AnimatedTestimonials } from "../ui/animated-testimonials";
import GradientBackground from "../backgrounds/gradient-background";

const testimonials = [
  {
    quote: "CSL's mock interview program completely transformed my interview preparation. The personalized feedback and real-world scenarios helped me ace my Google interview. I can't recommend it enough!",
    name: "John Doe",
    designation: "Software Engineer @ A",
    src: "/assets/team/seb.jpeg",
  },
  {
    quote: "The ICPC training sessions were incredible. I went from struggling with basic algorithms to competing at a national level. The community support here is unmatched.",
    name: "John Doe",
    designation: "Software Engineer @ A",
    src: "/assets/team/hassan.jpeg",
  },
  {
    quote: "Joining CSL was the best decision I made in college. The system design workshops and behavioral interview prep gave me the confidence I needed to succeed.",
    name: "John Doe",
    designation: "Software Engineer @ A",
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