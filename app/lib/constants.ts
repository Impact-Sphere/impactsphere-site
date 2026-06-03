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
    title: "Safe Spaces and Inclusion: LGBTQ+ Community Support and Empowerment",
    image: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "Distribution of hygiene kits and thermal blankets for the homeless population in Porto",
    image: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "Tech empowerment for children in rural areas with low digital literacy",
    image: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Intercultural Dialogue and Human Rights Education Initiative",
    image: "/images/projects/4-2.png",
  },
  {
    id: 5,
    title: "Anti-Discrimination and Equality Promotion Framework",
    image: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "SafeSpace: Trans Community Support Program",
    image: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "Human Rights Awareness and Civic Engagement Programme",
    image: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "Access to Justice and Legal Empowerment Programme for Vulnerable Populations",
    image: "/images/projects/8.png",
  },
];

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Safe Spaces and Inclusion: LGBTQ+ Community Support and Empowerment",
    image: "/images/projects/1.png",
    description: "LGBTQ+ Community Support focuses on promoting inclusion, safety, and equal opportunities for LGBTQ+ individuals. We organize support groups, awareness sessions, and safe community spaces that encourage connection and empowerment. Funding will help expand outreach, strengthen support services, and improve access to resources for those facing discrimination or social isolation, fostering dignity, acceptance, and long-term social impact."
  },
  {
    id: 2,
    title: "Distribution of hygiene kits and thermal blankets for the homeless population in Porto",
    image: "/images/projects/2.png",
    description: "Porto Care Initiative addresses the urgent needs of the city’s homeless population through community-driven support. We organize regular outreach efforts to distribute hygiene kits and thermal blankets, ensuring dignity, comfort, and protection during colder months. Funding will expand our impact, reaching more individuals across Porto while improving the quality and consistency of supplies, delivering measurable social impact and stronger community engagement."
  },
  {
    id: 3,
    title: "Tech empowerment for children in rural areas with low digital literacy",
    image: "/images/projects/3.png",
    description: "Rural Tech Empowerment bridges the digital divide for children in underserved rural communities. We run hands-on learning sessions and provide access to essential digital tools, building foundational technology and online literacy skills. Funding will expand our reach, enabling more children to benefit from structured training and better educational resources, fostering confidence, innovation, and long-term impact."
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Bridge of Hope",
    text: "“An innovative proposal that combines social purpose, strategy, and communication in an impressive way.”",
  },
  {
    id: 2,
    title: "Justice Across Borders",
    text: "“This initiative stands out for its ability to connect companies and causes with clarity and responsibility. ImpactSphere Agency creates a structure where socially driven projects can grow with greater visibility and lasting impact.”",
  },
  {
    id: 3,
    title: "HD Alliance",
    text: "“ImpactSphere Agency stands out for turning meaningful ideas into concrete and well-structured projects.”",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bárbara Sequeira",
    role: "CEO",
    image: "/images/team/ceo-barbara.png",
    bgColor: "bg-[#8B2F8B]",
    bio: "I’m Bárbara Sequeira, I’m 22 years old, and I’m the CEO at ImpactSphere. Human rights and social impact are causes I care deeply about and I’m driven by the opportunity to turn ideas into impactful outcomes.\n\nI value collaboration, innovation and continuous learning, always looking for new ways to grow and contribute to initiatives that make a real difference in society.\n\nIn my free time, I enjoy going to demonstrations and reading, as well as exploring new ideas and staying engaged with causes I care about.",
  },
  {
    id: 2,
    name: "Xavier Martins",
    role: "CTO",
    image: "/images/team/cto-xavier.png",
    bgColor: "bg-[#9B4F9B]",
    bio: "I’m Xavier Martins, I’m 21 years old and I’m the CTO at ImpactSphere. I believe that the power of helping others is truly meaningful, and being part of a team that contributes to causes focused on human rights is extremely valuable to me. It’s motivating to work on technological solutions that can have a real impact on the lives of people and organizations that need it most.\n\nI focus on building a strong and adaptable technical foundation, ensuring that innovation is not only possible but sustainable over time. I value aligning technology with real needs, translating complex ideas into practical solutions that support the team and the project’s growth. \n\nIn my free time, I enjoy practicing and watching sports, learning more about technology, and participating in volunteer projects, which I find very rewarding.",
  },
  {
    id: 3,
    name: "Pedro Andrade",
    role: "CFO",
    image: "/images/team/cfo-pedro.png",
    bgColor: "bg-[#7B6CAC]",
    bio: "I’m Pedro Andrade, I’m 21 years old and I’m the CFO at ImpactSphere. I strongly believe in the project and the mission we are building, with a particular motivation to support NGOs and contribute to causes that create meaningful impact.\n\nI value financial discipline, strategic decision-making, and ensuring that resources are used efficiently to support sustainable growth. I’m committed to helping the team deliver a project that is both innovative and truly useful.\n\nOutside of my professional role, I enjoy playing football, swimming, and spending quality time with friends.",
  },
  {
    id: 4,
    name: "Rita Monteiro",
    role: "Chief Strategy and Impact Officer",
    image: "/images/team/csio-rita.png",
    bgColor: "bg-[#5B5C98]",
    bio: "I’m Rita Monteiro, I’m 23 years old, and I’m the Director of Strategy and Impact at ImpactSphere. I believe strongly in this project because I’ve had close contact with the reality of non-profit organizations through previous experiences and my volunteer work.\n\nThis exposure has shown me the significant potential many associations have, which is often limited by a lack of resources and strategic planning. ImpactSphere represents a meaningful solution to support these organizations and help maximize their impact.I value purpose-driven work and strive to contribute to initiatives that create lasting, positive change in society.\n\nIn my free time, I enjoy traveling and I’m passionate about reading and discussing books (always open to new recommendations).",
  },
  {
    id: 5,
    name: "José Sousa",
    role: "Implementation Manager",
    image: "/images/team/implementation-jose.png",
    bgColor: "bg-[#5B6BA8]",
    bio: "I’m José Sousa, I’m 21 years old and I’m a developer at ImpactSphere, where I work as an Implementation Manager.\n\nI strongly believe in the mission that ImpactSphere is developing. Supporting NGOs is an extremely important cause and, at the same time, it brings very interesting challenges, which is why I joined the team.\n\nIn my free time, I enjoy developing side projects, watching documentaries and following football, particularly the Premier League.",
  },
  {
    id: 6,
    name: "Margarida Oliveira",
    role: "Project Operations Manager",
    image: "/images/team/pom-margarida.png",
    bgColor: "bg-[#7B5C9C]",
    bio: "I’m Margarida Oliveira, I’m 24 years old and I’m part of the ImpactSphere team as a Project and Operations Manager. Human rights have always been a cause I care deeply about and the opportunity to contribute to their representation motivated me to join this team.\n\nIn my free time, I’m constantly looking for new volunteering opportunities, a new book, or a new series, so I’m always open to suggestions. ",
  },
  {
    id: 7,
    name: "Matilde Tavares",
    role: "Communication and Social Media Manager",
    image: "/images/team/csmm-matilde.png",
    bgColor: "bg-[#9B3F9B]",
    bio: "I’m Matilde Tavares, I’m 22 years old and I’m the Social Media Manager of ImpactSphere. Effective communication is essential in advancing human rights, as it amplifies voices, fosters understanding, and drives meaningful change.\n\nI have consistently demonstrated a strong sensitivity to human rights issues, grounded in my firm belief that all individuals are equal and entitled to the same fundamental rights.\n\nIn my daily routine I like to do things that make me feel good about myself such as going for walks, going to pilates and hanging out with my friends. ",
  },
  {
    id: 8,
    name: "Bruna Jardim",
    role: "UX/UI Manager",
    image: "/images/team/uiux-bruna.png",
    bgColor: "bg-[#9B3F9B]",
    bio: "I’m Bruna Jardim, I’m 23 years old and I’m the UX/UI Manager at ImpactSphere. I believe that human rights and other important causes deserve the support they need in order to bring projects out of the drawer and turn them into reality.\n\nI have a strong appreciation for organization, setting clear deadlines, and consistently meeting them—above all, I’m driven by ensuring that our clients are truly satisfied with the final product.\n\nOutside of my professional work, I really enjoy reading, attending concerts, and exploring new restaurants.",
  },
  {
    id: 9,
    name: "Pedro Gorobey",
    role: "Design Manager",
    image: "/images/team/design-pedro.png",
    bgColor: "bg-[#4A6BB8]",
    bio: "I’m Pedro Gorobey, I’m 21 years old and I am a Design Manager in the developers team at ImpactSphere. This project, in particular, helps me bridge the gap between the desire to create impact and the real ability to make it happen around a cause. In a way, the dynamics of this work have also led me to adopt and believe even more strongly in this project.\n\nMy work focuses on creating visually consistent and functionally robust digital experiences, ensuring that brand identity is translated into cohesive, intuitive, and easy-to-navigate web interfaces.\n\nIn my daily life and free time, I enjoy playing video games, going for walks, and developing software projects. ",
  },
  {
    id: 10,
    name: "Francisco Mourão",
    role: "Audiovisual Manager",
    image: "/images/team/audiovisual-francisco.png",
    bgColor: "bg-[#6B4C8C]",
    bio: "My name is Francisco Mourão, i´m 23 years old, i´m the Audiovisual Manager at ImpactSphere. Audiovisual content has the power to transform ideas into experiences that inform and inspire action.In a world where visibility matters, visual storytelling is seen as an essential tool to give attention and emotional impact to the causes that deserve.\n\nI have always valued the principles of dignity, equality and representation, and these values shape both my perspective and my work, being this one of many reasons why  i joined this project.\n\nOutside of work, I enjoy practicing sports, listening to music and spending time with friends. ",
  },
  {
    id: 11,
    name: "Henrique Fernandes",
    role: "Test Manager",
    image: "/images/team/test-henrique.png",
    bgColor: "bg-[#8B4F8B]",
    bio: "I’m Henrique Fernandes, I’m 21 years old and I’m the Test Manager of the team. I have always been drawn to projects that use technology to create positive social impact, and this project is no exception.\n\nI’m responsible for ensuring that our work reaches the field with the highest possible quality, guaranteeing the reliability, performance, and overall excellence of every digital product we deliver. I value organization, continuous improvement and collaboration.\n\nIn my free time, I enjoy playing guitar and playing tennis.",
  },
];

export const values: Value[] = [
  {
    title: "Impact First",
    description:
      "We believe in creating spaces where every voice can be heard and valued.",
  },
  {
    title: "Transparency",
    description:
      "We act with clarity and responsibility in every partnership, project, and decision.",
  },
  {
    title: "Collaboration",
    description:
      "We work to turn intentions into concrete and lasting results.",
  },
];

export const services: Service[] = [
  {
    title: "Digital",
    description:
      "We manage social media strategy and platforms, plan engaging content, produce multimedia materials and develop communication strategies and action plans to support effective outreach.",
  },
  {
    title: "Partnerships",
    description:
      "We connect NGOs, nonprofit organizations and content creators to foster collaboration and strengthen impact through shared initiatives and communication.",
  },
  {
    title: "Event planning",
    description:
      "We handle logistics, manage external relations and coordinate merchandise activities to support smooth operations and strengthen partnerships.",
  },
];
