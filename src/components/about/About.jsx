import React from "react";
import { Book, School, InsertLink } from "@material-ui/icons";
import "./about.scss";
import { useState  ,useEffect} from "react";
import {
  habilidades
} from "../../data";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
        setData(habilidades);
    
  }, [true]);

  return (
    <div className="acerca">
    <section className="about">
      <h1 className="heading">
        {" "}
        Sobre <span>mi</span>{" "}
      </h1>

      <div className="row">
        <div className="info-container">
          <h1>Información Personal</h1>
        

          <div className="box-container">
            <div className="box">
              <h3>
                {" "}
                <span>Nombre : </span> Carlos Orozco{" "}
              </h3>
           
              <h3>
                {" "}
                <span>Email : </span> corozco6489@gmail.com
              </h3>
              <h3>
                {" "}
                <span>Direccipon : </span> Ecuador, Ambato - Tungurahua{" "}
              </h3>
            </div>

            <div className="box">
              <h3>
                {" "}
                <span>Profesión : </span> Técnico{" "}
              </h3>
              
              <h3>
                {" "}
                <span>Experiencia : </span>  + 1 años{" "}
              </h3>
              <h3>
                {" "}
                <span>Idiomas : </span> Español, English(basic){" "}
              </h3>
            </div>
          </div>

          <a
            a
            href="assets/doc/CarlosOrozco.pdf"
            className="btn"
          >
     
            Ver CV <Book className="fas fa-user" />
          </a>
       
        </div>

        <div className="count-container">
          <div className="box">
            <h3>1+</h3>
            <p>Años de experiencia</p>
          </div>

          <div className="box">
            <h3>4+</h3>
            <p>Clientes</p>
          </div>

          <div className="box">
            <h3>10+</h3>
            <p>Proyectos</p>
          </div>

          <div className="box">
            <h3>5+</h3>
            <p>Cursos</p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills">
      <h1 class="heading">
        {" "}
        <span>Mis </span> Habilidades{" "}
      </h1>

      <div class="box-container">
        {
          data.map(d=>(
            <div class="box">
            <img loading="lazy" src={d.img} />
            <h3>{d.title}</h3>
          </div>
          ))
        }
      
      </div>
    </section>
{/* 
    <section class="education">
      <h1 class="heading">
        {" "}
        <span>my</span> education{" "}
      </h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-graduation-cap">
            {" "}
            <School />
          </i>
          <span>2003 - 2009</span>
          <h3>PRIMARY</h3>
          <p>José Joaquín de Olmedo School, Ambato, Ecuador</p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap">
            <School />
          </i>
          <span>2010 - 2016</span>
          <h3>HIGH SCHOOL</h3>
          <p>
            Higher Technological Teaching Institute "Guayaquil", Ambato,
            Ecuador
          </p>
          <p>Technical Baccalaureate in Consumer Electronics.</p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap">
            <School />
          </i>
          <span>2017 - 2021</span>
          <h3>Technical University of Ambato, Ambato, Ecuador</h3>
          <p>
            Degree in Electronics and Communications Engineer awarded by the
            Technical University of Ambato.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap">
            <School />
          </i>
          <span>2016-2021</span>
          <h3>Professional experience</h3>
          <p>ELECTRICAL TECHNICIAN Ambato, Ecuador</p>
          <p>Installation of electric light meters</p>
          <p>Residential and business electrical installations</p>
          <p>Installation of electrical appliances</p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap">
            <School />
          </i>
          <span>2021</span>
          <h3>Professional experience</h3>
          <p>Maintenance and Assembly of computers (software and hardware)</p>
        </div>

        <div class="box">
          <i class="fas fa-graduation-cap">
            <School />
          </i>
          <span>2021</span>
          <h3>Professional experience</h3>
          <p>Installing operating systems</p>
          <p> Hardware and software troubleshooting</p>
        </div>
      </div>
    </section> */}
  </div>
  );
}

export default About;
