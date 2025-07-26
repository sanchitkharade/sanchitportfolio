'use client';

import { useEffect, useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const titles = ['Full Stack Developer', 'Java Backend Developer', 'React Frontend Specialist'];

export default function Portfolio() {
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, titleIndex]);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-purple-900 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-extrabold text-pink-500 tracking-wide hover:scale-110 cursor-pointer">SK</h1>
          <nav className="lg:space-x-6 text-xs space-x-2 lg:text-base lg:font-medium">
            <a href="#about" className="text-gray-300 hover:text-pink-500 transition">About</a>
            <a href="#education" className="text-gray-300 hover:text-pink-500 transition">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-pink-500 transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-pink-500 transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-pink-500 transition">Contact</a>
          </nav>
        </div>
      </header>

     {/* Hero Section */}
      <section className="relative min-h-screen flex  md:flex-row lg:flex-row flex-col-reverse  justify-center items-center">
        <motion.div whileHover={{ scale: 1.1 }}
          className="lg:w-1/2  lg:pl-56 cursor-pointer pl-5 ml-0 w-3/4"
        >
          <h1 className="text-xl lg:text-5xl font-bold tracking-widest font-mono">Sanchit Kharade</h1>
          <p className="text-xl lg:text-2xl mt-3 text-pink-500 font-mono min-h-[2rem]">
            {typedText}<span className="animate-pulse">|</span>
          </p>
          <div className="flex justify-start space-x-6 mt-6">
            <a href="mailto:sanchitkharade1120@gmail.com"><IconMail size={24} className='hover:scale-120 hover:text-purple-400'/></a>
            <a href="https://github.com/sanchitkharade" target="_blank"><IconBrandGithub size={24} className='hover:scale-120 hover:text-purple-400'/></a>
            <a href="https://linkedin.com/in/sanchit-kharade" target="_blank"><IconBrandLinkedin size={24} className='hover:scale-120 hover:text-purple-400'/></a>
          </div>
          <a href="https://drive.google.com/file/d/1d45GXHU9z9TG-XFC19wR2cJkl-_BcNCW/view?usp=drive_link" target="_blank" className="mt-6 inline-block lg:px-6 px-3 !text-black text-sm lg:text-md py-2 bg-pink-500 hover:bg-purple-600 rounded-full shadow">
            View Resume
          </a>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center lg:pr-48"
        >
          <Image
            src="/tsm.png"
            alt="Profile"
            width={270}
            height={300}
            className='lg:scale-x-110 lg:w-200 lg:h-200'
          />
          
        </motion.div>

        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 absolute bottom-0 right-0 animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-20  text-white">
        <motion.h2 className="text-4xl font-bold text-center mb-10">About Me</motion.h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="text-lg text-gray-300 leading-relaxed cursor-pointer">
            I am a <span className="text-pink-500 font-medium">Full Stack Developer</span> based in Pune with a passion for building elegant, scalable web apps.
            I have worked on live projects during internships at <span className="text-pink-500">GreenGenX</span> and <span className="text-pink-500">CodSoft</span>, focusing on performance and user experience.
            I am currently pursuing a B.E. in Computer Engineering and enjoy problem-solving, backend logic, and clean UI design.
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="rounded-xl overflow-hidden flex justify-center pt-3 px-12 shadow-lg lg:pl-28">
            <Image
              src="/img.png"
              alt="Coding"
              width={300}
              height={300}
              className="rounded-full"
            />
          </motion.div>
        </div>
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 absolute bottom-0 right-0 animate-pulse"></div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative px-6 py-20">
        <motion.h2 className="text-4xl font-bold text-center mb-12">Education</motion.h2>
        <motion.div whileHover={{ scale: 1.1 }} className=" border-3 border-gray-400 rounded-xl p-8 max-w-4xl mx-auto cursor-pointer text-gray-300 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] ">
          <h3 className="text-2xl font-semibold text-pink-500">B.E. in Computer Engineering</h3>
          <p>Bharati Vidyapeeth’s College of Engineering, Lavale, Pune</p>
          <p className="text-sm">Savitribai Phule Pune University</p>
          <p className="text-sm">Nov 2022 – May 2026 | GPA: <span className="text-white font-semibold">8.2 / 10.0</span></p>
        </motion.div>
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 absolute bottom-0 right-0 animate-pulse"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 py-20">
        <motion.h2 className="text-4xl font-bold text-center mb-12">Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.1 }} className="bg-[#252525] border-3 border-gray-400 rounded-xl p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] cursor-pointer">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">JobAlchemy - Job Portal</h3>
            <p className="text-gray-300 text-sm mb-2">An end-to-end job platform supporting real-time search, authentication, interview scheduling, and user-specific dashboards.</p>
            <ul className="list-disc list-inside text-sm text-gray-400">
              <li>Built Employer & Applicant modules with secure login</li>
              <li>Integrated Spring Boot APIs with MongoDB and JWT</li>
              <li>Improved performance and user onboarding experience</li>
            </ul>
            <a href="https://jobalchemy.onrender.com" className="text-blue-400 text-sm mt-3 inline-block" target="_blank">
              🔗 Visit Site
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="bg-[#252525]  border-3 border-gray-400 rounded-xl p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] cursor-pointer">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">EventMantra - Event Automation</h3>
            <p className="text-gray-300 text-sm mb-2">College-level platform for managing event lifecycles, user participation, leaderboard generation, and certificate distribution.</p>
            <ul className="list-disc list-inside text-sm text-gray-400">
              <li>Developed Admin & User Modules with secure access</li>
              <li>Integrated leaderboard, event search, certificate generation</li>
              <li>Built using Next.js, Spring Boot, MongoDB, and Mantine</li>
            </ul>
          </motion.div>
        </div>
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 absolute bottom-0 right-0 animate-pulse"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 py-12 max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-semibold mb-6 text-center">Skills</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            'Java', 'C++', 'Python', 'SQL',
            'JavaScript', 'TypeScript', 'React.js', 'Next.js',
            'Redux', 'Spring Boot', 'Hibernate', 'MongoDB',
            'MySQL', 'PostgreSQL', 'Git', 'Postman'
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-[#1f1f1f] py-4 px-2 rounded-lg shadow border border-pink-500 hover:border-2 hover:bg-pink-500 hover:text-white text-pink-500"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 absolute -top-20 -left-20 animate-pulse"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 absolute bottom-0 right-0 animate-pulse"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] px-4 sm:px-6 py-20">
        <motion.div whileHover={{ scale: 1.1 }} className="max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#181818] border border-purple-800 shadow-2xl text-left relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">Let&apos;s Connect</h2>
          <div className="space-y-5 text-sm sm:text-base md:text-lg text-gray-300">
            <div className="flex items-center gap-4"><IconMapPin size={22} className="text-purple-400 " /><span className='hover:scale-105 hover:text-purple-400'>Pune, India</span></div>
            <div className="flex items-center gap-4"><IconMail size={22} className="text-green-400" /><span className='hover:scale-105 hover:text-purple-400'>sanchitkharade1120@gmail.com</span></div>
            <div className="flex items-center gap-4"><IconPhone size={22} className="text-blue-400" /><span className='hover:scale-105 hover:text-purple-400'>+91 8010193186</span></div>
            <div className="flex items-center gap-4"><IconBrandLinkedin size={22} className="text-sky-400" /><a href="https://linkedin.com/in/sanchit-kharade" target="_blank" className="hover:scale-105 hover:text-pink-400">linkedin.com/in/sanchit-kharade</a></div>
            <div className="flex items-center gap-4"><IconBrandGithub size={22} className="text-gray-300" /><a href="https://github.com/sanchitkharade" target="_blank" className='hover:scale-105 hover:text-pink-400'>github.com/sanchitkharade</a></div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-sm sm:text-base text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Sanchit Kharade. All rights reserved.</p>
      </footer>
    </div>
  );
}
