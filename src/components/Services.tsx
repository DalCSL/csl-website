"use client";

import { motion } from "motion/react";
import { CalendarDays, Users, Trophy, Code, MessageSquare, Target, ArrowRight } from "lucide-react";
import GridBackground from "@/components/backgrounds/gird-background";

const services = [
  {
    name: "Technical Interviews",
    description: "Practice with real technical interview questions and get personalized feedback from experienced developers.",
    icon: Code,
    // calendlyLink: "https://calendly.com/your-link/technical-interview",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    name: "Behavioral Interviews",
    description: "Master the art of behavioral interviews with our structured approach and expert guidance.",
    icon: MessageSquare,
    // calendlyLink: "https://calendly.com/your-link/behavioral-interview",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    name: "System Design Interviews",
    description: "Learn to design scalable systems and ace your system design interviews with hands-on practice.",
    icon: Target,
    // calendlyLink: "https://calendly.com/your-link/system-design",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    name: "ICPC Training",
    description: "Prepare for competitive programming contests with our specialized ICPC training program.",
    icon: Trophy,
    // calendlyLink: "https://calendly.com/your-link/icpc-training",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <GridBackground className="bg-linear-to-br from-gray-50 via-white to-indigo-50 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to ace your interviews
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From technical interviews to competitive programming, we provide comprehensive training to help you succeed in your career.
          </p>
        </motion.div>
        
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div 
                key={service.name} 
                className="flex flex-col group"
                variants={itemVariants}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xs p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </motion.div>
                      <span className="text-lg">{service.name}</span>
                    </dt>
                    
                    <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto mb-6">{service.description}</p>
                      <motion.div
                        className="inline-flex items-center gap-2"
                      >
                        {/* <a
                          href={service.calendlyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-all flex flex-row items-center transform"
                        >
                          Book a session 
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a> */}
                      </motion.div>
                    </dd>
              </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xs rounded-full px-6 py-3 shadow-lg border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium text-gray-700">Ready to get started?</span>
            <a
              href="#discord"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Join our community →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </GridBackground>
  );
}
