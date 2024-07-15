import React, {useState} from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import PageLayout from "./layouts/PageLayout/PageLayout";
import Income from './pages/Income/Income';
import Expense from './pages/Expense/Expense';
import GlobalContextWrapper from './components/GlobalContext/GlobalContextWrapper';

function App() {

  return (
    <>
     <GlobalContextWrapper>
          <Routes>
          <Route path="/" element={<Signup />}/>
            <Route path="/register" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route element={<PageLayout />}>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/income" element={<Income />}/>
              <Route path="/expense" element={<Expense />}/> 
            </Route> 
          </Routes>
      </GlobalContextWrapper>
    </>
  )
}

export default App
