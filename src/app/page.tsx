'use client'; // Important for animations

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  // State to control when to show and hide the elements
  const [showText, setShowText] = useState(true);
  const [showDescription, setShowDescription] = useState(false); // For the description
  const [hideDescription, setHideDescription] = useState(false); // To hide the description after it appears

  // Set a timer to hide the text after a certain delay and show the description
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false); // Hide the initial text after 2 seconds
    }, 4000); // 2000ms (2 seconds) before fading out

    const descriptionTimer = setTimeout(() => {
      setShowDescription(true); // Show the description after another 1 second
    }, 5000); // 3000ms (3 seconds) before showing the description

    const hideDescriptionTimer = setTimeout(() => {
      setHideDescription(true); // Hide the description after it appears
    }, 12000); // 6000ms (6 seconds) to hide the description after showing

    // Clear the timers when the component is unmounted or updated
    return () => {
      clearTimeout(timer);
      clearTimeout(descriptionTimer);
      clearTimeout(hideDescriptionTimer);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Wrapping the components with AnimatePresence */}
      <AnimatePresence>
        {/* First motion heading with unique key */}
        {showText && (
          <motion.h1
            key="heading" // Add unique key
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 1 } }} // Fade out and move down
            className="text-5xl font-bold mb-4"
          >
            Hi, I&apos;m Dalyn
          </motion.h1>
        )}

        {/* First motion paragraph with unique key */}
        {showText && (
          <motion.p
            key="paragraph" // Add unique key
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 1 } }} // Fade out and move down
            className="text-xl"
          >
            Backend Engineer | Fullstack Developer
          </motion.p>
        )}

        {/* Second motion paragraph (description) */}
        {showDescription && !hideDescription && (
          <motion.p
            key="description" // Add unique key
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 1 } }} // Fade out and move down
            className="text-xl mt-4"
          >
            I specialize in building scalable backend systems and full-stack applications, focusing on clean architecture and performance.
          </motion.p>
        )}
      </AnimatePresence>
    </main>
  );
}
