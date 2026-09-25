import { useState } from 'react'
import './App.css'
import Home from './Home'
import {  Route, Routes } from 'react-router'
import Login from './Login'
import SignUP from './SignUP'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'
import ProtectedRoute from './protectedRoutes'

function App() {
  return (
    <div>
      <Routes>
        <Route  path='/' element = {<Home />} />  
        <Route path='/login' element = {<Login />} />
        <Route path='/sign-up' element = {<SignUP />} />
        <Route path='/projects' element = {
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>} />
        <Route path='/skills'  element = {
          <ProtectedRoute><Skills />
          </ProtectedRoute>} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/about' element = {<About />} />
      </Routes>

    </div>
  )
}

export default App
