"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/useLocale"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale()

  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={locale === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => changeLocale("en")}
          className={`rounded-full transition-all duration-300 ${
            locale === "en"
              ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white glow-button"
              : "text-purple-200 hover:text-white hover:bg-purple-600/20 border border-purple-400/30"
          }`}
        >
          EN
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={locale === "tr" ? "default" : "ghost"}
          size="sm"
          onClick={() => changeLocale("tr")}
          className={`rounded-full transition-all duration-300 ${
            locale === "tr"
              ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white glow-button"
              : "text-purple-200 hover:text-white hover:bg-purple-600/20 border border-purple-400/30"
          }`}
        >
          TR
        </Button>
      </motion.div>
    </motion.div>
  )
}
