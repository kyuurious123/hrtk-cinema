// src/pages/ListPage.tsx
import React, { useState, useMemo } from 'react'
import MovieCard from '../components/MovieCard'

import { movies } from '../data/movies'

type TabType = 'ALL' | 'NOVEL' | 'ILLUSTRATION' | 'COMICS'

const ListPage: React.FC = () => {
  // 현재 선택된 탭 (기본값: ALL)
  const [activeTab, setActiveTab] = useState<TabType>('ALL')

  // 탭 목록
  const tabs: TabType[] = ['ALL', 'NOVEL', 'ILLUSTRATION', 'COMICS']

  // 탭에 따라 필터링된 영화 목록
  const filteredMovies = useMemo(() => {
    if (activeTab === 'ALL') {
      return movies
    }
    return movies.filter((movie) => movie.type === activeTab)
  }, [activeTab])

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* TAB 메뉴 */}
      <div className="flex gap-2 mb-10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-fit px-2 py-1 rounded-full font-semibold text-[15px] whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-white text-black '
                : 'bg-transparent border text-white border-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 필터링된 카드 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* 결과가 없을 때 */}
      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">해당 카테고리에 작품이 없습니다.</p>
        </div>
      )}
    </div>
  )
}

export default ListPage