import React from "react";
import logo from "../Assets/logo-wasap.png"

export const HomeMedical = () => {


  return (
    <section id="hero" className="d-flex align-items-center position-relative ">

      <div className="container text-end">
        <h1> Servicios Medicos<br /><p>Dra. Mayra Calderon</p></h1>
        <a href="#appointment" className=" btn-get-started scrollto">Pide tu cita </a>

      </div>

      <a className="fab " href="https://wa.me/+573057458767/?text=Quiero%20una%20cita" target="_blank">
        <img src={logo} width="80" height="60" />
      </a>
    </section>
  );
};

