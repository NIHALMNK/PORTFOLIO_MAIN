// Single source of truth for portfolio data
export const siteConfig = {
  name: "Mohammed Nihal K",
  title: "Web Developer - MERN",
  description: "Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.",
  email: "mohammednihal.dev@gmail.com",
  github: "https://github.com/NIHALMNK",
  linkedin: "https://www.linkedin.com/in/mohammednihalk6061/",
  instagram: "https://instagram.com", // standard fallback
};

export const projects = [
  {
    id: "tactics",
    title: "TACTICS — E-commerce Platform",
    impact: "Full-stack e-commerce system with secure auth and payment integration",
    description:
      "A complete e-commerce platform with product management, shopping cart, and order processing built using MVC architecture.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
    github: "https://github.com/NIHALMNK",
    live: "",
  },
  {
    id: "chattify",
    title: "Chattify — Real-Time Chat App",
    impact: "Real-time messaging with presence detection and media sharing",
    description:
      "A MERN-based chat application with Socket.IO, typing indicators, and Cloudinary-based media uploads.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Cloudinary"],
    github: "https://github.com/NIHALMNK",
    live: "",
  },
  {
    id: "user-management",
    title: "User Management System",
    impact: "Role-based dashboard with JWT authentication and admin controls",
    description:
      "Admin dashboard for managing users with CRUD operations, authentication, and centralized state using Redux.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/NIHALMNK",
    live: "",
  },
];

export const skills = {
  frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Motion", "GSAP", "React Three Fiber", "Zustand"],
  backend: ["TypeScript", "Node.js", "Python", "Java", "C++", "FastAPI", "SQL"],
  tools: ["Windows", "VSCode", "Cursor", "Git", "Figma", "Adobe Fresco", "Blender"],
};
