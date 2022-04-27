import React from "react";
import "./blogs.scss";
import { Link, CalendarToday, Person } from "@material-ui/icons";
import { formacionprofesional ,formacionpersonal } from "../../data";

import { useState, useEffect } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";



export default function Blogs() {
  const list = [
    {
      id: "web",
      title: "Profesional",
    },

    {
      id: "design",
      title: "Personal",
    },
    
  ];
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const [blog, setBlog] = useState([]);



  useEffect(() => {
    switch (selected) {
      case "web":
        setData(formacionprofesional);
        break;
      case "design":
        setData(formacionpersonal);
        break;

      default:
        setData(formacionprofesional);
    }
  }, [selected]);

  return (
    <div className="blog">
      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span></span>{" "}
        </h1>

        <h1 className="heading">
          {" "}
          <span>Formación</span> {" "}
        </h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="box-container">
          {data.map((d) => (
            <div className="box">
              <div className="image">
                <img loading="lazy" src={d.img} alt="" />
              </div>
              <div className="content">
                <div className="icons">
                  <a href="#" target="_blank">
                    <i className="fas fa-calendar">
                      <CalendarToday className="fas fa-user" />
                    </i>{" "}
                    {d.date}{" "}
                  </a>
                  <a href="#" target="_blank">
                    <i className="fas fa-user">
                      <Person className="fas fa-user" />
                    </i>{" "}
                    by {d.by}{" "}
                  </a>
                </div>
                <h3>{d.title}</h3>

             
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
