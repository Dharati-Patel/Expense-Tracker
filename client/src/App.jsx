import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
