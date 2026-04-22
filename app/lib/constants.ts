import type { Project, TeamMember, Testimonial, Value } from "./types";

export const projects: Project[] = [
  { id: 1, title: "Project 1", image: "https://picsum.photos/400/300?random=1" },
  { id: 2, title: "Project 2", image: "https://picsum.photos/400/300?random=2" },
  { id: 3, title: "Project 3", image: "https://picsum.photos/400/300?random=3" },
  { id: 4, title: "Project 4", image: "https://picsum.photos/400/300?random=4" },
  { id: 5, title: "Project 5", image: "https://picsum.photos/400/300?random=5" },
  { id: 6, title: "Project 6", image: "https://picsum.photos/400/300?random=6" },
  { id: 7, title: "Project 7", image: "https://picsum.photos/400/300?random=7" },
  { id: 8, title: "Project 8", image: "https://picsum.photos/400/300?random=8" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Funding Partner",
    text: "Impact Sphere transformed how we discover and evaluate projects. The platform's rigorous vetting process ensures our capital reaches initiatives with genuine potential for change.",
  },
  {
    id: 2,
    title: "Project Leader",
    text: "Thanks to Impact Sphere, we secured funding within weeks instead of months. The connection to aligned investors who truly understand our mission was invaluable.",
  },
  {
    id: 3,
    title: "Corporate Sponsor",
    text: "The transparency and detailed impact metrics provided by Impact Sphere give us confidence in our ESG investments. We've supported 12 projects through the platform.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bárbara Sequeira",
    role: "CEO",
    image: "/images/team/barbara-sequeira.png",
    bgColor: "bg-[#8B2F8B]",
  },
  {
    id: 2,
    name: "Xavier Martins",
    role: "CTO",
    image: "/images/team/xavier-martins.png",
    bgColor: "bg-[#9B4F9B]",
  },
  {
    id: 3,
    name: "Pedro Andrade",
    role: "CFO",
    image: "/images/team/pedro-andrade.png",
    bgColor: "bg-[#7B6CAC]",
  },
  {
    id: 4,
    name: "Rita Monteiro",
    role: "Chief Strategy and Impact Officer",
    image: "/images/team/rita-monteiro.png",
    bgColor: "bg-[#5B5C98]",
  },
  {
    id: 5,
    name: "José Sousa",
    role: "Implementation Manager",
    image: "/images/team/jose-sousa.png",
    bgColor: "bg-[#5B6BA8]",
  },
  {
    id: 6,
    name: "Margarida Oliveira",
    role: "Project Operations Manager",
    image: "/images/team/margarida-oliveira.png",
    bgColor: "bg-[#7B5C9C]",
  },
  {
    id: 7,
    name: "Matilde Tavares",
    role: "Communication and Social Media Manager",
    image: "/images/team/matilde-tavares.png",
    bgColor: "bg-[#9B3F9B]",
  },
  {
    id: 8,
    name: "Pedro Gorobey",
    role: "Design Manager",
    image: "/images/team/pedro-gorobey.png",
    bgColor: "bg-[#4A6BB8]",
  },
  {
    id: 9,
    name: "Francisco Mourão",
    role: "Audiovisual Manager",
    image: "/images/team/francisco-mourao.png",
    bgColor: "bg-[#6B4C8C]",
  },
  {
    id: 10,
    name: "Henrique Fernandes",
    role: "Test Manager",
    image: "/images/team/henrique-fernandes.png",
    bgColor: "bg-[#8B4F8B]",
  },

];

export const values: Value[] = [
  {
    title: "Impact First",
    description:
      "We measure success by the positive change we create in communities and lives.",
  },
  {
    title: "Transparency",
    description:
      "Open communication and clear metrics build trust with our partners and stakeholders.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnerships to amplify impact and drive innovation.",
  },
];
