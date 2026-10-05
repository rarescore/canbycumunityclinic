import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { hyText } from "../../lib/hy.ts";

export type Lang = "en" | "es" | "hy";
export type L = { en: string; es: string; hy?: string };

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("canby-lang");
    if (saved === "es" || saved === "en" || saved === "hy") setLang(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang === "hy" ? "hy" : lang;
    window.localStorage.setItem("canby-lang", lang);
  }, [lang, ready]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("I18nProvider is missing");
  return value;
}

export function useTx() {
  const { lang, setLang } = useI18n();
  const tx = (value: L) => {
    if (lang === "hy") return value.hy ?? hyText[value.en] ?? value.en;
    return value[lang];
  };
  return { lang, setLang, tx };
}
