// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { BGMProvider, useBGM } from './context/BGMContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// 글로벌 BGM ♪ 버튼
function GlobalBGMButton() {
  const { playing, toggle } = useBGM()
  return (
    <button
      onClick={toggle}
      className="fixed right-4 bottom-20 md:bottom-20 md:right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-base transition-colors backdrop-blur-sm border border-white/20"
      aria-label={playing ? 'BGM 일시정지' : 'BGM 재생'}
      title={playing ? 'BGM 일시정지' : 'BGM 재생'}
    >
      {playing ? '⏸' : '♪'}
    </button>
  )
}

function AppInner() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Detail />} />
      </Routes>
      <GlobalBGMButton />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <BGMProvider>
      <AppInner />
    </BGMProvider>
  )
}