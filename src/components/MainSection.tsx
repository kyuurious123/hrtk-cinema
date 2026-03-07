// src/components/MainSection.tsx
import CinemaSpotlight from './CinemaSpotlight'
import cinemaImg from '../assets/cinema.jpg'
import cinemaImgMo from '../assets/cinema-mo.jpg'
import titleImg from '../assets/title_white.png'
import topTitleImg from '../assets/toptitle.png'


export default function MainSection() {
  return (
    <section className="w-full !bg-black">
      <CinemaSpotlight imageSrc={cinemaImg} mobileImageSrc={cinemaImgMo} titleSrc={titleImg} topTitleSrc={topTitleImg} />
    </section>
  )
}