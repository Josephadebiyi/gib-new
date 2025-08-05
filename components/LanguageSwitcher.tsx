"use client"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { useTranslation, type Language } from "@/hooks/useTranslation"

export function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation()

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "lt" as Language, name: "Lietuvių", flag: "🇱🇹" },
    { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
    { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <Select value={language} onValueChange={(value: Language) => changeLanguage(value)}>
      <SelectTrigger className="w-auto border-0 bg-transparent text-white hover:bg-white/10 focus:ring-0">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span className="text-sm">
            {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center space-x-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
