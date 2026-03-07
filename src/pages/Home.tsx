// src/pages/Home.tsx
import MainSection from '../components/MainSection'
import ListSection from '../components/ListSection'
import GuestBook from '../components/GuestBook'
import { movies } from '../data/movies'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* 영화관 spotlight 인트로 */}
      <MainSection />

      {/* 작품 목록 */}
      <ListSection movies={movies} />

      {/* 방명록 */}
      <GuestBook />
      <p className='pt-5 pb-10 text-gray-800 text-xs text-center'>© Copyright 2025 hrtk_cinema</p>
    </main>
  )
}
