// Mock data for Felipe Zeglan portfolio (frontend-only, no backend calls)
// Icons are referenced by name and mapped in UI components

export const HERO_PLACEHOLDER = {
  // Foto enviada pelo usuário (já com o molde correto)
  url:
    "https://customer-assets.emergentagent.com/job_python-automator/artifacts/flc2jkxw_Design_sem_nome__1_-removebg-preview.png",
  alt: "Foto de Felipe Zeglan",
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
      "/images/proj-1.svg",
    tags: ["Python", "API Local", "Automação"],
  },
  {
    id: "whatsapp-ia",
    title: "Bot de Atendimento WhatsApp + IA",
    description:
      "Assistente com processamento de linguagem e integrações para respostas automáticas.",
    image:
      "/images/proj-2.svg",
    tags: ["WhatsApp", "IA", "Integração"],
  },
  {
    id: "planilhas-emails",
    title: "Automação de Planilhas e E-mails",
    description:
      "Pipelines que transformam planilhas em relatórios e disparam e-mails inteligentes.",
    image:
      "/images/proj-3.svg",
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
