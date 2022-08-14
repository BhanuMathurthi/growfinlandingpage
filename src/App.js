import "./App.css";
import Header from "./components/header/header";
import HeaderContent from "./components/header/headercontent";
import Features from "./components/section1/features";
import Logos from "./components/section1/logos";
import Features2 from "./components/section3/features2";
import Showcase from "./components/section2/showcase";
import Testimonials from "./components/section2/testimonial";
import Collections from "./components/section2/integrations";
import Security from "./components/section2/security";
import Accordion from "./components/section3/accordion";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <HeaderContent />
        <Features />
        <Features2 />
        <Logos />
        <Showcase />
        <Testimonials />
        <Collections />
        <Accordion />
        <Security />
        <Footer />
      </div>
    </>
  );
}

export default App;
