import type {
  Project,
  ProjectHome,
  Service,
  TeamMember,
  Testimonial,
  Value,
} from "./types";

export const projects: ProjectHome[] = [
  {
    id: 1,
    title: "Project 1",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "Project 4",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    title: "Project 5",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    title: "Project 6",
    image: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 7,
    title: "Project 7",
    image: "https://picsum.photos/400/300?random=7",
  },
  {
    id: 8,
    title: "Project 8",
    image: "https://picsum.photos/400/300?random=8",
  },
];

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Beach clean-ups and installation of AI-powered "Smart Bins"',
    image: "https://picsum.photos/400/300?random=1",
    description:
      'Eco-Habit combines environmental action with cutting-edge technology. We organize monthly coastal clean-ups involving the local community and schools. Funding will be used to install 10 "Smart Bins" at Blue Flag beaches; these bins use AI sensors to automatically sort plastic from glass and metal, providing real-time data on the volume of waste collected for partner impact reports.',
  },
  {
    id: 2,
    title:
      "Distribution of hygiene kits and thermal blankets for the homeless population in Porto",
    image: "https://picsum.photos/400/300?random=1",
    description:
      "Providing essential hygiene kits and thermal blankets to support Porto’s homeless population during winter months. The initiative focuses on dignity, comfort, and immediate relief through direct community outreach and volunteer-driven distribution efforts.",
  },
  {
    id: 3,
    title:
      "Tech empowerment for children in rural areas with low digital literacy",
    image: "https://picsum.photos/400/300?random=1",
    description:
      "Empowering children in rural areas with low digital literacy by providing access to basic technology, learning resources, and guided workshops that build confidence and foundational digital skills for the future.",
  },
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
    bio: "Bárbara Sequeira is a purpose-driven leader with a strong commitment to Human Rights and social impact. She is deeply motivated by the belief that meaningful change comes from action, not just intention, and is known for her ability to turn ideas into structured, tangible outcomes. She combines strategic thinking with creativity and a results-oriented mindset, allowing her to identify opportunities, connect people and drive projects forward. Her work is guided by a strong sense of responsibility and a desire to create lasting impact.",
  },
  {
    id: 2,
    name: "Xavier Martins",
    role: "CTO",
    image: "/images/team/xavier-martins.png",
    bgColor: "bg-[#9B4F9B]",
    bio: "Xavier leads technology strategy with a clear focus on building scalable tools that support community-driven initiatives. He brings deep technical expertise to each project, pairing innovative solutions with practical implementation plans. Xavier enjoys translating complex challenges into user-centered systems that empower NGOs and partners to act faster and more confidently.",
  },
  {
    id: 3,
    name: "Pedro Andrade",
    role: "CFO",
    image: "/images/team/pedro-andrade.png",
    bgColor: "bg-[#7B6CAC]",
    bio: "Pedro ensures our financial strategy supports sustainable impact. He manages budgets with precision and helps partners stretch resources further by identifying cost-effective opportunities, funding pathways, and accountability measures. Pedro believes transparency and financial clarity are essential to building long-term trust in every initiative.",
  },
  {
    id: 4,
    name: "Rita Monteiro",
    role: "Chief Strategy and Impact Officer",
    image: "/images/team/rita-monteiro.png",
    bgColor: "bg-[#5B5C98]",
    bio: "Rita designs strategic frameworks that maximize the impact of our programs. She blends research, stakeholder collaboration and outcome-oriented planning so every project is aligned with real community needs. Rita’s work is about creating pathways from ambition to measurable change.",
  },
  {
    id: 5,
    name: "José Sousa",
    role: "Implementation Manager",
    image: "/images/team/jose-sousa.png",
    bgColor: "bg-[#5B6BA8]",
    bio: "José oversees project delivery and logistics with meticulous care. He keeps teams aligned, timelines clear and execution moving smoothly, so strategies become action. His practical approach ensures every initiative stays on track and delivers for beneficiaries.",
  },
  {
    id: 6,
    name: "Margarida Oliveira",
    role: "Project Operations Manager",
    image: "/images/team/margarida-oliveira.png",
    bgColor: "bg-[#7B5C9C]",
    bio: "Margarida coordinates the operational details that make impact possible. She supports partners with processes, communication plans and resource management, helping each project scale thoughtfully and effectively. Her strength is keeping complex programs running with care and consistency.",
  },
  {
    id: 7,
    name: "Matilde Tavares",
    role: "Communication and Social Media Manager",
    image: "/images/team/matilde-tavares.png",
    bgColor: "bg-[#9B3F9B]",
    bio: "Matilde shapes stories that connect people to purpose. She develops communication strategies that raise visibility for initiatives and build stronger engagement across audiences. Her work helps partners share their mission clearly and inspire action.",
  },
  {
    id: 8,
    name: "Pedro Gorobey",
    role: "Design Manager",
    image: "/images/team/pedro-gorobey.png",
    bgColor: "bg-[#4A6BB8]",
    bio: "Pedro brings visual design and brand clarity to every project. He creates polished, accessible experiences that strengthen partner messaging and audience trust. His focus is on delivering designs that feel professional, human and meaningful.",
  },
  {
    id: 9,
    name: "Francisco Mourão",
    role: "Audiovisual Manager",
    image: "/images/team/francisco-mourao.png",
    bgColor: "bg-[#6B4C8C]",
    bio: "Francisco produces engaging audiovisual content that amplifies impact. He crafts documentary-style videos, campaign media and visual narratives that help communities tell their own stories. His work supports trust, transparency and powerful outreach.",
  },
  {
    id: 10,
    name: "Henrique Fernandes",
    role: "Test Manager",
    image: "/images/team/henrique-fernandes.png",
    bgColor: "bg-[#8B4F8B]",
    bio: "Henrique ensures the quality of our digital and operational tools. He tests every interaction point, checks project workflows for reliability, and helps teams fix issues before they reach partners. His attention to detail keeps every initiative stable and dependable.",
  },
];

export const values: Value[] = [
  {
    title: "Impact First",
    description:
      "We measure success by the positive change we create in communities and lives",
  },
  {
    title: "Transparency",
    description:
      "Open communication and clear metrics build trust with our partners and stakeholders",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnerships to amplify impact and drive innovation",
  },
];

export const services: Service[] = [
  {
    title: "Digital",
    items: [
      "Social media strategy and management",
      "Content planning",
      "Multimedia production",
      "Communication strategies and action plans",
    ],
  },
  {
    title: "Partnerships",
    items: ["Connecting NGOs, nonprofit organizations, and content creators"],
  },
  {
    title: "Event Planning",
    items: ["Logistics", "External relations", "Merch"],
  },
];
