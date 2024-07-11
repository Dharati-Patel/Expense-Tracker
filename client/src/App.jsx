import React, {useState} from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import PageLayout from "./layouts/PageLayout/PageLayout";

function App() {
  const [active, setActive] = useState(1)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route element={<PageLayout />}>
              <Route path="/dashboard" element={<Dashboard />}/>
            </Route>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
