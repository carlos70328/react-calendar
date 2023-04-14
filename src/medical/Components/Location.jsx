import React from 'react'

export const Location = () => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Nuestra Ubicación</h2>
          <p>Puedes agendar tu procedimiento en nuestro consultorio o agedar una visita domiciliara dentro de la ciudad de Cartago o sus alrededores .</p>
        </div>
      </div>

      <div>
        <iframe style={{ border: 0, width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1073466181183!2d-75.91751998476886!3d4.751378942537865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38701c6bfa4267%3A0x27632fa43299f4f3!2sCra.%203%20%2313-60%2C%20Cartago%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1681139402371!5m2!1ses!2sco" allowFullScreen></iframe>
      </div>



    </section >
  )
}
