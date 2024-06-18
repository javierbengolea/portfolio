import React from 'react'
import "./skills.css"
import Backend from "../../assets/logo_steam.png"
import Frontend from "../../assets/seguridad_vial.png"
import DataScience from "../../assets/subway.jpg"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Proyectos</span>
            <span className="skillDesc">
                Como DataScience tengo 3 proyectos Principales
                
            </span>
            <span className="skillBars">
                <div className="skillBar">
                    <img src={Backend} alt="Mlops" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>MLOps Steam</h1>
                        <p>
                        Basados en datasets públicos sobre Steam, se realiza un EDA y el objetivo es  una API con Endpoints que devuelvan información sobre estadísticas (juegos, desarrolladoras, usuarios), Análisis de Sentimiento en base a las reseñas dejadas de cada producto por los usuarios y un Sistema de Recomendación.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <a href="https://github.com/javierbengolea/PI_ML_OPS/" target='blank' style={{color: "white", textDecoration: 'underline', fontWeight:'bold'}}
                            >Link del Proyecto</a>
                        </p>
                        
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Frontend} alt="Accidentes Viales" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Estudio Accidentes Viales</h1>
                        <p>
                        Es el estudio de la Accidentología Vial de la Ciudad Autónoma de Buenos Aires con el objetivo de tener una idea clara de este fenómeno para tomar medidas con perspectiva de aligeramiento de estos siniestros.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <a href="https://github.com/javierbengolea/proyecto-accidentes-viales" target='blank' style={{color: "white", textDecoration: 'underline', fontWeight:'bold'}}
                            >Link del Proyecto</a>
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataScience} alt="Data Science" className="skillBarImg" />
                    <div className="skillBarText">
                        <h1>Análisis de Opiniones y Recomendaciones</h1>
                        <p>
                        Proyecto que recorre todo el proceso desde la adquisición de datos hasta crear un Dashboard y con la ayuda de Machine Learning, usando la automatización, con el objetivo de conocer la situación y medir el desempeño. Con los Datasets de Google, Yelp y otras fuentes, obtenemos información sobre Subway y su competencia, se desarrolla un Dashboard con 4 KPI's y con la ayuda del Machine Learning se despliega un modelo predictivo que basado en las características de cada restaurante permite elegir aquellas que puedan lograr una mejora en las ratings, mejora que va acorde a los objetivos de la empresa.
                        </p>
                        <p>&nbsp;</p>
                        <p>
                            <a href="https://github.com/Aspirina180mg/PF_DATAPT07" target='blank' style={{color: "white", textDecoration: 'underline', fontWeight:'bold'}}
                            >Link del Proyecto</a>
                        </p>
                    </div>
                </div>

            </span>
        </section>
    )
}

export default Skills