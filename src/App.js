import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials";
import WhySell from "./components/WhySell/WhySell";
import Home from "./components/Home";
import Update_Password from "./components/Update_Password";
import Forgot_Password from "./components/Forgot_Password";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          
          <Route exact path="/Home" element={<Home />}></Route>  
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/faq" element={<FAQ />}></Route>
          <Route exact path="/whySell" element={<WhySell />}></Route>
          <Route exact path="/Update_Password" element={<Update_Password />}></Route>  
          <Route exact path="/Forgot_Password" element={<Forgot_Password />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}


export default App;
