import "../App.css";
import { HomeMedical, AboutServices, Services, AboutProfesional, Footer, Header, ContactForm, FrequentlyAsked, Location, Testimonial, Galery } from "../Components";


function HomePage () {

  return (
    <div className="App">
      <Header />
      <HomeMedical />
      <AboutServices />
      <AboutProfesional />
      <Services />
      <ContactForm />
      <FrequentlyAsked />
      {/* <Testimonial /> */}
      {/* <Galery /> */}
      <Location />
      <Footer />
    </div>
  );
}

export default HomePage;