// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect } from "react"
import ContentAll from "./components/contentAll"
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(() =>{
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      offset: -2,
    });
  })

  return (
    <>
      <ContentAll />
    </>
  )
}

export default App
