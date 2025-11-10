import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Info, Wrench, FolderGit2, HelpCircle, Mail } from "lucide-react";

const BRAND = {
  name: "Felipe Zeglan",
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DesktopHeader() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 hidden justify-center md:flex">
      <header className="pointer-events-auto mx-auto w-full max-w-5xl rounded-full border border-white/10 bg-background/30 backdrop-blur px-4 py-2 shadow-lg shadow-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2 w-8 rounded-full bg-purple-500" />
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <button className="nav-link" onClick={() => scrollToId("sobre")}>Sobre</button>
            <button className="nav-link" onClick={() => scrollToId("servicos")}>Serviços</button>
            <button className="nav-link" onClick={() => scrollToId("projetos")}>Projetos</button>
            <button className="nav-link" onClick={() => scrollToId("faq")}>FAQ</button>
            <Button variant="default" className="btn-primary" onClick={() => scrollToId("contato")}>
              Contato
            </Button>
          </nav>
        </div>
      </header>
    </div>
  );
}

function MobileSideRail() {
  return (
    <aside
      aria-label="Navegação principal"
      className="fixed right-3 top-1/2 z-50 -translate-y-1/2 md:hidden"
    >
      <div className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-background/40 backdrop-blur p-2 shadow-lg shadow-black/30">
        <button
          aria-label="Ir para Sobre"
          className="p-2 rounded-full hover:bg-white/5"
          onClick={() => scrollToId("sobre")}
        >
          <Info className="h-5 w-5 text-purple-300" />
        </button>
        <button
          aria-label="Ir para Serviços"
          className="p-2 rounded-full hover:bg-white/5"
          onClick={() => scrollToId("servicos")}
        >
          <Wrench className="h-5 w-5 text-purple-300" />
        </button>
        <button
          aria-label="Ir para Projetos"
          className="p-2 rounded-full hover:bg-white/5"
          onClick={() => scrollToId("projetos")}
        >
          <FolderGit2 className="h-5 w-5 text-purple-300" />
        </button>
        <button
          aria-label="Ir para FAQ"
          className="p-2 rounded-full hover:bg-white/5"
          onClick={() => scrollToId("faq")}
        >
          <HelpCircle className="h-5 w-5 text-purple-300" />
        </button>
        <a
          aria-label="Contato por e-mail"
          className="p-2 rounded-full hover:bg-white/5"
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contato");
          }}
        >
          <Mail className="h-5 w-5 text-purple-300" />
        </a>
      </div>
    </aside>
  );
}

export default function Header() {
  useEffect(() => {
    // fixa tema escuro
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <DesktopHeader />
      <MobileSideRail />
    </>
  );
}
