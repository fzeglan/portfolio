// Mock data for Felipe Zeglan portfolio (frontend-only, no backend calls)
// Icons are referenced by name and mapped in UI components

export const HERO_PLACEHOLDER = {
  // Temporary stock portrait picked to match dark theme until real photo is provided
  url:
    "https://images.unsplash.com/photo-1611111082664-534b2cd71d6f",
  alt: "Retrato profissional temporário em fundo escuro",
};

export const SERVICES = [
  {
    id: "automation",
    title: "Automação de Processos",
    icon: "Puzzle",
    description:
      "Elimino tarefas repetitivas com scripts e robôs confiáveis que reduzem custos e erros.",
  },
  {
    id: "apis",
    title: "Criação de APIs e Integrações",
    icon: "Network",
    description:
      "Interfaces e conectores entre sistemas, ERPs e lojas virtuais para dados fluírem sem atrito.",
  },
  {
    id: "chatbots",
    title: "Chatbots Inteligentes",
    icon: "Bot",
    description:
      "Atendimento via WhatsApp e Telegram com NLP/IA para respostas rápidas e personalizadas.",
  },
  {
    id: "dashboards",
    title: "Sistemas e Painéis",
    icon: "BarChart3",
    description:
      "Aplicações locais e dashboards de controle para monitorar indicadores e decisões.",
  },
];

export const PROJECTS = [
  {
    id: "estoque-api",
    title: "Controle de Estoque com API Local",
    description:
      "Gestão de produtos, entradas e saídas com API local e sincronização em planilhas.",
    image:
      "https://images.unsplash.com/photo-1586521995568-cdbb0e4b4a74", // armazém/estoque
    tags: ["Python", "API Local", "Automação"],
  },
  {
    id: "whatsapp-ia",
    title: "Bot de Atendimento WhatsApp + IA",
    description:
      "Assistente com processamento de linguagem e integrações para respostas automáticas.",
    image:
      "https://images.unsplash.com/photo-1555421689-43cad7100751", // chat interface vibe
    tags: ["WhatsApp", "IA", "Integração"],
  },
  {
    id: "planilhas-emails",
    title: "Automação de Planilhas e E-mails",
    description:
      "Pipelines que transformam planilhas em relatórios e disparam e-mails inteligentes.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4", // teclado/código limpo
    tags: ["Pandas", "Automação", "SMTP"],
  },
];

export const FAQ = [
  {
    q: "Posso contratar apenas uma automação específica?",
    a: "Sim. Projetos podem ser fechados por escopo: uma automação única ou um pacote de melhorias contínuas.",
  },
  {
    q: "Você cria sistemas com interface gráfica?",
    a: "Sim. Entrego UIs simples (desktop ou web) quando a operação pede interação direta do usuário.",
  },
  {
    q: "Como é o processo para desenvolver uma automação personalizada?",
    a: "Briefing → Prova de conceito → Iterações curtas → Entrega com documentação e suporte inicial.",
  },
];

export const CONTACT_LINKS = {
  email: "mailto:contato@fyzestore.com",
  github: "https://github.com/fzeglan",
  linkedin: "https://linkedin.com/in/felipezeglan",
};

// Local storage helpers for mocked contact form
const STORAGE_KEY = "fz_portfolio_contact_submissions";

export function saveContactSubmission(payload) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    existing.push({ ...payload, id: Date.now() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return true;
  } catch (e) {
    return false;
  }
}

export function listContactSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
