// src/components/MovieCard.tsx
import React from 'react'
import type { Movie } from '../data/movies'
import ArrowIcon from '../assets/arrow.svg'


interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="hover:-translate-y-1 transition-all duration-200 text-white">
      {/* 카드 상단: 작품 종류 + 작가명 */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-white">
        <span>
          {movie.type}
        </span>
        <span>{movie.author}</span>
      </div>
      <div>
        {/* 제목 */}
        <h3 className="text-3xl font-bold mb-1">
          {movie.titleKo}
        </h3>
        <p className="font-semibold mb-4">{movie.titleEn}</p>
      </div>

      {/* 썸네일 이미지 */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={movie.thumbnail}
          alt={movie.titleKo}
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* 카드 본문 */}
      <div className="py-3">

        {/* 장르, 볼 수 있는 사이트 링크들 */}
        <div className="flex justify-between flex-wrap mb-2">
          <p>
            {movie.genre}
          </p>
          <div className="flex gap-4 text-sm">
            {movie.watchLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors"
              >
                {link.name}
                <img src={ArrowIcon} alt="아이콘" className="inline ml-2 w-[12px]" />
              </a>
            ))}
          </div>
        </div>

        {/* 줄거리 */}
        <p className="text-sm leading-relaxed mb-4">
          {movie.synopsis}
        </p>

      </div>
    </div>
  )
}

export default MovieCard