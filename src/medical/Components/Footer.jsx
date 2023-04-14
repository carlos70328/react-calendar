import React from "react";
import Logo from "../Assets/MAYRA-LOGO.png";


export const Footer = () => {


  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">


            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Mayra Calderon <br />Servicios Medicos  </h3>
              <p>
                Carrera 3 # 13-60  <br />
                Apartamento 8<br />
                Cartago Valle2<br />
                Colombia <br /><br />
                <strong>Celular:</strong>3057458767<br />

              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">inicio</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Trayectoria</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Servicios</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Pide una cita</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Nuestros Servicios</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Plasma Rico en plaquetas</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Consulta Medicina General</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Suero Terapia</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Certificados Medicos</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Implantes</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Crecimiento y desarrollo</a></li>
              </ul>
            </div>


          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>CentroMedicoMC</span></strong>. Todos Los Derechos Reservado 2023
          </div>

        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#footer" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#footer" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#footer" className="google-plus"><i className="bi bi-skype"></i></a>
          <a href="#footer" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

