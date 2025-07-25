"use client"

import { motion } from "framer-motion"

export function TopLighting() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main top-down light */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(139, 92, 246, 0.2) 0%,
              rgba(139, 92, 246, 0.1) 30%,
              rgba(139, 92, 246, 0.05) 60%,
              transparent 100%
            )
          `,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Focused light on title area */}
      <motion.div
        className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-64"
        style={{
          background: `
            radial-gradient(
              ellipse at center top,
              rgba(139, 92, 246, 0.15) 0%,
              rgba(139, 92, 246, 0.08) 40%,
              transparent 70%
            )
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Subtle side lights */}
      {[-300, 300].map((offset, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-48 h-80"
          style={{
            left: `calc(50% + ${offset}px)`,
            background: `
              linear-gradient(
                180deg,
                rgba(139, 92, 246, 0.08) 0%,
                rgba(139, 92, 246, 0.03) 50%,
                transparent 100%
              )
            `,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
