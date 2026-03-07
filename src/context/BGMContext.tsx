// src/context/BGMContext.tsx
import { createContext, useContext, useRef, useState, useEffect, useCallback } from 'react'

// ── 글로벌 BGM 설정 ────────────────────────────────────────
// GitHub raw URL로 MP3 파일 경로를 지정하세요
export const GLOBAL_BGM_SRC = 'https://github.com/kyuurious123/movie-image/raw/main/music/global.mp3'

// 페이지별 BGM — movies.ts의 id와 MP3 URL을 매핑
export const PAGE_BGM: Record<number, string> = {
  6: 'https://github.com/kyuurious123/movie-image/raw/main/music/epilogue.mp3',
}
// ──────────────────────────────────────────────────────────

interface BGMContextValue {
  playing: boolean
  toggle: () => void
  pauseGlobal: () => void
  resumeGlobal: () => void
}

const BGMContext = createContext<BGMContextValue | null>(null)

export function BGMProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  // audio 엘리먼트 초기화
  useEffect(() => {
    const audio = new Audio(GLOBAL_BGM_SRC)
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [playing])

  const pauseGlobal = useCallback(() => {
    audioRef.current?.pause()
    setPlaying(false)
  }, [])

  const resumeGlobal = useCallback(() => {
    audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})
  }, [])

  return (
    <BGMContext.Provider value={{ playing, toggle, pauseGlobal, resumeGlobal }}>
      {children}
    </BGMContext.Provider>
  )
}

export function useBGM() {
  const ctx = useContext(BGMContext)
  if (!ctx) throw new Error('useBGM must be used within BGMProvider')
  return ctx
}