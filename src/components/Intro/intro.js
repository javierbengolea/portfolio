import React from 'react'
import './intro.css'
import bg from '../../assets/yo.png'
import btnImg from "../../assets/handshake_128x128.png"
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hola,</span>
        <span className="introText">Soy <span className="introName">Javier</span> <br /> Data Scientist</span>
        <p className="introPara">Soy un apasionado de Ciencias de la Computación, desarrollador por vocación,<br/> descubridor del emocionante mundo del Data Science.<br/>
        and Machine Learning.
        💖💻👨🏻‍🔬🦾</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Contratar</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"  />
    </section>
  )
}

export default Intro