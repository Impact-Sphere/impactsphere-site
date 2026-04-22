export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
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
}

export interface Value {
  title: string;
  description: string;
}
