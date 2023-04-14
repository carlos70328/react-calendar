import React from "react";
import implante from "../Assets/implante.jpg"
import plasma from "../Assets/plama.jpg"
import consultaMedica from "../Assets/Medicina-General.jpg"
import crecimientoDesarrollo from "../Assets/crecimiento-desarrollo.avif"
import sueroTerapia from "../Assets/suero-terapia.jpg"
import certificados from "../Assets/medico-escribiendo.jpg"
import FlipCard from "./helper/FlipCard";



export const Services = () => {

  return (
    <section id="services" className="services section-bg ">
      <div className="container">

        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <FlipCard
            frontContent={
              <div className="icon-box">
                <div className="icon"><img src={plasma} alt="" className="img-fluid" /></div>
                <h1>Plasma Rico en plaquetas</h1>
                {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
              </div>
            }
            backContent={
              <div className="icon-box">
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <h1 className="">Tratamiento estetico</h1>

                      <ul>
                        <li><p>tratamiento para el acne</p></li>
                        <li><p>Rejuvenecimiento facil</p></li>
                        <li><p>Desvanecimiento de cicatrices</p></li>
                        <li><p>Reduccion de lineas de expresion</p></li>
                        <li><p>Hidratacion facial</p></li>
                      </ul>
                    </div>
                    <div className="carousel-item">
                      <div className=""><h1 >Tratamiento medico </h1></div>
                      <ul>
                        <li><p>Sinovitis</p></li>
                        <li><p>Tendinitis</p></li>
                        <li><p>Dolores Articulares</p></li>
                        <li><p>Sindrome de hombro doloroso</p></li>
                        <li><p>Dedos de gatillo</p></li>
                        <li><p>Espolón calcaneo</p></li>
                      </ul>
                    </div>

                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>


              </div>
            }
          />

          <FlipCard
            frontContent={

              <div className="icon-box">
                <div className="icon"><img src={sueroTerapia} alt="" className="img-fluid" /></div>
                <h4><a href="">Suero Terapia</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>


            }
            backContent={<h3>Back Content</h3>}
          />

          <FlipCard
            frontContent={
              <div className="icon-box">
                <div className="icon"><img src={consultaMedica} alt="" className="img-fluid" /></div>
                <h4><a href="">Consulta Medica</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            }
            backContent={<h3>Back Content</h3>}
          />

          <FlipCard
            frontContent={
              <div className="icon-box">
                <div className="icon"><img src={certificados} alt="" className="img-fluid" /></div>
                <h4><a href="">Certificados Médicos</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            }
            backContent={<h3>Back Content</h3>}
          />

          <FlipCard
            frontContent={
              <div className="icon-box">
                <div className="icon"><img src={implante} alt="" className="img-fluid" /></div>
                <h4><a href="">Insercion y Extracción MPF</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div>
            }
            backContent={
              <div className="icon-box">
                <div className="icon"><img src={implante} alt="" className="img-fluid" /></div>
                <h4><a href="">Insercion y Extracción MPF</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div>
            }
          />
          <FlipCard
            frontContent={
              <div className="icon-box">
                <div className="icon"><img src={crecimientoDesarrollo} alt="" className="img-fluid" /></div>
                <h4><a href="">Control Crecimiento y desarrollo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div>
            }
            backContent={<h3>Back Content</h3>}
          />

        </div>




      </div>
    </section>
  );
};

