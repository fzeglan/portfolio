import React, { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";

const BRAND = {
  name: "Felipe Zeglan",
};

function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true; // default dark
    setEnabled(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const onToggle = (value) => {
    setEnabled(value);
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("theme", value ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <SunMedium className="h-4 w-4 text-foreground" />
      <Switch checked={enabled} onCheckedChange={onToggle} />
      <Moon className="h-4 w-4 text-foreground" />
    </div>
  );
}

export default function Header() {
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700" />
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button className="nav-link" onClick={() => handleNav("sobre")}>Sobre</button>
          <button className="nav-link" onClick={() => handleNav("servicos")}>Serviços</button>
          <button className="nav-link" onClick={() => handleNav("projetos")}>Projetos</button>
          <button className="nav-link" onClick={() => handleNav("faq")}>FAQ</button>
          <Button variant="default" className="btn-primary" onClick={() => handleNav("contato")}>Contato</Button>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="md:hidden">
            <Button size="sm" variant="outline" onClick={() => handleNav("contato")}>Contato</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
