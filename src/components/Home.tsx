import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <img src="https://images.unsplash.com/photo-1557683316-973673baf926" alt="home" className='imeg' />
        <div className="status"> <div className='circle'></div><p>Available</p></div>
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