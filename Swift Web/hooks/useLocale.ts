"use client"

import { useState, useEffect } from "react"
import { translations, type Locale } from "@/lib/translations"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is in Turkey based on timezone or other indicators
    const detectLocale = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const isTurkey =
          timezone === "Europe/Istanbul" || timezone === "Asia/Istanbul" || navigator.language.startsWith("tr")

        const savedLocale = localStorage.getItem("locale") as Locale
        if (savedLocale && (savedLocale === "en" || savedLocale === "tr")) {
          setLocale(savedLocale)
        } else {
          setLocale(isTurkey ? "tr" : "en")
        }
      } catch (error) {
        setLocale("en")
      }
      setIsLoading(false)
    }

    detectLocale()
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    // Force re-render by triggering a state change
    window.location.reload()
  }

  const t = translations[locale]

  return { locale, changeLocale, t, isLoading }
}
