import React from "react";
import medico from "../Assets/doctora.avif"

export const AboutProfesional = () => {
  return (
    <>
      <section id="about" className="about section-bg">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Talento Profesiona</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <img src={medico} alt="" className="img-fluid w-75" />
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes bg-white d-flex flex-column align-items-stretch justify-content-center pt-5 px-lg-5">
              <h3>Dra. Mayra Virginia Calderon Ortega</h3>
              <p>Soy Medica egresada de Fundación Universitaria San Martin, Me considero una persona
                responsable, con iniciativa y puntualidad; asumo con agrado los retos y metas que se me
                proponga. Tengo la capacidad de tener un buen manejo en cuanto a las relaciones
                interpersonales, se me facilita el trabajo en equipo, en condiciones de alta presión, así como
                para resolver problemas eficientemente con un sentido claro de la ética profesional. Tengo
                excelente preparación investigativa, científica, humanística lo cual me hace capaz de
                establecer una buena comunicación médico-paciente y con una gran sensibilidad social. soy
                capaz de asimilar e incorporar la metodología para la investigación, tanto en actividades
                médicas y con la sociedad cuyo objeto de trabajo es el proceso comunitario con capacidad
                de intervención a nivel familiar en promoción y mantenimiento de la salud .</p>

              <div className="icon-box">
                <div className="icon"><i className="bi bi-mortarboard-fill"></i></div>
                <h4 className="title"><a href="">Estudios</a></h4>
                <p className="description">Medicina General, Universidad San Martin Sede Pasto</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bi bi-fingerprint "></i></div>
                <h4 className="title"><a href="">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bi bi-rss-fill"></i></div>
                <h4 className="title"><a href="">Otros Estudios</a></h4>
                <p className="description">Especialización en auditoria en salud...</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* <section id="counts" className="counts">
        <div className="container">

          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                <p>Doctors</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="far fa-hospital"></i>
                <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                <p>Departments</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                <p>Research Labs</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                <p>Awards</p>
              </div>
            </div>

          </div>

        </div>
      </section> */}
    </>

  );
};
