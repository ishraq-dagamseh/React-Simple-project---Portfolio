// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HOME page/home";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/testimonials/testimonials";
import Services from "./Components/services/services";
import Contact from "./Components/Contact Us/Contact Us";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Other routes */}
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
