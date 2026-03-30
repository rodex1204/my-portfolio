import { version } from "react";

export const personalInfo = {
  name: "Jesús Alexis Rodríguez",
  location: "Guanajuato, México",
  email: "jesusalexisrodriguez127@gmail.com",
  github: "https://github.com/rodex1204",
  linkedin: "https://linkedin.com/in/jes-alexis-rodriguez/",
  profilePicture: "/FotoFormal.png",
  heroDescription:
    "🚀 Ingeniero de software apasionado, con experiencia en el desarrollo web y un enfoque versátil para adaptarme a distintos entornos y tecnologías. Disfruto resolver problemas complejos y transformar ideas en soluciones funcionales, combinando lógica, creatividad y buenas prácticas de desarrollo. Me caracterizo por aprender rápidamente, trabajar tanto de forma autónoma como en equipo, y mantener un fuerte compromiso con la calidad y la mejora continua. Busco crear soluciones eficientes, escalables y con impacto real, aportando valor en cada proyecto en el que participo.",
};

export const workExperience = [
  {
    company: "Clever Cloud",
    location: "Ciudad de México, México - Remoto",
    position: "Desarrollador Web",
    period: "Agosto 2025 - Febrero 2026",
    achievements: [
      "Desarrollo y mantenimiento de aplicaciones web y paneles administrativos para proyectos empresariales reales.",
      "Implementación de arquitectura MVC con PHP, JavaScript y Vue.js, usando APIs públicas y privadas.",
      "Gestión de bases de datos y despliegue en servidor mediante MyWebSQL y SFTP, trabajando con control de versiones.",
    ],
  },
];

export const education = [
  {
    institution: "Universidad Politécnica de Pénjamo",
    location: "Pénjamo, Guanajuato",
    degree: "Ingeniería en Software",
    period: "2022 - 2025",
    achievements: [
      "Representé a mi universidad en hackathones nacionales e internacionales, obteniendo junto a mi equipo distintos reconocimientos.",
      "Graduado con honores.",
    ],
  },
  {
    institution: "Colegio de Estudios Científicos y Tecnológicos del Estado de Guanajuato Plantel Pénjamo",
    location: "Pénjamo, Guanajuato",
    degree: "Técnico en Soporte y Mantenimiento a Equipo de Cómputo",
    period: "2019 - 2022",
    achievements: [
      "Graduado con honores.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "PHP",
    "Dart",
  ],
  frontendDevelopment: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Vue.js",
  ],
  backendDevelopment: ["PHP", "Node.js"],
  databaseAndStorage: ["MySQL", "MongoDB", "Firebase", "MyWebSQL"],
  cloudAndDevOps: ["AWS", "Docker", "Firebase"],
  versionControl: ["Git", "GitHub", "Bitbucket", "SourceTree"],
  toolsAndServices: [
    "VS Code",
    "Figma",
    "Visual Paradigm",
    "Trello",
  ],
};

export const projects = [
  {
    title: "PyDaily | Flutter, Firebase",
    github: "https://github.com/rodex1204/pydaily",
    description: [
      "Aplicación móvil enfocada en el aprendizaje de Python mediante ejercicios diarios interactivos.",
      "Implementa un sistema de quizzes con retroalimentación inmediata para reforzar el aprendizaje del usuario.",
      "Integración con Firebase para autenticación de usuarios, gestión de datos en tiempo real y uso de APIs de Google.",
    ],
  },
  {
    title: "Landing Page | HTML, CSS, JavaScript, Bootstrap",
    github: "https://github.com/rodex1204/LandingPage_Videojuegos",
    description: [
      "Landing page informativa sobre videojuegos, diseñada con enfoque en experiencia de usuario.",
      "Desarrollo responsivo utilizando Bootstrap para garantizar compatibilidad en distintos dispositivos.",
      "Optimización de estilos y estructura para una carga rápida y navegación intuitiva.",
    ],
  },
  {
    title: "Aplicación web | Node.js, Firebase, SOA, Docker",
    github: "https://github.com/rodex1204/tienda_abarrotes",
    description: [
      "Sistema web para la gestión de tiendas de abarrotes, permitiendo administrar productos, inventario y ventas.",
      "Implementación de arquitectura basada en servicios (SOA) con operaciones CRUD y actualización de datos en tiempo real.",
      "Incluye panel administrativo y vista de usuario, con despliegue utilizando Docker e integración con Firebase.",
    ],
  },
  {
    title: "Aplicación web | PHP, MySQL, CSS",
    github: "https://github.com/rodex1204/AplicacionWeb_Info-Dog",
    description: [
      "Aplicación web orientada a la consulta de información sobre razas de perros.",
      "Sistema de filtrado dinámico para obtener resultados específicos según criterios del usuario.",
      "Interfaz sencilla e intuitiva enfocada en mejorar la experiencia de navegación.",
    ],
  },
];

export const awards = [
  {
    name: "Genius Arena Hackathon",
    issuer: "Talent Land México",
    date: "Abril 2025",
    type: "Internacional",
    position: "Participación",
  },
  {
    name: "Hackathon Mejora Regulatoria Gto",
    issuer: "Secretaría de Desarrollo Económico Sustentable de Guanajuato",
    date: "Junio 2024",
    type: "Nacional",
    position: "3er Lugar",
  },
  {
    name: "Hack AI",
    issuer: "IDEA GTO",
    date: "Abril 2024",
    type: "Nacional",
    position: "Participación",
  },
  {
    name: "Hackathon Mejora Regulatoria Gto",
    issuer: "Secretaría de Desarrollo Económico Sustentable de Guanajuato",
    date: "Junio 2023",
    type: "Nacional",
    position: "2do Lugar",
  },
];

export const certifications = [
  {
    name: "HTML5.0x : Fundamentos de HTML5 y CSS",
    issuer: "W3Cx",
    date: "2024",
    type: "Certificación",
    position: "Completado",
  },
  {
    name: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "2024",
    type: "Certificación",
    position: "Completado",
  },
  {
    name: "Accredited Scrum Fundamentals Certification",
    issuer: "AICS",
    date: "2024",
    type: "Certificación",
    position: "Completado",
  },
  {
    name: "SQL101x: Introducción a SQL y bases de datos relacionales",
    issuer: "UPValenciaX",
    date: "2024",
    type: "Certificación",
    position: "Completado",
  },
  {
    name: "GestProyInf: Introducción a la gestión de proyectos informáticos",
    issuer: "UAMx",
    date: "2024",
    type: "Certificación",
    position: "Completado",
  },
];