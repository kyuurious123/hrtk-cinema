import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Notice from './pages/Notice'
import List from './pages/List'

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <p className="text-xs text-[#4E4747] pt-2 pb-8 text-center">© Copyright 2025 hrtk_cinema</p>
      </div>
    </BrowserRouter>
  )
}

export default App