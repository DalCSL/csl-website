"use client";

import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import LargeGridBackground from "./backgrounds/large-grid-background";

const people = [
  {
    name: "Sebastian Dionicio",
    role: "President",
    imageUrl: "/assets/team/seb.jpeg",
    linkedin: "https://www.linkedin.com/in/sebastian-dionicio-017a8b200/",
  },
  {
    name: "Hassan Chowdhry",
    role: "Vice-president",
    imageUrl: "/assets/team/hassan.jpeg",
    linkedin: "https://www.linkedin.com/in/hassanchowdhry/",
  },
  {
    name: "Hoang Le",
    role: "Vice-president",
    imageUrl: "/assets/team/hoang.jpeg",
    linkedin: "https://www.linkedin.com/in/hoang-harold-le/",
  },
  {
    name: "Vansh Sood",
    role: "Lead web manager",
    imageUrl: "/assets/team/vansh.jpeg",
    linkedin: "https://linkedin.com/in/vanshsood",
  },
  {
    name: "Falilou",
    role: "Graphic designer",
    imageUrl: "/assets/team/moh.jpeg",
    linkedin: "https://www.linkedin.com/in/mouhamadou-falilou-niang-a0aba8172/",
  },
];

export default function Team() {
  return (
    <LargeGridBackground className="flex flex-col items-center bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id="team">
      <div className="container max-w-7xl px-4 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Backed by solid experience across multiple industries, our team brings the right mix of insight and execution.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {people.map((person) => (
            <div key={person.name} className="mb-6 group">
              <Link href={person.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                <DirectionAwareHover 
                  imageUrl={person.imageUrl}
                  className="cursor-pointer transition-transform duration-300"
                >
                  <div className="flex flex-col">
                    <h1 className="text-white text-lg font-bold mb-1 drop-shadow-lg">
                      {person.name}
                    </h1>
                    <h4 className="text-white text-md font-light mb-3 drop-shadow-lg">
                      {person.role}
                    </h4>
                    <div className="flex items-center gap-2">
                      <AiOutlineLinkedin className="h-5 w-5 text-white drop-shadow-lg" />
                      <span className="text-white text-sm font-medium drop-shadow-lg">
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                </DirectionAwareHover>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </LargeGridBackground>
  );
}
