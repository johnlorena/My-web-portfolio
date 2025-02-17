import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="w-full flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <span>John Lorena&apos;s Portfolio</span>
        </div>
        {/* Navigation links on the right */}
        <nav className="space-x-8">
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#projects" className="hover:text-gray-500">Projects</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>
      </header>
      
      {/* Centered GIF with Image component */}
      <div className="flex justify-center items-center">
        <Image
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHgzMGd6Z3ZkOWQ5ZW5janlxbm9lZWdnanFsaHduMnZybW43bDM0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/H2Px8gYWL0yZ3eDd0g/giphy.gif"
          alt="Work in Progress"
          width={500} // Set a fixed width to optimize image loading
          height={500} // Set a fixed height to maintain aspect ratio
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
