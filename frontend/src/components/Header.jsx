import React, { useEffect } from "react";
import { Button } from "../components/ui/button";

const BRAND = {
  name: "Felipe Zeglan",
};

export default function Header() {
  useEffect(() => {
    // Força tema escuro e remove qualquer toggle
    document.documentElement.classList.add("dark");
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex w-full justify-center">
      <header className="pointer-events-auto mx-auto w-full max-w-5xl rounded-full border border-white/10 bg-background/30 backdrop-blur px-4 py-2 shadow-lg shadow-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2 w-8 rounded-full bg-purple-500" />
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <button className="nav-link" onClick={() => handleNav("sobre")}>Sobre</button>
            <button className="nav-link" onClick={() => handleNav("servicos")}>Serviços</button>
            <button className="nav-link" onClick={() => handleNav("projetos")}>Projetos</button>
            <button className="nav-link" onClick={() => handleNav("faq")}>FAQ</button>
            <Button variant="default" className="btn-primary" onClick={() => handleNav("contato")}>Contato</Button>
          </nav>
        </div>
      </header>
    </div>
  );
}
