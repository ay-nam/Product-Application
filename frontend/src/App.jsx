import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<AddProduct />}></Route>
    </Routes>
    </>
  )
}

export default App
