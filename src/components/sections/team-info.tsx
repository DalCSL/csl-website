"use client";

import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import LargeGridBackground from "@/components/backgrounds/large-grid-background";

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
  {
    name: "Tobi Onibudo",
    role: "Advisor",
    imageUrl: "/assets/team/tobi.jpeg",
    linkedin: "https://www.linkedin.com/in/tobi-onibudo/",
  }
];

export default function Team() {
  return (
    <LargeGridBackground className="bg-white min-h-screen flex items-center py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the people behind CSL
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dedicated team of students and alumni work tirelessly to provide the best resources and support for our community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <div key={person.name} className="group">
              <DirectionAwareHover
                imageUrl={person.imageUrl}
                className="w-full h-80 rounded-lg object-cover"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-bold text-white">{person.name}</h3>
                  <p className="text-base text-gray-300">{person.role}</p>
                  <div className="flex space-x-2">
                    <Link
                      href={person.linkedin}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <AiOutlineLinkedin size={20} />
                    </Link>
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </LargeGridBackground>
  );
}
