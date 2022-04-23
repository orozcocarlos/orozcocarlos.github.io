import React from "react";
import "./home.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { init } from "ityped";

import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
  Language,
  WhatsApp,
  GitHub,
  Twitter,
} from "@material-ui/icons";
export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Electrónico"],
    });
  }, []);
  return (
    <div>
      <section className="home">
        <div className="image">
          <img loading="lazy" src="assets/images/i01_carlos.png" alt="" />
        </div>

        <div className="content">
          <h3>Hola, soy Carlos Orozco</h3>
          <h2>
            {" "}
            Ingeniero <span ref={textRef}></span>
          </h2>
          <br />
          <h1>
            Soy un profesional con experiencia en Electrónica, Servidores
            y Programación.
          </h1>

          {/* <p>
            I am an engineering student in Electronics and Communications, eager
            and motivated to learn new things in the workplace. I consider
            myself a humble person with a high capacity for rapid learning in
            any task in a self-taught way.
          </p> */}

          {/* <Link to="/about">
      <a className="btn">
        {" "}
        About me <Person className="fas fa-user" />{" "}
      </a>
    </Link> */}
          <br />
          <br />
          <div className="share">
            <a
              href="https://www.linkedin.com/in/carlosorozco6489/"
              target="_blank"
            >
              <LinkedIn className="fas fa-user" />{" "}
            </a>
            <a href="https://twitter.com/corozco6489" target="_blank">
              <Twitter className="fas fa-user" />{" "}
            </a>
            <a
              href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
              target="_blank"
            >
              <YouTube className="fas fa-user" />{" "}
            </a>
            <a href="https://github.com/orozcocarlos" target="_blank">
              <GitHub className="fas fa-user" />{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
