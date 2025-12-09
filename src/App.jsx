import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background-shapes">
        <div className="shape-1 common-shape ">
          <img src="https://bentofolio-react.vercel.app/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="shape-2 common-shape">
          <img src="https://bentofolio-react.vercel.app/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img src="https://bentofolio-react.vercel.app/assets/img/bg/object-3d-1.png" alt="object-3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img src="https://bentofolio-react.vercel.app/assets/img/bg/object-3d-2.png" alt="object-3d-2" />
        </div>
      </div>
      <main className='w-full p-4'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </main>
      
    </>
  )
}

export default App