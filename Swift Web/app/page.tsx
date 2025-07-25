"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Film, DrillIcon as Drone, Mail, MapPin, Play, Award, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import { LanguageSwitcher } from "@/components/language-switcher"
import { WireframeBackground } from "@/components/wireframe-background"
import { ParticleSystem } from "@/components/particle-system"
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const { t, isLoading } = useLocale()
  const { scrollYProgress } = useScroll()
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false)

  // Smooth scroll fonksiyonu
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const navHeight = 80 // Navigasyon yüksekliği için offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  const scrollToPortfolio = () => {
    smoothScrollTo("portfolio")
  }

  const scrollToContact = () => {
    smoothScrollTo("contact")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimationComplete(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <motion.div
        className="min-h-screen bg-black flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <WireframeBackground />
        <motion.div
          className="text-white text-xl relative z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <WireframeBackground />
      <ParticleSystem />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-black/85 backdrop-blur-md border-b border-gray-800/50 z-50 relative"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold text-purple-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                textShadow: "0 0 8px rgba(139, 92, 246, 0.4)",
              }}
            >
              SWIFT
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "about", text: t.nav.about },
                { href: "services", text: t.nav.services },
                { href: "portfolio", text: t.nav.portfolio },
                { href: "contact", text: t.nav.contact },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.href}`}
                    className="hover:text-purple-400 transition-all duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo(item.href)
                    }}
                  >
                    {item.text}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
              <LanguageSwitcher />
            </div>
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-20 text-center px-4">
          <div className="mb-8">
            <motion.h1
              className="font-bold mb-4 natural-neon"
              initial={{
                fontSize: "12rem",
                scale: 1.8,
                opacity: 0,
              }}
              animate={{
                fontSize: ["12rem", "8rem", "6rem"],
                scale: [1.8, 1.1, 1],
                opacity: [0, 0.9, 1],
              }}
              transition={{
                duration: 3.5,
                ease: "easeOut",
                times: [0, 0.7, 1],
              }}
              style={{
                lineHeight: 1,
              }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-4 text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.5 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="text-purple-400"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.4))",
                  }}
                >
                  <Film className="w-6 h-6" />
                </motion.div>
                <span className="text-purple-200">{t.hero.subtitle}</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 rounded-full glow-button px-8 py-6 text-lg font-semibold border border-purple-400/20"
                onClick={scrollToPortfolio}
              >
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}>
                  <Play className="w-5 h-5 mr-2" />
                </motion.div>
                {t.hero.viewWork}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400/60 text-purple-200 hover:bg-purple-600/15 hover:text-white bg-transparent rounded-full glow-button px-8 py-6 text-lg font-semibold border-2"
                onClick={scrollToContact}
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                </motion.div>
                {t.hero.getInTouch}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -8, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          onClick={() => smoothScrollTo("about")}
          style={{ cursor: "pointer" }}
        >
          <div className="w-6 h-10 border-2 border-purple-400/70 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:pr-8"
            >
              <motion.h2 className="text-4xl font-bold mb-6 text-[#b975ff] heading-glow">{t.about.title}</motion.h2>

              <motion.p
                className="text-gray-300 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t.about.description1}
              </motion.p>

              <motion.p
                className="text-gray-300 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t.about.description2}
              </motion.p>

              <motion.div
                className="grid grid-cols-3 gap-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Award, number: "50+", text: t.about.projects },
                  { icon: Users, number: "30+", text: t.about.clients },
                  { icon: Clock, number: "5+", text: t.about.years },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full mx-auto mb-2 purple-glow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-purple-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.number}
                    </motion.div>
                    <div className="text-gray-400">{item.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative md:pl-8 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Swift - Professional Editor"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl border border-gray-700/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl font-bold mb-4 text-[#b975ff] heading-glow">{t.services.title}</motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.services.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Film,
                title: t.services.videoEditing.title,
                description: t.services.videoEditing.description,
                badges: ["Adobe Premiere", "After Effects", "DaVinci Resolve"],
              },
              {
                icon: Drone,
                title: t.services.dronecinematography.title,
                description: t.services.dronecinematography.description,
                badges: ["4K Recording", "Licensed Pilot", "Insurance"],
              },
              {
                icon: Camera,
                title: t.services.contentCreation.title,
                description: t.services.contentCreation.description,
                badges: ["Social Media", "Corporate", "Marketing"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 purple-glow rounded-2xl overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full mb-4 purple-glow"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>

                    <motion.h3
                      className="text-xl font-semibold mb-3 text-purple-200 h-7 flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-400 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-2">
                      {service.badges.map((badge, badgeIndex) => (
                        <motion.div
                          key={badgeIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + badgeIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="rounded-full bg-purple-600/15 text-purple-200 border-purple-400/20"
                          >
                            {badge}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl font-bold mb-4 text-[#b975ff] heading-glow">{t.portfolio.title}</motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.portfolio.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="group relative overflow-hidden rounded-2xl purple-glow border border-gray-700/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                  <Image
                    src={`/placeholder.svg?height=300&width=400&query=cinematic video editing project ${item}`}
                    alt={`${t.portfolio.projectTitle} ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button
                      variant="outline"
                      className="border-purple-400/60 text-purple-200 hover:bg-purple-600/20 hover:text-white bg-transparent rounded-full glow-button"
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                      </motion.div>
                      {t.portfolio.viewProject}
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-gray-900/60 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-purple-200 font-semibold">
                    {t.portfolio.projectTitle} {item}
                  </h3>
                  <p className="text-gray-300 text-sm">{t.portfolio.projectType}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl font-bold mb-4 text-[#b975ff] heading-glow">{t.contact.title}</motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.contact.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">{t.contact.getInTouch}</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, title: t.contact.email, info: "swiftmakesitforyou@gmail.com" },
                  { icon: MapPin, title: t.contact.location, info: t.contact.worldwide },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full purple-glow"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-purple-200">{item.title}</div>
                      <div className="text-gray-400">{item.info}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-700/30 purple-glow rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    {[
                      { label: t.contact.form.name, placeholder: t.contact.form.namePlaceholder, type: "text" },
                      { label: t.contact.form.email, placeholder: t.contact.form.emailPlaceholder, type: "email" },
                    ].map((field, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium mb-2 text-purple-200">{field.label}</label>
                        <motion.input
                          type={field.type}
                          className="w-full px-3 py-2 bg-black/60 border border-gray-600/40 rounded-full focus:outline-none focus:border-purple-400/60 transition-all duration-300 text-white placeholder-gray-500"
                          placeholder={field.placeholder}
                          whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2 text-purple-200">
                        {t.contact.form.projectType}
                      </label>
                      <motion.select
                        className="w-full px-3 py-2 bg-black/60 border border-gray-600/40 rounded-full focus:outline-none focus:border-purple-400/60 transition-all duration-300 text-white"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <option>{t.contact.form.videoEditing}</option>
                        <option>{t.contact.form.dronecinematography}</option>
                        <option>{t.contact.form.fullProduction}</option>
                        <option>{t.contact.form.other}</option>
                      </motion.select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2 text-purple-200">{t.contact.form.message}</label>
                      <motion.textarea
                        rows={4}
                        className="w-full px-3 py-2 bg-black/60 border border-gray-600/40 rounded-2xl focus:outline-none focus:border-purple-400/60 transition-all duration-300 resize-none text-white placeholder-gray-500"
                        placeholder={t.contact.form.messagePlaceholder}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 rounded-full glow-button py-3 text-lg font-semibold">
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {t.contact.form.send}
                        </motion.span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-8 bg-black border-t border-gray-800/50 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-2xl font-bold mb-4 md:mb-0 text-purple-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                textShadow: "0 0 8px rgba(139, 92, 246, 0.4)",
              }}
            >
              SWIFT
            </motion.div>
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Swift. {t.footer.rights}
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
