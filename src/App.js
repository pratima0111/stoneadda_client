import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials";
import WhySell from "./components/WhySell/WhySell";
//import BookData from "./Data.json";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route exact path="/whySell" element={<WhySell />}></Route>
        </Routes>
      </Router>
      {/* <WhySell/>
      <FAQ/>
      <Testimonials /> */}
    </div>
  );
}


export default App;
