"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { Home, Users, Calendar, MessageCircle, BookOpen, Trophy, Star, Info } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Trophy },
  { name: "Team", href: "#team", icon: Users },
  { name: "Testimonials", href: "#testimonials", icon: Star },
  // { name: "Blog", href: "/blog", icon: BookOpen },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <motion.a 
            href="#" 
            className="-m-1.5 p-1.5 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/assets/logo.png" alt="DAL CSL" width={32} height={32} className="rounded-lg"/>

            {/* <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CSL</span>
            </div> */}
            <span className="text-xl font-bold text-gray-900">Computer Science Leaders</span>
          </motion.a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="#discord"
            className="flex items-center gap-2 text-sm font-semibold leading-6 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-4 w-4" />
            Join Discord
          </motion.a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-2">
              {/* logo */}
              <img src="/assets/logo.png" alt="Dalhousie CSL" width={32} height={32} className="rounded-lg"/>
              {/* <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CSL</span> */}
              {/* </div> */}
              <span className="text-xl font-bold text-gray-900">CSL</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 -mx-3 rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#discord"
                  className="flex items-center gap-3 -mx-3 rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-5 w-5" />
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
} 