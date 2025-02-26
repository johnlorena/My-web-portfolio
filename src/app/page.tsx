"use client";
import CircularGallery from "../../components/CircularGallery/CircularGallery";
import "./style.css";
import Image from "next/image";
import Squares from "../../components/Squares/Squares";
import { motion } from "framer-motion";
import {
  Presentation,
  FileBadge,
  Contact,
  Briefcase,
  Star,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";

const sections = [
  {
    title: "UX+ Conference",
    icon: <Presentation className="w-5 h-5" />,
    description:
      "Participated in UX discussions and interactive sessions with industry leaders.",
    link: "#",
    linkText: "UX+ Conference ",
    role: "Participant",
    date: "August 18, 2024",
  },
  {
    title: "PDAX Experience Ambassador Program ",
    icon: <Contact className="w-5 h-5" />,
    description:
      "Contributed to user experience testing, feature evaluation, and compatibility testing",
    link: "#",
    linkText: "View Products",
    role: "Participant",
    date: "March 16, 2022 - May 31, 2022",
  },
  {
    title: "KALARO",
    icon: <Contact className="w-5 h-5" />,
    description:
      "Provided feedback on feature enhancements and identied bugs and usability issues.",
    link: "#",
    linkText: "View Dribbble",
    role: "Beta Tester",
    date: "September 29, 2020 - October 12, 2021",
  },
  {
    title: "Python Certification - Certiport",
    icon: <FileBadge className="w-5 h-5" />,
    description: "Information Technology Specialist Certication",
    link: "#",
    linkText: "View Dribbble",
    role: "Certification",
    date: "December 15, 2023",
  },
  {
    title: "Cloud Computing Certication  - Certiport",
    icon: <FileBadge className="w-5 h-5" />,
    description: "Information Technology Specialist Certication",
    link: "#",
    linkText: "View Dribbble",
    role: "Certification",
    date: "December 13, 2023",
  },
  {
    title: "Introduction to Python Web Development",
    icon: <Presentation className="w-5 h-5" />,
    description:
      "Web seminar conducted by University of the East- CCSS Research & Development",
    link: "#",
    linkText: "View Dribbble",
    role: "Participant",
    date: "September 24, 2022",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "You_Source",
    duration: "Feb 2024 — Feb 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQH4u65euJwTaQ/company-logo_200_200/company-logo_200_200/0/1737083145519/yousourceinc_logo?e=1748476800&v=beta&t=diXCdD8uN7orDPZVXiPUynFOCfOS9zCZL0ZVh1uAodA",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-display">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.1}
          squareSize={40}
          direction="up"
          borderColor="#181818"
          hoverFillColor="#222"
        />
      </div>
      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="w-full flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span>John Lorena</span>
          </div>
          <nav className="space-x-8">
            <a href="#about" className="hover:text-gray-500">
              About
            </a>
            <a href="#projects" className="hover:text-gray-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-500">
              Contact
            </a>
          </nav>
        </header>
        <div className="w-full flex justify-center mb-[-80px]">
          <h2 className="text-4xl font-bold mb-8">TECH STACK:</h2>
        </div>

        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          items={undefined}
        />
      </motion.div>

      <div className="relative min-h-screen p-8 pb-20 sm:p-20 max-w-7xl mx-auto lg:max-w-8xl mb-[-80px] mt-[-10px]">
        <section className="py-12 px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="">
              <div className="flex items-center gap-2 text-green-400 uppercase text-sm font-semibold">
                <Star size={16} /> WORK HISTORY
              </div>
              <h2 className="text-4xl font-bold mb-8">EXPERIENCE</h2>
              {/* <p className="text-gray-400 mt-4 max-w-lg">
              I have worked with some of the most innovative industry leaders to
              help build their top-notch products.
            </p> */}

              <div className="mt-8 space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    {/*  border-b border-gray-800 pb-4 */}
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-gray-500">@{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {exp.duration}
                    </span>
                  </div>
                ))}
              </div>
              {/* <button className="mt-6 text-gray-400 hover:text-white transition">
              Show More
            </button> */}
            </div>
          </motion.div>
        </section>
        <section className="py-12 px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-green-400 uppercase text-sm font-semibold">
              <Star size={16} /> Participations
            </div>
            <h2 className="text-4xl font-bold mb-8">CERTIFICATES</h2>
          </motion.div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-none">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      {" "}
                      {/* Added justify-between */}
                      <div className="flex items-center gap-3">
                        {" "}
                        {/* Wrapped icon and title in a div */}
                        {section.icon}
                        <h3 className="text-xl font-semibold">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm">{section.date}</p>{" "}
                    </div>
                    <p className="text-m font-semibold">{section.role}</p>
                    <p className="text-gray-300 text-sm">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
