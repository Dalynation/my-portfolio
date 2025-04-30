'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showText, setShowText] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [hideDescription, setHideDescription] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  const handleLogoClick = () => {
    setShowDetails(!showDetails);
  };

  // Skip intro function
  const handleSkipIntro = useCallback(() => {
    setShowText(false);
    setShowDescription(false);
    setHideDescription(true);
    setShowExperience(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 4000);
    const descriptionTimer = setTimeout(() => setShowDescription(true), 5000);
    const hideDescriptionTimer = setTimeout(() => setHideDescription(true), 13000);
    const experienceTimer = setTimeout(() => setShowExperience(true), 14000);

    const skipListener = () => handleSkipIntro();
    window.addEventListener('keydown', skipListener);
    window.addEventListener('click', skipListener);

    return () => {
      clearTimeout(timer);
      clearTimeout(descriptionTimer);
      clearTimeout(hideDescriptionTimer);
      clearTimeout(experienceTimer);
      window.removeEventListener('keydown', skipListener);
      window.removeEventListener('click', skipListener);
    };
  }, [handleSkipIntro]);

  const experienceData = [
    {
      year: '2025',
      items: [
        'Took ownership of critical bugs in recommendation and content systems.',
        'Migrated legacy job runners to new architecture.',
        'Designed logging systems for real-time insights.',
        'Built an internal event authoring tool.',
      ],
    },
    {
      year: '2024',
      items: [
        'Delivered backend for customizable product feeds.',
        'Integrated Secret Manager, removed hardcoded secrets.',
        'Validated JAR files at runtime to reduce deployment risk.',
      ],
    },
    {
      year: '2023',
      items: [
        'Enabled advanced product filtering logic.',
        'Refactored campaign checklist editor.',
        'Planned cloud migration and added observability.',
      ],
    },
    {
      year: '2022',
      items: [
        'Built booking backend in Golang with GCP Spanner.',
        'Designed schema for external calendar data.',
      ],
    },
    {
      year: '2020–2021',
      items: [
        'Release Manager for CCPA rollout.',
        'Built backend/frontend for privacy toggles.',
        'Promoted for strong leadership and execution.',
      ],
    },
    {
      year: '2019',
      items: [
        'Reworked checklist validation and tests.',
        'Handled cross-team feature delivery and troubleshooting.',
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-black text-white px-4 sm:px-8 pt-12">
      <AnimatePresence>
        {showText && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4"
            >
              Hello, I&apos;m Dalyn
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl"
            >
              Backend Engineer | Fullstack Developer
            </motion.p>
          </motion.div>
        )}

        {showDescription && !hideDescription && (
          <motion.div
            key="description-wrapper"
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              key="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl text-center max-w-2xl text-white"
            >
              I specialize in building scalable backend systems and full-stack applications, focusing on clean architecture and performance.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {showExperience && (
        <>
          <div className="flex space-x-8 mt-20 border-b border-white/10">
            {['experience', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-lg font-semibold transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="relative mt-12 w-full max-w-5xl min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute w-full flex flex-col items-center"
                >
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

                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="mt-6 w-full"
                    >
                      <div className="bg-black py-12 px-6 sm:px-12">
                        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl space-y-10">
                          {experienceData.map((section) => (
                            <div key={section.year} className="group border-b border-white/10 pb-4 last:border-none">
                              <h3 className="text-3xl font-extrabold text-white mb-3 text-center group-hover:text-yellow-400 transition">
                                {section.year}
                              </h3>
                              <ul className="list-disc list-inside mx-auto text-center space-y-2 text-lg text-gray-200 leading-relaxed max-w-xl">
                                {section.items.map((item, idx) => (
                                  <li key={idx} className="hover:text-white transition duration-200 text-left">
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

              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute w-full text-center text-gray-300 text-lg"
                >
                  <p>Projects page coming soon...</p>
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute w-full text-center text-gray-300 text-lg"
                >
                  <p>You can contact me at Dalynsmall16@gmail.com</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </main>
  );
}