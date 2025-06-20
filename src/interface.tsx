export interface NavLinkItemProps {
  icon: React.ReactNode; // Define a prop type for the SVG
  title: string;
  path: string;
  isActive?: boolean;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string[];
  images: string[];
  technologies: string[];
  comingSoon: boolean;
  github: string;
  onClick?: () => void;
}
