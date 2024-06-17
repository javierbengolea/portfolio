import React from 'react'
import './intro.css'
import bg from '../../assets/yo.png'
import btnImg from "../../assets/handshake_128x128.png"
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Javier</span> <br /> Data Scientist</span>
        <p className="introPara">A Computer Science passionate, developer by vocation,<br/> and a discoverer of the thrilling world of Data Science <br/>
        and Machine Learning. 💖💻👨🏻‍🔬🦾</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"  />
    </section>
  )
}

export default Intro