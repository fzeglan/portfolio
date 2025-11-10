import React, { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Menu, Info, Wrench, FolderGit2, HelpCircle, Mail } from "lucide-react";
import { CONTACT_LINKS } from "../mock/mock";

const BRAND = {
  name: "Felipe Zeglan",
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DesktopHeader({ visible }) {
  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-4 z-50 hidden justify-center md:flex transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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

function MobileHeader({ visible }) {
  const [open, setOpen] = useState(false);

  const handleGo = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 50);
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 md:hidden transition-transform duration-250 will-change-transform ${
        open ? "translate-y-0" : visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-3 mt-3 rounded-full border border-white/10 bg-background/30 backdrop-blur px-3 py-2 shadow-lg shadow-black/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-6 rounded-full bg-purple-500" />
          <span className="font-semibold text-sm">{BRAND.name}</span>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Abrir menu" className="p-2 rounded-full hover:bg-white/5">
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur border-l border-white/10">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <div className="h-2 w-6 rounded-full bg-purple-500" />
                <span>{BRAND.name}</span>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              <button className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5" onClick={() => handleGo("sobre")}>
                <Info className="h-5 w-5 text-purple-300" /> <span>Sobre</span>
              </button>
              <button className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5" onClick={() => handleGo("servicos")}>
                <Wrench className="h-5 w-5 text-purple-300" /> <span>Serviços</span>
              </button>
              <button className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5" onClick={() => handleGo("projetos")}>
                <FolderGit2 className="h-5 w-5 text-purple-300" /> <span>Projetos</span>
              </button>
              <button className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5" onClick={() => handleGo("faq")}>
                <HelpCircle className="h-5 w-5 text-purple-300" /> <span>FAQ</span>
              </button>
              <a
                href={CONTACT_LINKS.email}
                className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <Mail className="h-5 w-5 text-purple-300" /> <span>Enviar e-mail</span>
              </a>
              <div className="pt-2">
                <Button className="btn-primary w-full" onClick={() => handleGo("contato")}>Contato</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    lastYRef.current = window.scrollY || 0;
    const THRESHOLD = 8; // pixels

    const onScroll = () => {
      const y = window.scrollY || 0;
      const last = lastYRef.current;
      if (y < 10) {
        setVisible(true);
      } else if (y > last + THRESHOLD) {
        setVisible(false);
      } else if (y < last - THRESHOLD) {
        setVisible(true);
      }
      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <DesktopHeader visible={visible} />
      <MobileHeader visible={visible} />
    </>
  );
}
