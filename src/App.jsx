import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Documentation from './pages/Documentation'
import WhatIs from './pages/WhatIs'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#f8fafc] text-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,146,60,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.22),transparent_32%),linear-gradient(180deg,#fff_0%,#f8fafc_50%,#fff_100%)]" />
        <div className="relative">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-is" element={<WhatIs />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
