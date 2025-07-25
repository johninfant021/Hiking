import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Comp/LandingPage";
import Equipment from "./Comp/Equipment";
import Nav from "./Comp/Nav";
import About from "./Comp/About";
import Blog from "./Comp/Blog";
import Contributor from "./Comp/Contributor";
import Write from "./Comp/Write";
import SignUp from "./Comp/SignUp";
import LogIn from "./Comp/LogIn";
import Contact from "./Comp/ContactUs";
import ScrollToTop from "./Comp/ScrollTop";
import PrivacyPolicy from "./Comp/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/nav" element={<Nav />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/equipment" element={<Equipment />}></Route>
          <Route path="/cont" element={<Contributor />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/sign" element={<SignUp />}></Route>
          <Route path="/log" element={<LogIn />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
