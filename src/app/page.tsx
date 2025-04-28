'use client'; // Important for animations

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I&apos;m Dalyn
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl"
      >
        Backend Engineer | Fullstack Developer
      </motion.p>
    </main>
  );
}
