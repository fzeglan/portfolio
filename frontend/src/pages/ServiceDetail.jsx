import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SERVICE_DETAILS, CONTACT_LINKS } from "../mock/mock";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const data = SERVICE_DETAILS[serviceId];

  if (!data) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="outline" className="btn-outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar
          </Button>
          <h1 className="text-2xl font-bold">Serviço não encontrado</h1>
        </div>
        <p className="text-muted-foreground">Verifique o link ou volte para a página inicial.</p>
        <div className="mt-6"><Link to="/"><Button className="btn-primary">Ir para Home</Button></Link></div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {data.tags.map((t, i) => (
                <Badge key={`${t}-${i}`} className="badge-chip">{t}</Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{data.title}</h1>
            <p className="text-lg text-muted-foreground mt-3 max-w-prose">{data.subtitle}</p>
            <div className="flex gap-3 mt-6 flex-wrap">
              <a href={CONTACT_LINKS.email}><Button className="btn-primary"><Mail className="h-4 w-4 mr-2"/>Fale comigo</Button></a>
              <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer"><Button variant="outline" className="btn-outline"><ExternalLink className="h-4 w-4 mr-2"/>Ver GitHub</Button></a>
              <Button variant="outline" className="btn-outline" onClick={() => navigate(-1)}><ArrowLeft className="h-4 w-4 mr-2"/>Voltar</Button>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <Card className="card-soft">
              <CardContent className="p-5">
                <h3 className="text-base font-semibold mb-2">Stack Aplicada</h3>
                <div className="flex flex-wrap gap-2">
                  {data.stack.map((s, i) => (
                    <Badge key={`${s}-${i}`} className="badge-tag">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <Card className="card-hover md:col-span-2">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-2">O que entrego</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                {data.value_points.map((pt, i) => (
                  <li key={`vp-${i}`}>{pt}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-2">Benefícios</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                {data.benefits.map((pt, i) => (
                  <li key={`bf-${i}`}>{pt}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="card-soft">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold mb-3">Exemplo rápido (Python)</h3>
              <pre className="text-xs md:text-sm whitespace-pre-wrap leading-relaxed text-muted-foreground bg-black/20 rounded-md p-4 overflow-auto">
{data.example}
              </pre>
            </CardContent>
          </Card>
        </div>

        {data.faq && data.faq.length > 0 && (
          <div className="mt-10">
            <h3 className="section-title mb-4">Perguntas</h3>
            <Accordion type="single" collapsible>
              {data.faq.map((f, i) => (
                <AccordionItem key={`fq-${i}`} value={`fq-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </main>
  );
}
