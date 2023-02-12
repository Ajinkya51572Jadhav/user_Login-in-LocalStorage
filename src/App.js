import react from "react";
import { NavLink } from "react-router-dom";
import {Router,Routes,Route} from "react-router-dom";
import NavBar from "./Components/NavBar";

import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Welcome from "./Components/Welcome";


function App(){

  return(
    <div>
            
    <NavBar/>
        
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/welcome" element={<Welcome/>} />
     </Routes>

   

    </div>
  )
};
export default App;