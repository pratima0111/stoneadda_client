<<<<<<< HEAD
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
        
        
        <Router>
           
        <div className="App">
        
          
         
          <Routes>
                 <Route exact path='/SignIn' element={< SignIn />}></Route>
                 <Route exact path='/SignUp' element={< SignUp />}></Route>
  
          </Routes> 
        
        </div>
        </Router>
  
=======
import './App.css';
// import FAQ from './components/FAQ/FAQ';
// import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar';
// import Testimonials from './components/Testimonials';
// import WhyStoneadda from './components/WhyStoneadda';
// import Home from './components/Home';

function App() {
<<<<<<< HEAD
    return ( 
      <div className = "App" > 
        { /* <Header/>  */ } 
        <Navbar />
        </div>
    );
=======
  return (
    <div className="App">
          <Header/>            
    </div>
>>>>>>> Stoneadda/development
  );
>>>>>>> 1f04394b8a26a6a4ec5d4f1902d35ec1fcc2f9fb
}

export default App;