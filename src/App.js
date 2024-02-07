import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
//import { Switch } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { Person } from "@mui/icons-material";

//import CarList from "./CarList";

function App() {
  return (
    
      <Router>
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
          
        </Routes>
      </Router>
    
  );
}

export default App;
