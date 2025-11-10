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
    id: "rh-automation",
    title: "Automação de RH - Triagem Inteligente",
    description:
      "Sistema em Python que automatiza a triagem inicial de currículos com pontuação, relatórios e comunicação automática.",
    image: "https://github.com/fzeglan/rh-automation/raw/main/requirements/executando.png",
    tags: ["Python", "Pandas", "CSV", "JSON", "Automação"],
    repo: "https://github.com/fzeglan/rh-automation",
  },
  {
    id: "clinic-management-system",
    title: "Sistema Clínico - Python + PostgreSQL",
    description:
      "Backend modular com CRUD completo e modelagem relacional em PostgreSQL; base pronta para GUI Tkinter.",
    image: "https://customer-assets.emergentagent.com/job_python-automator/artifacts/0336p76i_image.png",
    tags: ["Python", "PostgreSQL", "CRUD", "SQL"],
    repo: "https://github.com/fzeglan/clinic-management-system",
  },
  {
    id: "whatsapp-ai-automation-fiqon",
    title: "WhatsApp AI Automation (FiqOn + GPT + Z-API)",
    description:
      "Automação completa de atendimento e vendas via WhatsApp com fluxo no-code, IA e integrações por webhook.",
    image: "https://github.com/fzeglan/whatsapp-ai-automation-fiqon/raw/main/imagens/fluxo-fiqon.png",
    tags: ["WhatsApp", "Z-API", "GPT", "No-code"],
    repo: "https://github.com/fzeglan/whatsapp-ai-automation-fiqon",
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
