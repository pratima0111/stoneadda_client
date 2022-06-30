import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FAQ from "./components/FAQ/FAQ";
import { WhySell } from "./components/WhySell/WhySell";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer/Footer";
// import WhyStoneadda from "./components/WhyStoneadda";
//import BookData from "./Data.json";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/SignIn" element={<SignIn />}></Route>
            <Route exact path="/SignUp" element={<SignUp />}></Route>
            <Route exact path="/faq" element={<FAQ />}></Route>
            <Route exact path="/WhyStoneadda" element={<WhySell />}></Route>
            <Route exact path="/Testimonials" element={<Testimonials />}></Route>
          </Routes>
        </Router>
        {/* <WhySell /> */}
        {/* <Testimonials /> */}
        {/* <WhyStoneadda /> */}
        {/* <FAQ /> */}
      </div>
      <Footer />
    </div>
  );
}


export default App;
