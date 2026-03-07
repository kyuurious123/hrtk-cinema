// src/components/MovieCard.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { Movie } from '../data/movies'

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div
      className="hover:-translate-y-1 transition-all duration-200 text-white cursor-pointer"
      onClick={() => navigate(`/post/${movie.id}`)}
    >
      {/* 카드 상단: 작품 종류 + 작가명 */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-white">
        <span>{movie.type}</span>
        <span>{movie.author}</span>
      </div>

      {/* 제목 */}
      <div>
        <h3 className="text-3xl font-bold">{movie.titleKo}</h3>
        <p className="font-semibold mb-4">{movie.titleEn}</p>
      </div>

      {/* 썸네일 */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={movie.thumbnail}
          alt={movie.titleKo}
          className="w-full h-[200px] object-cover"
        />
      </div>

    </div>
  )
}

export default MovieCard
