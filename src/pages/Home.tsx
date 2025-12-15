import TicketCard from '../components/TicketCard'
import poster from '../assets/poster2.jpg'
import title from '../assets/title.png'



function Home() {
  return (
    <div className="min-h-screen px-5 py-8 bg-[#1d1a1a]">
      <div className="max-w-full md:max-w-[400px] mx-auto">
        <div>
          {/* 첫 번째 티켓 */}
          <TicketCard className="w-full bg-[#F1F1F1]">
            <div className="py-8">
                <img src={poster} alt="포스터" className="w-full rounded-md mb-4" />
                <img src={title} alt="타이틀" className="w-full rounded-md mb-4" />
            </div>
          </TicketCard>

          {/* 두 번째 티켓 */}
          <TicketCard className="w-full px-2 py-8 bg-[#F1F1F1]">
            <div className="flex justify-between text-xs mb-2">
                <p>HRTK CINEMA TICKET</p>
                <p>NO.1</p>
            </div>
            <div className="flex flex-col text-sm border border-black">
                <div className="flex px-4 pt-4 pb-2 mt-2">
                    <p className="font-semibold w-[80px]">참가자 모집</p>
                    <p>2025/12/17 - 24</p>
                </div>

                <div className="flex px-4 py-2">
                    <p className="font-semibold w-[80px]">명단 공개</p>
                    <p>2026/1/1</p>
                </div>
              

              <div className="flex px-4 pt-2 pb-4 mb-2">
                <p className="font-semibold w-[80px]">제출 마감</p>
                <p>2026/2/21</p>
              </div>

              <div className="text-center border-t border-black py-6">

                <p className="font-semibold w-[80px]">합작 공개</p>
                <p className="text-2xl font-bold">2025/3/7</p>
              </div>

                <div className="border-t border-black font-bookk italic px-4 py-6 text-center">
                    <p>"A lot of life is dealing with your curse, dealing with the cards you were given that aren't so nice. Does it make you into a monster, or can you temper it in some way, or accept it and go in some other direction?"</p>
                </div>
            </div>

            <div className="text-right text-xs mt-2">
                <p>@hrtk_cinema</p>
            </div>
          </TicketCard>
          <TicketCard className="w-full px-2 py-8">
            <div className="mb-4 text-center">계정 및 안내 사항 링크</div>
            <div>
                <a className="p-2 border border-black w-full h-11 block text-center" href="https://x.com/hrtk_cinema" target='_blank'>트위터 →</a>
            </div>
          </TicketCard>
        </div>
      </div>
    </div>
  )
}

export default Home