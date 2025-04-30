'use client'; // Important for animations

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [hideDescription, setHideDescription] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // NEW STATE for experience details

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 4000);

    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 5000);

    const hideDescriptionTimer = setTimeout(() => {
      setHideDescription(true);
    }, 13000);

    const experienceTimer = setTimeout(() => {
      setShowExperience(true);
    }, 14000);

    return () => {
      clearTimeout(timer);
      clearTimeout(descriptionTimer);
      clearTimeout(hideDescriptionTimer);
      clearTimeout(experienceTimer);
    };
  }, []);

  // Function to show the experience details
  const handleLogoClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <AnimatePresence>
        {showText && (
          <>
            <motion.h1
              key="heading"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50, transition: { duration: 1 } }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              Hello, I&apos;m Dalyn
            </motion.h1>

            <motion.p
              key="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 50, transition: { duration: 1 } }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl"
            >
              Backend Engineer | Fullstack Developer
            </motion.p>
          </>
        )}

        {showDescription && !hideDescription && (
          <motion.p
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 50, transition: { duration: 1 } }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl mt-4"
          >
            I specialize in building scalable backend systems and full-stack applications, focusing on clean architecture and performance.
          </motion.p>
        )}
      </AnimatePresence>

      {/* "My Experience" Section */}
      {showExperience && (
        <motion.div
          key="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mt-8"
        >
          <h2 className="text-4xl font-bold mb-4">My Experience</h2>
          <button onClick={handleLogoClick} className="flex flex-col items-center focus:outline-none">
            <Image
              src="/mailchimp-icon-512x512-voka09qm.png"
              alt="Mailchimp Logo"
              width={96}
              height={96}
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <p className="mt-2 text-white text-lg">(Click to view)</p>
          </button>

          {/* Experience Details */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-left max-w-2xl"
            >
              <div className="bg-black py-12 px-6 sm:px-12">
                <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl space-y-10">
                  {[
                    {
                      year: "2025",
                      items: [
                        "Took ownership of critical bugs in recommendation and content systems, fixing issues that were blocking key business metrics.",
                        "Migrated legacy job runners to new architecture, increasing reliability and reducing incidents.",
                        "Designed logging systems that gave our team real-time insights and faster debugging.",
                        "Built an internal tool to help teams author events properly — made data cleaner and easier to track.",
                      ],
                    },
                    {
                      year: "2024",
                      items: [
                        "Delivered backend for customizable product feeds that could personalize content at send time — powered all major campaigns.",
                        "Hardened credential management by integrating Secret Manager and removing hardcoded secrets.",
                        "Reduced deployment risk by validating JAR files at runtime, preventing misconfigurations before they shipped.",
                      ],
                    },
                    {
                      year: "2023",
                      items: [
                        "Enabled advanced product filtering (by category, inventory, price, etc.) directly on recommendation logic.",
                        "Refactored campaign checklist editor and surfaced error states, directly preventing failed sends for thousands of users.",
                        "Played a lead role in planning cloud migration efforts and instrumented observability for booking systems.",
                      ],
                    },
                    {
                      year: "2022",
                      items: [
                        "Built a backend booking system from scratch in Golang using GCP’s Spanner, enabling Google/Outlook calendar sync.",
                        "Led backend schema design for how external calendar data was stored and queried.",
                      ],
                    },
                    {
                      year: "2020–2021",
                      items: [
                        "Acted as Release Manager for CCPA compliance rollout — aligned Legal, Product, Design, and Engineering under a tight deadline.",
                        "Built both backend and frontend (Dojo, PHP, React) to support privacy toggles across four surfaces.",
                        "Promoted to Software Engineer II for strong execution, leadership, and technical depth.",
                      ],
                    },
                    {
                      year: "2019",
                      items: [
                        "Reworked campaign checklist validation logic and implemented backend tests that reduced bugs across editor features.",
                        "Served as the go-to for cross-team feature delivery and troubleshooting across editor and domains infrastructure.",
                      ],
                    },
                  ].map((section) => (
                    <div key={section.year} className="group border-b border-white/10 pb-4 last:border-none">
                      <h3 className="text-3xl font-extrabold text-white mb-3 text-center group-hover:text-yellow-400 transition">
                        {section.year}
                      </h3>
                      <ul className="list-disc list-outside pl-6 space-y-2 text-lg text-gray-200 leading-relaxed">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="hover:text-white transition duration-200">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </main>
  );
}
