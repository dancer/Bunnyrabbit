"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"

export default function ComingSoonPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)
  const [showBunny, setShowBunny] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 800)

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => {
      clearTimeout(timer)
      clearInterval(cursorInterval)
    }
  }, [])

  // ASCII art animation
  const rabbitLines = [
    "                 ,",
    "                /|      __",
    "               / |   ,-~ /",
    "              Y :|  //  /",
    "              | jj /( .^",
    '              >-"~"-v"',
    "             /       Y",
    "            jo  o    |",
    "           ( ~T~     j",
    "            >._-' _./",
    '           /   "~"  |',
    "          Y     _,  |",
    '         /| ;-"~ _  l',
    '        / l/ ,-"~    \\',
    "        \\//\\/      .- \\",
    "         Y        /    Y",
    "         l       I     !",
    '         ]\\      _\\    /"\\',
    '        (" ~----( ~   Y.  )',
  ]

  // Animation for the rabbit's ear
  const earAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -1, 0, -1, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: 2,
        repeatDelay: 3,
      },
    },
  }

  // Animation for the rabbit's eye
  const eyeAnimation: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0, 1],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 0.3,
        repeatDelay: 4,
      },
    },
  }

  // Animation for the rabbit's body
  const bodyAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, 1, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: 1.5,
        repeatDelay: 2,
      },
    },
  }

  // Typing animation for the initialization text
  const initText =
    "Initializing bunnyrabb.it\nLoading core modules...............Done\nEstablishing secure connection.....Done\nVerifying integrity................Done\n"

  // Modify the animation variants for smoother transitions
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  return (
    <div
      className="min-h-screen bg-white text-black overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 font-mono"
      tabIndex={0}
    >
      <div className="w-full max-w-2xl relative h-[550px] md:h-[600px] -mt-8 md:mt-0 flex items-center">
        <AnimatePresence mode="wait">
          {isLoaded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 w-full"
            >
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3 }}
                className="absolute -top-4 md:top-0 left-0 w-full"
              >
                <div className="text-[10px] mb-1 text-gray-500">SYSTEM</div>
                <div className="text-xs">Welcome to bunnyrabb.it terminal [Version 1.0.0]</div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.6 }}
                className="absolute top-12 md:top-16 left-0 w-full"
              >
                <div className="text-[10px] mb-1 text-gray-500">COMMAND</div>
                <div className="text-xs font-bold">$ initialize bunnyrabb.it</div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 1.2 }}
                className="absolute top-28 md:top-32 left-0 w-full"
              >
                <div className="text-[10px] mb-1 text-gray-500">OUTPUT</div>
                <div className="text-[10px] whitespace-pre-wrap leading-tight">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypewriterText 
                      text={initText} 
                      delay={0.2} 
                      speed={20} 
                      onComplete={() => {
                        setTypingComplete(true)
                        setShowBunny(true)
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {showBunny && (
                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-48 left-0 w-full"
                  >
                    <motion.pre
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-mono text-[10px] leading-[1.2]"
                    >
                      {rabbitLines.map((line, index) => {
                        // Apply different animations to different parts of the rabbit
                        if (index <= 2) {
                          // Ear animation
                          return (
                            <motion.div
                              key={`line-${index}`}
                              variants={earAnimation}
                              initial="initial"
                              animate="animate"
                              className="whitespace-pre"
                            >
                              {line}
                            </motion.div>
                          )
                        } else if (index === 7) {
                          // Eye animation (line with "o o")
                          return (
                            <div key={`line-${index}`} className="whitespace-pre">
                              {"            j"}
                              <motion.span variants={eyeAnimation} initial="initial" animate="animate">
                                {"o  o"}
                              </motion.span>
                              {"    |"}
                            </div>
                          )
                        } else if (index >= 9 && index <= 15) {
                          // Body animation
                          return (
                            <motion.div
                              key={`line-${index}`}
                              variants={bodyAnimation}
                              initial="initial"
                              animate="animate"
                              className="whitespace-pre"
                            >
                              {line}
                            </motion.div>
                          )
                        } else {
                          // Static parts
                          return <div key={`line-${index}`} className="whitespace-pre">{line}</div>
                        }
                      })}
                    </motion.pre>
                  </motion.div>
                )}
              </AnimatePresence>

              {showBunny && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.3, delay: 1 }}
                  className="absolute top-[400px] md:top-[440px] left-0 w-full"
                >
                  <div className="text-[10px] mb-1 text-gray-500">SYSTEM</div>
                  <div className="text-xs">bunnyrabb.it initialized successfully.</div>
                </motion.div>
              )}

              {showBunny && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.3, delay: 1.5 }}
                  className="absolute top-[440px] md:top-[480px] left-0 w-full"
                >
                  <div className="text-[10px] mb-1 text-gray-500">COMMAND</div>
                  <div className="text-xs font-bold">$ status</div>
                </motion.div>
              )}

              {showBunny && (
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.3, delay: 2 }}
                  className="absolute top-[480px] md:top-[520px] left-0 w-full"
                >
                  <div className="text-[10px] mb-1 text-gray-500">OUTPUT</div>
                  <div className="text-xs">
                    <div className="mb-1">
                      STATUS: <span className="font-bold">COMING SOON</span>
                    </div>
                    <div className="mb-1">
                      DESCRIPTION: <span className="font-bold">Something mysterious is coming soon</span>
                    </div>
                    <div>
                      LAUNCH: <span className="font-bold">PENDING</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
              <span className="text-xs">Loading</span>
              <span className="ml-1 h-3 w-1.5 bg-black inline-block" style={{ opacity: cursorVisible ? 1 : 0 }}></span>
            </div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.7, duration: 0.5 }}
        className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-gray-500"
      >
        © 2025 bunnyrabb.it
      </motion.div>
    </div>
  )
}

// Typewriter effect component
interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  onComplete?: () => void
}

function TypewriterText({ text, delay = 0, speed = 50, onComplete }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      // Call onComplete when typing is finished
      const completeTimer = setTimeout(() => {
        onComplete()
      }, 500) // Add a small delay after typing finishes
      return () => clearTimeout(completeTimer)
    }
  }, [currentIndex, text, speed, startTyping, onComplete])

  return <div>{displayedText}</div>
}

