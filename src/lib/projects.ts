export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface ProjectGalleryImage {
  id: string;
  image: string;
}

export interface Project {
  id: string;
  slug: string;

  title: string;
  subtitle: string;
  description: string;

  year: string;
  duration: string;
  role: string;

  liveUrl?: string;
  githubUrl?: string;

  coverImage: string;

  gallery: ProjectGalleryImage[];

  overview: {
    problem: string;
    solution: string;
  };

  features: ProjectFeature[];

  techStack: TechGroup[];

  closing: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "kizunafit",
    title: "KIZUNAFIT",
    subtitle: "Scalable client-trainer fitness coaching and analytics engine",
    description: "An immersive digital ecosystem designed for premium fitness coaching, integrating real-time telemetry pipelines and interactive goal setting.",
    year: "2024",
    duration: "4 Months",
    role: "Lead Full-Stack Architect",
    liveUrl: "https://kizunafit.example.com",
    githubUrl: "https://github.com/nihalmnk/kizunafit",
    coverImage: "/projects/kizunafit.png",
    gallery: [
      { id: "1", image: "/projects/kizunafit.png" },
      { id: "2", image: "/projects/kizunafit.png" },
      { id: "3", image: "/projects/kizunafit.png" },
      { id: "4", image: "/projects/kizunafit.png" },
      { id: "5", image: "/projects/kizunafit.png" },
    ],
    overview: {
      problem: "Traditional personal coaching models struggle with asynchronous feedback loops. Clients lack granular, visual breakdowns of mechanical strain and physical progression, while trainers are flooded with unorganized data from disjointed messaging platforms and spreadsheets.",
      solution: "Developed a secure full-stack telemetry engine combining localized IndexedDB caching with WebSockets for instantaneous training feedback. Designed a bespoke metric dashboard mapping athletic velocity, load volume, and heart rate recovery profiles on top of a highly responsive, custom Chart.js layout."
    },
    features: [
      {
        title: "Biometric Data Visualization",
        description: "Bespoke telemetry charting built using high-performance Canvas rendering for seamless mobile heart-rate mapping."
      },
      {
        title: "Trainer Presence & Realtime Alerts",
        description: "Configured trainer-client session queues and active telemetry alerts leveraging Redis Pub/Sub channels."
      },
      {
        title: "Offline Local Telemetry Buffer",
        description: "Engineered robust IndexedDB buffers allowing workout telemetry compilation under low-network conditions."
      },
      {
        title: "Token-Auth Messaging Channel",
        description: "Secured a direct chat protocol employing signed JWT parameters and secure HTTPS audio upload pipelines."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO"]
      }
    ],
    closing: "Designed with a strict aesthetic of structural restraint, spacious layout ratios, and zero dark-pattern notification loops."
  },
  {
    id: "02",
    slug: "realtime-chat",
    title: "REALTIME CHAT",
    subtitle: "Low-latency WebRTC visual and audio collaboration workspace",
    description: "An understated, industrial-grade team alignment board connecting remote engineers with sub-100ms peer streams.",
    year: "2024",
    duration: "3 Months",
    role: "Core Systems Engineer",
    liveUrl: "https://chat.example.com",
    githubUrl: "https://github.com/nihalmnk/realtime-chat",
    coverImage: "/projects/chat.png",
    gallery: [
      { id: "1", image: "/projects/chat.png" },
      { id: "2", image: "/projects/chat.png" },
      { id: "3", image: "/projects/chat.png" },
      { id: "4", image: "/projects/chat.png" },
      { id: "5", image: "/projects/chat.png" },
    ],
    overview: {
      problem: "Corporate videoconferencing apps suffer from heavy RAM consumption, high server relay costs, and sluggish UI response times, which disrupt the natural flow of engineering standups.",
      solution: "Constructed an ultra-lightweight WebRTC video workspace leveraging Socket.IO signaling. Utilized a decentralized mesh architecture for peer connections under 4 participants, with seamless TURN/STUN server relay transitions for corporate firewall traversal."
    },
    features: [
      {
        title: "Peer Mesh WebRTC Pipelines",
        description: "Achieved ultra-low latency media streams by dynamically managing ICE candidates and peer connection states."
      },
      {
        title: "Redis-Backed Presence System",
        description: "Structured high-performance active heartbeat sweeps utilizing Redis memory locks to ensure perfect roster synchronization."
      },
      {
        title: "Audio Visualizer Canvas",
        description: "Rendered a beautiful real-time CSS/Canvas frequency bar chart mapping audio amplitudes without layout shifts."
      },
      {
        title: "Collaborative Canvas Buffer",
        description: "Designed a vector whiteboard canvas allowing rapid structural wireframe sketching synchronized over web sockets."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "TailwindCSS", "WebRTC API"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Socket.IO", "Redis", "CoTURN"]
      }
    ],
    closing: "Refined with a quiet, monochromatic UI focused on high fluid framerates and clean technical utility."
  },
  {
    id: "03",
    slug: "editorial-cms",
    title: "EDITORIAL CMS",
    subtitle: "Quiet luxury content drafting and publishing canvas",
    description: "A high-end content creation and formatting canvas crafted for digital publishing agencies seeking architectural layout control.",
    year: "2023",
    duration: "5 Months",
    role: "Database & Editor Engineer",
    liveUrl: "https://cms.example.com",
    githubUrl: "https://github.com/nihalmnk/editorial-cms",
    coverImage: "/projects/cms.png",
    gallery: [
      { id: "1", image: "/projects/cms.png" },
      { id: "2", image: "/projects/cms.png" },
      { id: "3", image: "/projects/cms.png" },
      { id: "4", image: "/projects/cms.png" },
      { id: "5", image: "/projects/cms.png" },
    ],
    overview: {
      problem: "Standard CMS platforms force authors to navigate cluttered, multi-layered dashboards, offering little visual guidance on typography scales and column structure before publishing.",
      solution: "Engineered a distraction-free editorial editing screen built on top of a highly modular Tiptap editor loop. Configured instant serverless PDF renderings and a lightning-fast schema engine mapping relational content states via Prisma."
    },
    features: [
      {
        title: "Decoupled Tiptap Rich Canvas",
        description: "Constructed a custom editor instance with bespoke block extensions for visual galleries and geometric margin quotes."
      },
      {
        title: "Prisma & PostgreSQL Schema Design",
        description: "Optimized relational indexes, content versioning history, and atomic content locks to support simultaneous author edits."
      },
      {
        title: "Automated Edge Publishing Pipeline",
        description: "Configured webhook dispatch loops purging serverless CDN edge caches instantly upon article releases."
      },
      {
        title: "Fluid Visual Grid Control",
        description: "Enabled authors to visually split, merge, and toggle editorial grid ratios dynamically inside the editing pane."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "Tiptap Core", "TailwindCSS", "Framer Motion"]
      },
      {
        category: "Backend",
        items: ["PostgreSQL", "Prisma ORM", "Next.js API Routes", "AWS S3"]
      }
    ],
    closing: "Framed around a devotion to classic typographic margins, high-contrast grids, and quiet editorial space."
  },
  {
    id: "04",
    slug: "devflow",
    title: "DEVFLOW",
    subtitle: "High-performance developer workspace and workflow loop",
    description: "An advanced, visually understated task board built for engineering teams managing complex build-deploy cycles.",
    year: "2023",
    duration: "3 Months",
    role: "Systems Architect",
    liveUrl: "https://devflow.example.com",
    githubUrl: "https://github.com/nihalmnk/devflow",
    coverImage: "/projects/devflow.png",
    gallery: [
      { id: "1", image: "/projects/devflow.png" },
      { id: "2", image: "/projects/devflow.png" },
      { id: "3", image: "/projects/devflow.png" },
      { id: "4", image: "/projects/devflow.png" },
      { id: "5", image: "/projects/devflow.png" },
    ],
    overview: {
      problem: "Standard task trackers feel cluttered and suffer from slow, blocking UI states that frustrate developers working at terminal speeds.",
      solution: "Developed a highly optimized, keyboard-navigable workflow board featuring asynchronous optimistic updates. Leveraged memory-cached state queues and Redis task buffers to deliver near-instant UI responses."
    },
    features: [
      {
        title: "Optimistic State Engine",
        description: "Implemented immediate local state updates with intelligent back-end rollback loops upon network failures."
      },
      {
        title: "Visual Workflow Node Mapper",
        description: "Built an interactive dependency map using custom SVG connectors and custom physics-based sorting algorithms."
      },
      {
        title: "Redis-Queue Pipeline Manager",
        description: "Offloaded heavy automation actions and git webhook integrations to robust background worker loops."
      },
      {
        title: "Comprehensive Command Palette",
        description: "Designed a globally accessible command search overlay enabling rapid keyboard-only system operations."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "TailwindCSS", "Zustand State Engine"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Redis Queue", "MongoDB"]
      }
    ],
    closing: "Crafted with an absolute focus on speed, fluid interface motion, and functional, geometric layouts."
  },
  {
    id: "05",
    slug: "mono-studio",
    title: "MONO STUDIO",
    subtitle: "Monochromatic spatial brand narrative and visual archive",
    description: "An ultra-premium immersive digital gallery designed for a progressive architectural visualization firm.",
    year: "2024",
    duration: "2 Months",
    role: "Lead Frontend Engineer",
    liveUrl: "https://mono.example.com",
    githubUrl: "https://github.com/nihalmnk/mono-studio",
    coverImage: "/projects/mono.png",
    gallery: [
      { id: "1", image: "/projects/mono.png" },
      { id: "2", image: "/projects/mono.png" },
      { id: "3", image: "/projects/mono.png" },
      { id: "4", image: "/projects/mono.png" },
      { id: "5", image: "/projects/mono.png" },
    ],
    overview: {
      problem: "Standard studio portfolios use heavy animations, generic layouts, and slow loading times that detract from the stark, high-fidelity nature of professional imagery.",
      solution: "Constructed a lightweight, spatial editorial gallery featuring fluid, hardware-accelerated transitions. Designed custom asset grids with advanced layout-shifting calculations to adapt elegantly to ultra-wide viewports."
    },
    features: [
      {
        title: "Fluid Custom Scroll Engine",
        description: "Integrated advanced smooth-scrolling physics tailored to dynamic, high-fidelity image grid displays."
      },
      {
        title: "Hardware-Accelerated Transitions",
        description: "Engineered ultra-smooth slide overlays using GPU-composited CSS transforms and Framer Motion presets."
      },
      {
        title: "Dynamic Editorial Ratios",
        description: "Created an adaptive grid system utilizing custom layout formulas to maintain precise visual rhythm across all screens."
      },
      {
        title: "Lazy Asset Staggering",
        description: "Optimized image loading times with customized intersection observers and low-quality blur placeholders."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Lenis Scroll"]
      },
      {
        category: "Infrastructure",
        items: ["Vercel Edge", "Cloudflare Images CDN"]
      }
    ],
    closing: "Built as a celebration of quiet architecture, empty space, and absolute monochromatic restraint."
  }
];
