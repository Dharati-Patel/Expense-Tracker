import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
