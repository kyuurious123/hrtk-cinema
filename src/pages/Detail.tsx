// src/pages/Detail.tsx
// 필요한 패키지: npm install @mdx-js/rollup @mdx-js/react remark-gfm
import { useState, useRef, useEffect } from 'react'
import { useBGM, PAGE_BGM } from '../context/BGMContext'
import { useParams, useNavigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { movies } from '../data/movies'
import type { Movie, NovelContent, IllustrationContent, ComicsContent } from '../data/movies'
import { useNovel } from '../hooks/useNovel'
import * as MDXComponents from '../components/MDXComponents'
import ArrowIcon from '../assets/arrow.svg'

// 비밀번호가 필요한 글의 id (여러 개도 가능: [3, 7, 12])
const LOCKED_IDS: number[] = [8]

function getMovieById(id: string): Movie | undefined {
  return movies.find((m) => String(m.id) === id)
}

function getAdjacentMovies(id: string): { prev: Movie | null; next: Movie | null } {
  const index = movies.findIndex((m) => String(m.id) === id)
  return {
    prev: index > 0 ? movies[index - 1] : null,
    next: index < movies.length - 1 ? movies[index + 1] : null,
  }
}

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [movieInfoOpen, setMovieInfoOpen] = useState(false)
  const numericId = Number(id)
  const isLocked = LOCKED_IDS.includes(numericId)
  const [unlocked, setUnlocked] = useState(false)
  const pageBgmSrc = PAGE_BGM[numericId]
  const { pauseGlobal, resumeGlobal } = useBGM()
  const pageAudioRef = useRef<HTMLAudioElement | null>(null)

  // 페이지별 BGM — 진입 시 자동재생, 나가면 글로벌 재개
  useEffect(() => {
    if (!pageBgmSrc) return
    pauseGlobal()
    const audio = new Audio(pageBgmSrc)
    audio.loop = true
    audio.volume = 0.5
    audio.play().catch(() => {})
    pageAudioRef.current = audio
    return () => {
      audio.pause()
      pageAudioRef.current = null
      resumeGlobal()
    }
  }, [pageBgmSrc])

  const movie = getMovieById(id ?? '')
  const { prev, next } = getAdjacentMovies(id ?? '')

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white gap-4">
        <p>작품을 찾을 수 없습니다.</p>
        <button
          onClick={() => navigate('/')}
          className="text-sm text-gray-400 border border-gray-600 px-4 py-2 hover:border-gray-300 transition-colors"
        >
          홈으로
        </button>
      </div>
    )
  }

  return (
    <div className="text-white min-h-screen">

      {/* ── 헤더 ── */}
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-0 mb-20 md:mb-10">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 mb-10 hover:text-gray-300 transition-colors block"
        >
          ← 목록으로
        </button>

        <header className="mb-6">
          <p className="text-xl text-gray-200 mb-2">{movie.author}</p>
          <h1 className="text-4xl font-bold mb-1">{movie.title}</h1>
        </header>

        {/* 영화 정보 — 접기/펼치기 */}
        <div className="mb-2 md:mb-20 border border-white/10">
          <button
            onClick={() => setMovieInfoOpen((v) => !v)}
            className="w-full flex justify-between items-center p-3 md:px-4 md:py-3 text-sm text-gray-300 hover:text-gray-200 transition-colors"
          >
            <span className="text-sm uppercase">영화 정보</span>
            <span className="text-lg leading-none">{movieInfoOpen ? '−' : '+'}</span>
          </button>

          {movieInfoOpen && (
            <div className="p-3 md:p-5 border-t border-white/10">

                <div>
                    <h3 className="text-2xl font-bold">{movie.titleKo}</h3>
                    <p className="font-semibold mb-4">{movie.titleEn}</p>

                </div>

                <div>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed mb-3">{movie.synopsis}</p>
                </div>

                

              {movie.watchLinks.length > 0 && (
                <div className="flex gap-5 text-sm flex-wrap">
                  {movie.watchLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {link.name}
                      <img src={ArrowIcon} alt="" className="inline ml-1 w-[11px]" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── 잠금 화면 ── */}
      {isLocked && !unlocked && (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      )}

      {/* ── 창작물 콘텐츠 ── */}
      {(!isLocked || unlocked) &&
      <div className={movie.content.kind === 'illustration' ? 'w-full' : 'max-w-2xl mx-auto px-4'}>
        <ContentRenderer content={movie.content} titleKo={movie.titleKo} />
      </div>}

      {/* ── 이전 / 다음 ── */}
      <div className="max-w-2xl mx-auto px-6 pb-32 mt-20">
        <nav className="grid grid-cols-2 gap-4 pt-8">
          <div>
            {prev && (
              <button
                onClick={() => navigate(`/post/${prev.id}`)}
                className="text-left border border-white/10 md:px-5 md:py-4 p-3 w-full hover:border-white/30 transition-colors"
              >
                <span className="block text-xs text-gray-500 uppercase mb-1">
                  ← 이전 글
                </span>
                <span className="block text-gray-300">{prev.titleKo}</span>
              </button>
            )}
          </div>
          <div>
            {next && (
              <button
                onClick={() => navigate(`/post/${next.id}`)}
                className="text-right border border-white/10 md:px-5 md:py-4 p-3 w-full hover:border-white/30 transition-colors"
              >
                <span className="block text-xs text-gray-500 uppercase mb-1">
                  다음 글 →
                </span>
                <span className="block text-gray-300">{next.titleKo}</span>
              </button>
            )}
          </div>
        </nav>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

// ── 콘텐츠 렌더러 ─────────────────────────────────────────

function ContentRenderer({ content, titleKo }: { content: Movie['content']; titleKo: string }) {
  if (content.kind === 'novel')        return <NovelRenderer content={content} />
  if (content.kind === 'illustration') return <IllustrationRenderer content={content} titleKo={titleKo} />
  if (content.kind === 'comics')       return <ComicsRenderer content={content} titleKo={titleKo} />
  return null
}

function NovelRenderer({ content }: { content: NovelContent }) {
  const { Component, loading, error } = useNovel(content.mdPath)

  if (loading) return <p className="text-gray-600 text-sm py-8">불러오는 중...</p>
  if (error || !Component) return <p className="text-gray-600 text-sm py-8">글을 불러올 수 없습니다.</p>

  return (
    <MDXProvider components={MDXComponents}>  {/* ← 여기로 이동 */}
      <div className="pb-4 indent-3 font-normal text-[17px] text-[#eaeaeb]">
        <Component />
      </div>
    </MDXProvider>
  )
}
function IllustrationRenderer({ content, titleKo }: { content: IllustrationContent; titleKo: string }) {
  const [tapped, setTapped] = useState(false)

  // imageUrl 정규화
  const images = Array.isArray(content.imageUrl)
    ? content.imageUrl.map((item) =>
        typeof item === 'string' ? { src: item, width: undefined } : item
      )
    : [{ src: content.imageUrl as string, width: undefined }]

  // 마크다운 파싱 (볼드, 이탤릭, 줄바꿈 지원)
  const parseCaption = (text: string) => {
    const parseLine = (line: string, i: number) => {
      const parts: React.ReactNode[] = []
      const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g
      let last = 0
      let match
      while ((match = regex.exec(line)) !== null) {
        if (match.index > last) parts.push(line.slice(last, match.index))
        if (match[1] !== undefined) parts.push(<strong key={match.index}>{match[1]}</strong>)
        else if (match[2] !== undefined) parts.push(<em key={match.index}>{match[2]}</em>)
        last = match.index + match[0].length
      }
      if (last < line.length) parts.push(line.slice(last))
      return <p key={i} className="text-[#eaeaeb] leading-7">{parts}</p>
    }

    return text.split('\n').map((line, i) =>
      line.trim() === ''
        ? <div key={i} className="h-4" />   // 빈 줄 = 단락 간격
        : parseLine(line, i)
    )
  }

  const caption = content.caption ? (
    <div className="max-w-2xl mx-auto px-4 mb-8">
      {parseCaption(content.caption)}
    </div>
  ) : null

  if (content.hoverImageUrl) {
    return (
      <>
        {caption}
        <div
          className="relative w-full min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: content.backgroundUrl ? `url(${content.backgroundUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      >
        <div
          className="relative group cursor-pointer"
          onClick={() => setTapped((v) => !v)}
        >
          <img
            src={images[0].src}
            alt={titleKo}
            className="max-h-screen object-contain"
          />
          <img
            src={content.hoverImageUrl}
            alt={titleKo}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300
              ${tapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          />
          </div>
        </div>
      </>
    )
  }

  // 일반 이미지 (단일 or 배열)
  return (
    <>
      {caption}
    <div className="flex flex-col items-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={`${titleKo} ${i + 1}`}
          className="block max-md:!w-full"
          style={{
            width: img.width ?? '100%',
          }}
        />
      ))}
    </div>
    </>
  )
}

function ComicsRenderer({ content, titleKo }: { content: ComicsContent; titleKo: string }) {
  const [current, setCurrent] = useState(0)
  const total = content.pages.length

  const prev = () => setCurrent(p => Math.max(0, p - 1))
  const next = () => setCurrent(p => Math.min(total - 1, p + 1))

  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    else if (diff < -50) prev()
    touchStartX.current = null
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className="relative w-full md:w-[90%] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-black/10 text-white/40 text-xl disabled:opacity-20 hover:bg-black/10 transition-colors"
          aria-label="이전 페이지"
        >
          ‹
        </button>
        <img
          src={content.pages[current]}
          alt={`${titleKo} ${current + 1}페이지`}
          className="w-full block"
        />
        <button
          onClick={next}
          disabled={current === total - 1}
          className="absolute right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-black/10 text-white/40 text-xl disabled:opacity-20 hover:bg-black/10 transition-colors"
          aria-label="다음 페이지"
        >
          ›
        </button>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        {current + 1} / {total}
      </div>
      {total <= 20 && (
        <div className="mt-2 flex gap-1.5">
          {content.pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-white' : 'bg-gray-600'
              }`}
              aria-label={`${i + 1}페이지로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── 비밀번호 게이트 ────────────────────────────────────────

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (input === import.meta.env.VITE_SECRET_PASSWORD) {
      onUnlock()
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col items-center gap-6 text-white">
      <p className="text-gray-50 text-sm text-center">
        <a href="https://url.kr/o2ws7x" className='underline pb-1'>https://url.kr/o2ws7x</a>
        <br />
        링크의 ISBN 끝 4자리를 입력해 주세요.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <input
          type="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false) }}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          placeholder="비밀번호를 입력하세요"
          className="bg-transparent border border-white/20 px-4 py-2 text-sm text-white placeholder:text-gray-600 outline-none focus:border-white/50 transition-colors"
          autoFocus
        />
        {error && <p className="text-xs text-red-400">비밀번호가 올바르지 않습니다.</p>}
        <button
          onClick={handleSubmit}
          className="border border-white/20 px-4 py-2 text-sm hover:border-white/50 transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  )
}


// ── 스크롤 투 탑 버튼 ────────────────────────────────────

function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors backdrop-blur-sm border border-white/20"
      aria-label="맨 위로"
      title="맨 위로"
    >
      ↑
    </button>
  )
}