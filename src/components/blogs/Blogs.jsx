import React from 'react'
import "./blogs.scss";
import { Link, CalendarToday, Person } from "@material-ui/icons";
import { certificaciones } from "../../data";

import { useState, useEffect } from "react";

export default function Blogs() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
      setBlog(certificaciones);
    }, [true]);
  
    return (
      <div className="blog">
        <section className="blogs">
          <h1 className="heading">
            {" "}
            <span>cursos</span>   {" "}
          </h1>
  
          <div className="box-container">
            {blog.map((d) => (
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
                
                  {/* <a href=  {d.link} className="btn" target="_blank">Read More
                  
                    <i className="fas fa-link">
                      <Link className="fas fa-user" />{" "}
                    </i>{" "}
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
