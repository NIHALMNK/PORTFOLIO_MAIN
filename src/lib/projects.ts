export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  year: string;
  techStack: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "kizunafit",
    title: "KIZUNAFIT",
    description: "Freelance fitness coaching platform connecting trainers and clients globally.",
    year: "2024",
    techStack: "Next.js · Node.js · MongoDB · Redis · TypeScript",
    image: "/projects/kizunafit.png",
  },
  {
    id: "02",
    slug: "realtime-chat",
    title: "REALTIME CHAT",
    description: "Realtime communication platform using WebRTC and Socket.IO.",
    year: "2024",
    techStack: "React · Node.js · Socket.IO · WebRTC",
    image: "/projects/chat.png",
  },
  {
    id: "03",
    slug: "editorial-cms",
    title: "EDITORIAL CMS",
    description: "Minimalist content management platform with rich-text editing.",
    year: "2023",
    techStack: "Next.js · PostgreSQL · Tiptap · Prisma",
    image: "/projects/cms.png",
  },
  {
    id: "04",
    slug: "devflow",
    title: "DEVFLOW",
    description: "Collaborative developer workflow and productivity management system.",
    year: "2023",
    techStack: "React · Express · Redis · TypeScript",
    image: "/projects/devflow.png",
  },
  {
    id: "05",
    slug: "mono-studio",
    title: "MONO STUDIO",
    description: "Creative studio portfolio platform with cinematic storytelling experience.",
    year: "2024",
    techStack: "Next.js · Framer Motion · TailwindCSS",
    image: "/projects/mono.png",
  },
];
