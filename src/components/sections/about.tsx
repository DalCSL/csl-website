"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Better Coding",
    description:
      "The Dalhousie Computer Science Leaders Society provides an environment for students to explore and deepen their understanding of computer science fundamentals: problem-solving,data structures, algorithms, cloud computing, systems design,and real-world applications.",
    content: (
      <div className="relative w-full h-full">
        <Image src="/assets/c-code.png" alt="c-code" fill />
      </div>
    ),
  },
  {
    title: "No resources? No problem.",
    description:
      "We conduct workshops, seminars, talks by industry experts, and weekly competitive programming contests to equip students with the most cutting-edge knowledge in computer science, ensuring their skills remain at the forefront of the latest developments in the field.",
    content: (
      <div className="relative w-full h-full">
        <Image src="/assets/workshop.jpg" alt="workshop" fill />
      </div>
    ),
  },
  {
    title: "What we Provide",
    description:
      "Additionally, we provide students with practical experience by working on projects relevant to the field which helps them land opportunities for internships and co-op positions.The main goal of this society is to create leaders for the future. We give students the tools they need to succeed in the competitive field of computer science and become future leaders.",
    content: (
      <div className="relative w-full h-full">
        <Image src="/assets/provide.jpg" alt="provide" fill />
      </div>
    ),
  },
];
export function About() {
  return (
    <div className="w-full min-h-[100vh]" id="about">
      <StickyScroll content={content} />
    </div>
  );
}
