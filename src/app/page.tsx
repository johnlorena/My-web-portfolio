"use client";
import CircularGallery from "../../components/CircularGallery/CircularGallery";
import "./style.css";
import Image from "next/image";
import Squares from "../../components/Squares/Squares"; 
import { motion } from "framer-motion";
import { Presentation, FileBadge, Contact } from "lucide-react";
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

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
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
      
        <div className="flex justify-center items-center">
          <Image
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHgzMGd6Z3ZkOWQ5ZW5janlxbm9lZWdnanFsaHduMnZybW43bDM0YyZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9cw/H2Px8gYWL0yZ3eDd0g/giphy.gif"
            alt="Work in Progress"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
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
            <h2 className="text-4xl font-bold mb-8">
              CERTIFICATES / PARTICIPATION
            </h2>
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
