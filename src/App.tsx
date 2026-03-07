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

// 글로벌 BGM ♪ 버튼 — 항상 좌하단에 표시
function GlobalBGMButton() {
  const { playing, toggle } = useBGM()
  return (
    <button
      onClick={toggle}
      className="fixed bottom-20 right-4 md:right-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-base transition-colors backdrop-blur-sm border border-white/20"
      aria-label={playing ? 'BGM 일시정지' : 'BGM 재생'}
      title={playing ? 'BGM 일시정지' : 'BGM 재생'}
    >
      {playing ? (
        // 재생 중 — 음표 + 웨이브 (애니메이션)
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9 3v12.5a3.5 3.5 0 1 0 2-3.122V7h6V3H9z"/>
          <rect x="17" y="14" width="2" height="6" rx="1" className="animate-pulse"/>
        </svg>
      ) : (
        // 정지 — 음표
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9 3v12.5a3.5 3.5 0 1 0 2-3.122V7h6V3H9z" opacity="0.5"/>
        </svg>
      )}
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