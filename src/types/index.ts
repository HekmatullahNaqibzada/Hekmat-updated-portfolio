export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface DesignWork {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Achievement {
  id: string;
  metric: string;
  description: string;
  icon: string;
}
