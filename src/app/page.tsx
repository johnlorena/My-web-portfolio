"use client";
import CircularGallery from "../../components/CircularGallery/CircularGallery";
import "./style.css";
import Image from "next/image";
import Squares from "../../components/Squares/Squares"; // Import Squares from the appropriate library

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
        <h2 className="text-xl font-bold">Tech Stack:</h2>
      </div>
      <CircularGallery
        bend={0}
        textColor="#ffffff"
        borderRadius={0.05}
        items={undefined}
      />
    </div>
  );
}
