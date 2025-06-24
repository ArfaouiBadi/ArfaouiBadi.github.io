import { socials } from "@/constants";
import heroImage from "@/assets/hero.jpg";

const About = () => {
  return (
    <section id="home" className="py-12 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="info">
          <img src={heroImage} alt="home" className="heroImage" />
          <div className="status">
            <div className="circle"></div>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Available
            </a>
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
          {socials.map((social, index) => {
            return (
              <div className="socialIcon" key={index}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
