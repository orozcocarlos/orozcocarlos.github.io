import "./contact.scss";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
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
  Twitter

} from "@material-ui/icons";
function Contact() {
  const formRef = useRef();

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contacto">
      <section className="contact">
        <h1 className="heading">
          {" "}
          Contacto <span></span>{" "}
        </h1>

        <div className="row">
          <div className="info-container">
            <h1>Datos de Contacto</h1>

            {/* <p>I am an Electronics and Communications Engineer from Ecuador</p> */}

            <div className="box-container">
              <div className="box">
                <i className="fas fa-map">
                  <LocationOn className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>Dirección :</h3>
                  <p>Ecuador</p>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-envelope">
                  <Email className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>Email :</h3>
                  <p>corozco6489@gmail.com</p>
                </div>
              </div>

              {/* <div className="box">
                <i className="fas fa-phone">
                  <Phone className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>Number :</h3>
                  <p>+593 983592690</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-phone">
                  <Language className="fas fa-user" />{" "}
                </i>
                <div className="info">
                  <h3>Web Site :</h3>
                  <a
                    href="http://carlosorozco.ml/"
                    target="_blank"
                    className="sito"
                  >
                    carlosorozco.ml
                  </a>
                </div>
              </div> */}
            </div>

            <div className="share">
              <a
                href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
                target="_blank"
              >
                <YouTube className="fas fa-user" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-orozco-64892021/"
                target="_blank"
              >
                <LinkedIn className="fas fa-user" />{" "}
              </a>
              <a
              href="https://twitter.com/corozco6489"
              target="_blank"
            >
              <Twitter className="fas fa-user" />{" "}
            </a>
              <a
              href="https://github.com/corozco6489"
              target="_blank"
            >
              <GitHub className="fas fa-user" />{" "}
            </a>
              {/* <a href="http://electrodev.cf/" target="_blank">
                <Language className="fas fa-user" />{" "}
              </a>
              <a href="https://wa.me/5930983592690" target="_blank">
                <WhatsApp className="fas fa-user" />{" "}
              </a> */}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="Nombre" name="user_name"  required/>
              <input
                type="number"
                placeholder="Numero"
                name="user_number"
                required
              />
            </div>

            <div className="inputBox">
              <input type="email" placeholder="Email" name="user_email" required />
              <input
                type="text"
                placeholder="Asunto"
                name="user_subject"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Mensaje"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>

            <input type="submit" value="Send Message" className="btn" />
            <br />
            <p> {message && " Thank You...."}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
