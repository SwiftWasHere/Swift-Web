"use client"

import { motion } from "framer-motion"

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main light beam from top */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Side light beams */}
      {[-200, -100, 100, 200].map((offset, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-32 h-full"
          style={{
            left: `calc(50% + ${offset}px)`,
            background:
              "linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 80%)",
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Spotlight effect */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
