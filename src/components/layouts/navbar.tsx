"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconPhone, IconQuote, IconTrophy, IconInfoCircle } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Achievements",
      link: "#achievements",
      icon: <IconTrophy className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <IconQuote className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}