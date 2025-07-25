"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function WireframeBackground() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main 3D Wireframe Grid */}
      <motion.div className="absolute inset-0 wireframe-3d" style={{ y, rotate }}>
        <div className="grid-3d" />
      </motion.div>

      {/* Additional wireframe layers for depth */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 118px,
              rgba(139, 92, 246, 0.06) 119px,
              rgba(139, 92, 246, 0.06) 121px,
              transparent 122px
            )
          `,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "240px 240px"],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating wireframe shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-purple-500/8 rounded-lg"
          style={{
            width: Math.random() * 100 + 60,
            height: Math.random() * 100 + 60,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40],
            y: [0, Math.random() * 80 - 40],
            rotate: [0, 360],
            opacity: [0.03, 0.12, 0.03],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Wireframe dots pattern */}
      <motion.div
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
