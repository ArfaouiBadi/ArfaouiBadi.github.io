  import { Link } from "react-router-dom";
  import heroImage from "../assets/hero.jpg";
  import CardWork from "./CardWork";

  import { projects, socials } from "@/constants";
  import {useState } from "react";
  type Project = {
    title: string;
    description: string;
    images: string[] | undefined;
    technologies: string[];
    comingSoon: boolean;
    github: string;
  };

  const Home = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
   
    const handleMouseEnter = (index: number) => {
      setHoveredCard(index);
    };

    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
    return (
      <div className="home">
        <div className="info">
          <img src={heroImage} alt="home" className="heroImage" />
          <div className="status">

            <div className="circle"></div>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Available
            </Link>
          </div>
        </div>

        <h1 className="introduction">
          Hello , I'm Arfaoui Badi a fullstack developer
        </h1>
        <p className="description">
          I am an individual who combines enthusiasm, self-motivation,
          reliability,
          <br /> responsibility, and hard work to achieve exceptional results.
          <br />
          My adaptability, teamwork skills, and ability to thrive under pressure
          <br />
          make me a valuable asset in any professional setting.
        </p>
        <div className="socials">
          {
            socials.map((social, index) => {
              return (
                <div className="socialIcon" key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </a>
                </div>
              );
          })
          }

        </div>
        <h1 className="introduction">Featured Work</h1>
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
        </div>
        <div className="viewAllWorkBtn">View All Work</div>
      </div>
    );
  };

  export default Home;
