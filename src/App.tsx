import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 나중에 페이지 추가:
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default App