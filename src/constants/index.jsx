import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import ra from "../assets/profile-pictures/ra.png";
import key from "../assets/profile-pictures/key.png";
import sie from "../assets/profile-pictures/sie.png";
import omr from "../assets/profile-pictures/omr.png";
import sch from "../assets/profile-pictures/sch.png";
import abb from "../assets/profile-pictures/abb.png";
import hon from "../assets/profile-pictures/hon.png";
import tos from "../assets/profile-pictures/tos.png";
import all from "../assets/profile-pictures/all.png";

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Marcas", href: "#marcas" },
];

export const testimonials = [
  {
    image: ra,
  },

  {
    image: key,
  },

  {
    image: sie,
  },

  {
    image: omr,
  },

  {
    image: sch,
  },

  {
    image: abb,
  },

  {
    image: hon,
  },

  {
    image: tos,
  },

  {
    image: all,
  },
 
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "PLC HMI SCADA",
    description:
      "Implementación de sistemas de control y supervisión industrial que optimizan procesos y garantizan operación eficiente en tiempo real.",
  },
  {
    icon: <Fingerprint />,
    text: "Integracion y automatizacion",
    description:
      "Conectamos tecnología y procesos para transformar operaciones en entornos más inteligentes y competitivos.",
  },
  {
    icon: <ShieldHalf />,
    text: "Robotica industrial",
    description:
      "Soluciones de robótica avanzada diseñadas para maximizar eficiencia, precisión y competitividad industrial.",
  },
  {
    icon: <BatteryCharging />,
    text: "Sistemas de vision artificial",
    description:
      "Soluciones de visión inteligente que garantizan precisión, eficiencia y estándares superiores de calidad industrial.",
  },
  {
    icon: <PlugZap />,
    text: "Optimizacion de eficiencia",
    description:
      "Implementación y monitoreo de indicadores OEE para identificar pérdidas, optimizar procesos y mejorar la eficiencia industrial.",
  },
  {
    icon: <GlobeLock />,
    text: "Fabricacion de maquinas",
    description:
      "Transformamos ideas en maquinaria funcional. Diseñamos y fabricamos equipos industriales a medida.",
  },
];

export const checklistItems = [
  {
    title: "Mayor eficiencia operativa",
    description:
      "Automatiza tareas repetitivas y reduce tiempos de producción. Los sistemas automatizados trabajan 24/7 con máxima precisión, aumentando el rendimiento general de la planta.",
  },
  {
    title: "Reduccion de costos",
    description:
      "Disminuye errores humanos, desperdicios y tiempos muertos. La automatización optimiza el uso de recursos y mejora el control de inventarios y procesos.",
  },
  {
    title: "Calidad y precision",
    description:
      "Los procesos automatizados garantizan resultados uniformes, minimizando fallas y asegurando estándares de calidad más altos en cada ciclo de producción.",
  },
  {
    title: "Mayor seguridad industrial",
    description:
      "Reduce la exposición del personal a tareas peligrosas o ambientes de riesgo, mejorando las condiciones laborales y disminuyendo accidentes.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
