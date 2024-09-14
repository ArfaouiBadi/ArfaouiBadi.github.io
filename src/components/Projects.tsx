import { projects } from "@/constants"
import CardWork from "./CardWork";
import { useState } from "react";
type Project = {
  title: string;
  description: string;
  images: string[] | undefined;
  technologies: string[];
  comingSoon: boolean;
  github: string;
};
const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
   
    const handleMouseEnter = (index: number) => {
      setHoveredCard(index);
    };

    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
  return (
    <>
    <h1 className="introduction">Projects</h1>
        <div className="featuredWork">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {
            projects.map((project:Project , index : number)=>{
              return <CardWork
              key={index}
              images={[project.images![0], project.images![1]]}
              title={project.title}
              description={project.description}
              isHovered={hoveredCard === 0}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              comingSoon={project.comingSoon}/>
            })
          }
          </div>
        </div></>
  )
}

export default Projects