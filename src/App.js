import React from 'react'
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Spline from '@splinetool/react-spline';



function App() {
  return (
      <div>
        <Spline scene="https://prod.spline.design/nOq060s-5MXh7yH8/scene.splinecode" />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App