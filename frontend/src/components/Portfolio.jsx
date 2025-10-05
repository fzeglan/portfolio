import React, { useMemo, useState } from "react";
import { HERO_PLACEHOLDER, SERVICES, PROJECTS, FAQ, CONTACT_LINKS, saveContactSubmission } from "../mock/mock";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { toast } from "../hooks/use-toast";
import { Puzzle, Network, Bot, BarChart3, Github, Linkedin, Mail } from "lucide-react";
import { Toaster } from "./ui/toaster";

const ICONS = { Puzzle, Network, Bot, BarChart3 };

function Hero() {
  return (
    <section className="hero-gradient border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs tracking-widest uppercase text-neon mb-3">Automação • Python • Integrações</p>
          <h1 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl mb-4 font-manrope">
            Seu parceiro em automação e soluções inteligentes com Python
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-prose mb-8">
            Desenvolvo sistemas e integrações que aumentam produtividade e reduzem custos, com foco em resultados reais.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projetos"><Button size="lg" className="btn-primary">Ver Projetos</Button></a>
            <a href="#contato"><Button size="lg" variant="outline" className="btn-outline">Entre em Contato</Button></a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-neon/20 blur-xl" />
            <img
              src={HERO_PLACEHOLDER.url}
              alt={HERO_PLACEHOLDER.alt}
              className="relative h-48 w-48 md:h-64 md:w-64 rounded-full object-cover ring-2 ring-purple-500/60 shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  const chips = ["Python", "APIs", "Automação", "IA"];
  return (
    <section id="sobre" className="section-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title">Sobre mim</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Sou Felipe Zeglan, especialista em automação, tecnologia e programação em Python. Transformo ideias em sistemas que funcionam — de conectores entre plataformas a bots inteligentes e painéis sob medida.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {chips.map((c) => (
              <Badge key={c} className="badge-chip">{c}</Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.slice(0, 4).map((s) => {
            const Ico = ICONS[s.icon] || Puzzle;
            return (
              <Card key={s.id} className="card-soft">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-purple-500/15 flex items-center justify-center">
                      <Ico className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="section">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="section-title mb-8">Serviços</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s) => {
            const Ico = ICONS[s.icon] || Puzzle;
            return (
              <Card key={s.id} className="card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center mb-4">
                    <Ico className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{s.description}</p>
                  <Button variant="outline" className="btn-outline mt-auto">Saiba mais</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className="section-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="section-title">Projetos em Destaque</h2>
          <a href="#contato" className="text-sm text-purple-300 hover:underline">Ver todos os projetos</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <Card key={p.id} className="overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} className="badge-tag">{t}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Perguntas() {
  return (
    <section id="faq" className="section">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h2 className="section-title mb-6 text-center">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const isValid = useMemo(() => {
    return (
      form.nome.trim().length >= 2 &&
      /.+@.+\..+/.test(form.email) &&
      form.mensagem.trim().length >= 10
    );
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    const ok = saveContactSubmission({ ...form });
    if (ok) {
      toast({ title: "Mensagem enviada (mock)", description: "Recebi seus dados localmente. Em breve integro com o backend.", });
      setForm({ nome: "", email: "", mensagem: "" });
    } else {
      toast({ title: "Falha ao salvar (mock)", description: "Tente novamente.", });
    }
  };

  return (
    <section id="contato" className="section-cta">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
        <h2 className="section-title mb-2">Vamos construir algo incrível juntos?</h2>
        <p className="text-muted-foreground mb-8">Fale comigo por e-mail ou redes, ou envie uma mensagem pelo formulário abaixo.</p>
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <a href={CONTACT_LINKS.email} target="_blank" rel="noreferrer"><Button className="btn-primary" variant="default"><Mail className="mr-2 h-4 w-4" /> E-mail</Button></a>
          <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer"><Button variant="outline" className="btn-outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button></a>
          <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="btn-outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button></a>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3 text-left">
          <div className="grid md:grid-cols-2 gap-3">
            <Input placeholder="Nome" value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))} />
            <Input type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          </div>
          <Textarea rows={5} placeholder="Mensagem" value={form.mensagem} onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))} />
          <div className="flex justify-end">
            <Button type="submit" disabled={!isValid} className="btn-primary">Enviar</Button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 to-purple-700" />
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Felipe Zeglan. Todos os direitos reservados.</span>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#" className="nav-link">Home</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#projetos" className="nav-link">Projetos</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Perguntas />
      <Contato />
      <Footer />
    </main>
  );
}
