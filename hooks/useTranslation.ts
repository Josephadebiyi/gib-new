"use client"

import { useState, useEffect, useCallback } from "react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("en") // Default language

  useEffect(() => {
    // Attempt to load language from localStorage or browser settings
    const storedLang = localStorage.getItem("language") as Language
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang)
    } else {
      const browserLang = navigator.language.split("-")[0] as Language
      if (translations[browserLang]) {
        setLanguage(browserLang)
      }
    }
  }, [])

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[language]?.[key] || key // Fallback to key if translation not found, added nullish coalescing for safety
    },
    [language],
  )

  const changeLanguage = useCallback((newLang: Language) => {
    if (translations[newLang]) {
      setLanguage(newLang)
      localStorage.setItem("language", newLang)
    } else {
      console.warn(`Translation for language '${newLang}' not found.`)
    }
  }, [])

  return { t, language, changeLanguage }
}
