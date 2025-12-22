import { ChatStyle, GalleryItem, Message, Participant, TemplateCard } from "../types";

export const demoParticipants: Participant[] = [
  { id: "a", name: "Alex", color: "#06B6D4", side: "left" },
  { id: "b", name: "Dani", color: "#22C55E", side: "right" }
];

export const demoMessages: Message[] = [
  { id: "m1", senderId: "a", content: "¿Y si hacemos una historia tipo chat?", type: "text" },
  { id: "m2", senderId: "b", content: "Me encanta. Mantengamos ritmo corto y creíble.", type: "text" },
  { id: "m3", senderId: "a", content: "Skin oscuro o minimal?", type: "text" },
  { id: "m4", senderId: "b", content: "Oscuro para el mood. Podemos exportar en carrusel.", type: "text" },
  { id: "m5", senderId: "a", content: "Listo. Añadimos beats si hace falta.", type: "text" },
  { id: "m6", senderId: "b", content: "Y compartimos sin registro. Viva el remix.", type: "text" }
];

export const chatStyles: ChatStyle[] = [
  {
    id: "classic",
    name: "Clásico",
    accent: "#06B6D4",
    background: "linear-gradient(180deg, #0B1224 0%, #0F172A 100%)",
    bubbleLeft: "#0B1224",
    bubbleRight: "#0EA5E9"
  },
  {
    id: "dark",
    name: "Oscuro",
    accent: "#22C55E",
    background: "linear-gradient(180deg, #020617 0%, #0B1224 100%)",
    bubbleLeft: "#0F172A",
    bubbleRight: "#0F766E"
  },
  {
    id: "minimal",
    name: "Minimal",
    accent: "#8B5CF6",
    background: "linear-gradient(180deg, #E5E7EB 0%, #F9FAFB 100%)",
    bubbleLeft: "#FFFFFF",
    bubbleRight: "#DBEAFE"
  },
  {
    id: "ios",
    name: "iOS-like",
    accent: "#2563EB",
    background: "linear-gradient(180deg, #E2E8F0 0%, #FFFFFF 100%)",
    bubbleLeft: "#FFFFFF",
    bubbleRight: "#DCFCE7"
  },
  {
    id: "android",
    name: "Android-like",
    accent: "#22C55E",
    background: "linear-gradient(180deg, #0D1117 0%, #0F172A 100%)",
    bubbleLeft: "#111827",
    bubbleRight: "#16A34A"
  }
];

export const templates: TemplateCard[] = [
  {
    id: "malentendido",
    title: "El malentendido",
    tags: ["Humor", "2 personas", "Corta"],
    description: "Setup-conflicto-resolución con giro breve.",
    preview: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: "pitch-ux",
    title: "Pitch UX",
    tags: ["UX", "Media", "Serio"],
    description: "Diálogo cliente-diseñadora con notas de tono.",
    preview: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: "aula",
    title: "Clase relámpago",
    tags: ["Didáctico", "Grupo", "Corta"],
    description: "Microlección con profesor + 2 estudiantes.",
    preview: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=400&q=60"
  },
  {
    id: "meme",
    title: "Meme absurdo",
    tags: ["Humor", "Absurdista", "Remix"],
    description: "Remix rápido con beats muy cortos.",
    preview: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=400&q=60"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "ux-flow",
    title: "Feedback de onboarding",
    tags: ["UX", "Plot twist"],
    preview: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=60",
    collection: "UX flows",
    scenes: [
      { id: "s1", title: "Setup: duda del usuario" },
      { id: "s2", title: "Giro: la app responde en tono humano" },
      { id: "s3", title: "Cierre: CTA claro" }
    ]
  },
  {
    id: "microdrama",
    title: "Microdrama nocturno",
    tags: ["Drama", "Oscuro"],
    preview: "https://images.unsplash.com/photo-1517244877500-7f62c48f2ab5?auto=format&fit=crop&w=500&q=60",
    collection: "Microhistorias",
    scenes: [
      { id: "s1", title: "Escena 1 — Mensaje inesperado" },
      { id: "s2", title: "Escena 2 — Confesión" },
      { id: "s3", title: "Escena 3 — Decisión" }
    ]
  },
  {
    id: "aula-rapida",
    title: "Clase de comunicación",
    tags: ["Aula", "Didáctico"],
    preview: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=500&q=60",
    collection: "Clase: comunicación",
    scenes: [
      { id: "s1", title: "Tema" },
      { id: "s2", title: "Ejemplo práctico" },
      { id: "s3", title: "Checklist final" }
    ]
  },
  {
    id: "meme-meta",
    title: "Meme meta",
    tags: ["Meme", "Absurdos"],
    preview: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=60",
    collection: "Chats absurdos",
    scenes: [
      { id: "s1", title: "Setup" },
      { id: "s2", title: "Cambio de tono" },
      { id: "s3", title: "Remate" }
    ]
  }
];
