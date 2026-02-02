"use client";
//import CircularGallery from "../../components/CircularGallery/CircularGallery";
//import "./style.css";
import Squares from "../../components/Squares/Squares";
import { motion } from "framer-motion";
import {
  Presentation,
  FileBadge,
  Contact,
  Star,
  Github,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";

const sections = [
  {
    title: "Data Analysis with Python Certification",
    icon: <FileBadge className="w-5 h-5" />,
    description:
      "Learned core data analysis skills including reading CSV/SQL data and using Numpy, Pandas, Matplotlib, and Seaborn for processing and visualization",
    link: "https://www.freecodecamp.org/certification/johnlorena/data-analysis-with-python-v7",
    linkText: "Data Analysis with Python Certification",
    role: "Certification",
    date: "Nov 2024",
  },
  {
    title: "UX+ Conference",
    icon: <Presentation className="w-5 h-5" />,
    description:
      "Participated in UX discussions and interactive sessions with industry leaders.",
    link: "#",
    linkText: "UX+ Conference ",
    role: "Participant",
    date: "Aug 2024",
  },
  {
    title: "PDAX Experience Ambassador Program ",
    icon: <Contact className="w-5 h-5" />,
    description:
      "Contributed to user experience testing, feature evaluation, and compatibility testing",
    link: "#",
    linkText: "View Products",
    role: "Participant",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "KALARO",
    icon: <Contact className="w-5 h-5" />,
    description:
      "Provided feedback on feature enhancements and identied bugs and usability issues.",
    link: "#",
    linkText: "View Dribbble",
    role: "Beta Tester",
    date: "Sep 2020 - Oct 2021",
  },
  {
    title: "Python Certification - Certiport",
    icon: <FileBadge className="w-5 h-5" />,
    description: "Information Technology Specialist Certication",
    link: "#",
    linkText: "View Dribbble",
    role: "Certification",
    date: "Dec 2023",
  },
  {
    title: "Cloud Computing Certication  - Certiport",
    icon: <FileBadge className="w-5 h-5" />,
    description: "Information Technology Specialist Certication",
    link: "#",
    linkText: "View Dribbble",
    role: "Certification",
    date: "Dec 2023",
  },
  {
    title: "Introduction to Python Web Development",
    icon: <Presentation className="w-5 h-5" />,
    description:
      "Web seminar conducted by University of the East- CCSS Research & Development",
    link: "#",
    linkText: "View Dribbble",
    role: "Participant",
    date: "Sep 2022",
  },
];

const experiences = [
  {
    role: "Co-Founder / Lead Software Developer",
    company: "TerniLabs",
    duration: "Nov 2025 — Present",
    image:
      "https://github.com/TerniLabs/assets/blob/main/images/ternilabs-logo-v1-icon-round.png?raw=true",
    responsibility:
      "Architect system modules for inventory, transactions, and reporting with efficient data synchronization.Lead the end-to-end design and development of software solutions, ensuring scalability and reliability.Report project progress, technical decisions, and implementation updates directly to stakeholders.Collaborate with designers and stakeholders to refine system flow, features, and user experience.Oversee code quality, deployment processes, and system performance improvements.",
  },
  {
    role: "Customer Service Representative",
    company: "Foundever",
    duration: "Sep 2025 — Nov 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACS_ExZ_fMf2Fqa3X6i2YwfqWbyNgvowpew&s",
    responsibility:
      "Review and validate retail and lease documents to ensure accuracy, compliance, and adherence to policies and regulations.Maintain strict confidentiality and handle customer payment information in accordance with security protocols.Resolve client service issues by identifying needs, providing solutions, and ensuring timely follow-up.Collaborate in training and coaching sessions to improve individual and team performance.Perform additional duties as assigned to support team and client objectives.",
  },
  {
    role: "Software Engineer",
    company: "You_Source",
    duration: "Feb 2024 — Feb 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQH4u65euJwTaQ/company-logo_200_200/company-logo_200_200/0/1737083145519/yousourceinc_logo?e=2147483647&v=beta&t=G4wiaLVHyTfb8wFVBScGPh7EXytONevJLXXZjz8sDS0",
    responsibility:
      "Understand client needs and provide effective technical solutions aligned with their business goals.Collaborate with clients, users, and team members to define and refine system requirements.Develop clean, efficient, and well-tested code to meet project goals and deadlines.Use Azure DevOps to manage tasks, track progress, and maintain code quality.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen  pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-display">
      <div className="fixed inset-0 -z-10">
        <Squares
          speed={0.1}
          squareSize={40}
          direction="up"
          borderColor="#181818"
          hoverFillColor="#222"
        />
      </div>
      
      {/* Content */}
      <div className="relative min-h-screen p-8 pb-20 sm:p-20 max-w-7xl mx-auto lg:max-w-8xl mb-[-80px] mt-[-10px]">
        <section className="px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="mb-5">
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#dfe7ff] via-[#eef1ff] to-[#f7f9ff] px-8 py-12 text-gray-900 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:px-12 lg:flex lg:items-center lg:gap-10">
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                    Code. Create. Conquer.
                  </p>
                  <h1 className="mt-4 mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                    Let&apos;s build something great together
                  </h1>
                  <span className="mt-4 text-2xl leading-tight text-gray-900 sm:text-2md">
                    John Michael Lorena
                  </span>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:text-center lg:justify-start lg:text-left">
                    <a
                      href="https://github.com/johnlorena"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-900 shadow-sm transition hover:bg-gray-50 sm:w-auto"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/johnlorena"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-900 shadow-sm transition hover:bg-gray-50 sm:w-auto"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="relative mt-12 flex-1 lg:mt-0">
                  <div className="relative mx-auto flex max-w-sm justify-center rounded-[40px] p-6 ">
                    <img
                      src="https://avatars.githubusercontent.com/u/43415494?s=400&u=23e925f2f0616897702222cc7bfd065b011085a8&v=4"
                      alt="Instructor"
                      className="h-64 w-64 rounded-full object-cover shadow-2xl ring-8 ring-white/70 sm:h-72 sm:w-72"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            <div className="py-10">
              <div className="flex items-center gap-2 text-green-400 uppercase text-sm font-semibold">
                <Star size={16} /> WORK HISTORY
              </div>
              <h2 className="text-4xl font-bold mb-8">EXPERIENCE</h2>
              <div className="mt-8 space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    {/* Top row */}
                    <div className="flex items-center justify-between">
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

                    {/* Description below, aligned with text */}
                    <div className="pl-20 pt-2 pb-3">
                      {exp.responsibility
                        .split(".") // split sentences by period
                        .filter((sentence) => sentence.trim() !== "") // remove empty parts
                        .map((sentence, i) => (
                          <p
                            key={i}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-gray-300">-</span>
                            <span>{sentence.trim()}.</span>
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* <button className="mt-6 text-gray-400 hover:text-white transition">
              Show More
            </button> */}
            </div>
          </motion.div>
        </section>
        {/* Background Animation */}
        {/* <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative px-6 sm:px-12"
          // style={{
          //   marginLeft: "calc(-60vw + 60%)",
          //   marginRight: "calc(-60vw + 60%)",
          // }}
        >
          <div className="w-full flex justify-center mb-[-80px]">
            <h2 className="text-4xl font-bold mb-8">TECH STACK:</h2>
          </div>
          <CircularGallery
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
            items={undefined}
          />
        </motion.div> */}
        

        <section className="px-6 pb-20 text-white">
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

          <div className="space-y-4 ps-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-1 justify-between">
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
