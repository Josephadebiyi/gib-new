"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation()

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("en")}
        className="text-xs px-2 py-1"
      >
        EN
      </Button>
      <span className="text-white/60">|</span>
      <Button
        variant={language === "lt" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("lt")}
        className="text-xs px-2 py-1"
      >
        LT
      </Button>
    </div>
  )
}
