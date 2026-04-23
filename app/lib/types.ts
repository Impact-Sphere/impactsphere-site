export interface NavLink {
  name: string;
  href: string;
}

export interface ProjectHome {
  id: number;
  title: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  title: string;
  text: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bgColor: string;
  bio: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  items: string[];
}
