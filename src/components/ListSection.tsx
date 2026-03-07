// src/components/ListSection.tsx
import React, { useState, useMemo } from 'react'
import MovieCard from './MovieCard'
import type { Movie } from '../data/movies'

type TabType = 'ALL' | 'NOVEL' | 'ILLUSTRATION' | 'COMICS'

interface ListSectionProps {
  movies: Movie[]
}

const AUTHOR_ORDER = [
  '계란', '고도', '공명정대', '나가', '마봄', '매리', '몹', '뵤뵤',
  '생활연구소', '슈므', '아개무리', '아우우', '요븐', '익명',
  '재준', '후추', '100',
]

const ListSection: React.FC<ListSectionProps> = ({ movies }) => {
  const [activeTab, setActiveTab] = useState<TabType>('ALL')

  const tabs: TabType[] = ['ALL', 'NOVEL', 'ILLUSTRATION', 'COMICS']

  const tabCounts = useMemo(() => ({
    ALL: movies.length,
    NOVEL: movies.filter((m) => m.type === 'NOVEL').length,
    ILLUSTRATION: movies.filter((m) => m.type === 'ILLUSTRATION').length,
    COMICS: movies.filter((m) => m.type === 'COMICS').length,
  }), [movies])

  const filteredMovies = useMemo(() => {
    const filtered =
      activeTab === 'ALL'
        ? [...movies]
        : movies.filter((m) => m.type === activeTab)

    return filtered.sort((a, b) => {
      const ai = AUTHOR_ORDER.indexOf(a.author)
      const bi = AUTHOR_ORDER.indexOf(b.author)
      // 목록에 없는 작가는 맨 뒤로
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
    })
  }, [activeTab, movies])

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 !bg-black">
      {/* TAB 메뉴 */}
      <div className="flex gap-2 mb-10 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-fit px-2 py-1 rounded-full font-semibold text-[15px] whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-white text-black'
                : 'bg-transparent border text-white border-white'
            }`}
          >
            {tab} {tabCounts[tab]}
          </button>
        ))}
      </div>

      {/* 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">해당 카테고리에 작품이 없습니다.</p>
        </div>
      )}
    </div>
  )
}

export default ListSection