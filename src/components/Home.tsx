import { Link } from "react-router-dom"
import heroImage from "../assets/hero.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <img src={heroImage} alt="home" className="heroImage" />
        <div className="status"> <div className='circle'></div><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Available</Link></div>
      </div>

      <h1 className='introduction'>Hello , I'm Arfaoui Badi a fullstack developer</h1>
      <p className='description'>I am an individual who combines enthusiasm, self-motivation,
        reliability,<br/> responsibility, and hard work to achieve exceptional results.
        <br/>My adaptability, teamwork skills, and ability to thrive under pressure<br/>
        make me a valuable asset in any professional setting.</p>
    </div>
  )
}

export default Home