import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LandingPage from './components/pages/landingPage/LandingPage'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App