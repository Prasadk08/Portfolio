import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes