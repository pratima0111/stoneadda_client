import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import WhySell from "./components/WhySell/WhySell";
import Home from "./components/Home";
import UpdatePassword from "./components/UpdatePassword";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer/Footer";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route exact path="/Testimonials" element={<Testimonials />}></Route>
          <Route exact path="/whySell" element={<WhySell />}></Route>
          <Route exact path="/Update_Password" element={<UpdatePassword />}></Route>
          <Route exact path="/Forgot_Password" element={<ForgotPassword />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
