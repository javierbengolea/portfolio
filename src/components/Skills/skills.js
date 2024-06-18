import React from 'react'
import "./skills.css"
import Backend from "../../assets/backend.png"
import Frontend from "../../assets/frontend.png"
import DataScience from "../../assets/datascience.png"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                Soy un apasionado de Ciencias de la Computación, desarrollador por vocación, descubridor del emocionante mundo del Data Science  y Machine Learning , en el que me siento inmerso con ganas de aplicar mis capacidades, estudios y experiencia, para resolver problemas y aprovechar las posibilidades de este campo cada vez más interesante. 💖💻👨🏻‍🔬🦾
                <br />
                I am a Computer Science enthusiast, developer by vocation, and a discoverer of the thrilling world of Data Science and Machine Learning,  in which I feel immersed and eager to apply my skills, studies, and experience to solve problems and take advantage of the possibilities in this increasingly interesting field.💖💻👨🏻‍🔬🦾
            </span>
            <span className="skillBars">
                <div className="skillBar">
                    <img src={Backend} alt="Back End" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Back End</h1>
                        <p>
                            Back-end development focuses on the server-side of web applications, handling data management, server logic, and application functionality. It involves using server-side languages like Python, Ruby, Java, PHP, or Node.js, and databases such as MySQL, PostgreSQL, MongoDB, or Oracle. Back-end developers ensure smooth communication between the server and front-end, managing user requests, processing transactions, and maintaining authentication and authorization to keep the application functional and secure.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Frontend} alt="Front End" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Front End</h1>
                        <p>
                            Front-end development deals with the client-side of web applications, focusing on the visual and interactive aspects that users interact with directly. It involves using HTML, CSS, and JavaScript to create and design web pages, ensuring they are responsive and user-friendly. Front-end developers work with frameworks and libraries such as React, Angular, or Vue.js to build dynamic and interactive interfaces. Their role is to ensure that the website looks good and functions correctly on all devices, providing a seamless and engaging user experience.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataScience} alt="Data Science" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Data Science</h1>
                        <p>
                            Data science involves extracting insights and knowledge from data using various scientific methods, processes, algorithms, and systems. It combines techniques from statistics, computer science, and domain-specific knowledge to analyze and interpret complex data sets. Data scientists use programming languages such as Python, R, and SQL, along with tools like TensorFlow, PyTorch, and Pandas, to perform tasks such as data cleaning, analysis, visualization, and building predictive models. Their work helps organizations make data-driven decisions, uncover trends, and solve complex problems by transforming raw data into actionable insights.
                        </p>
                    </div>
                </div>

            </span>
        </section>
    )
}

export default Skills