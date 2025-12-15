import TicketCard from '../components/TicketCard'

function Notice() {
  return (
    <div className="min-h-screen px-5 py-8 bg-[#1d1a1a] text-gray-900 leading-7">
      <div className="max-w-full md:max-w-[400px] mx-auto">
        
        <div>
          <TicketCard className="w-full py-10 px-2">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg text-center">합작 일정</h3>
              <div className="flex flex-col gap-1">
                <div className="flex">
                    <p className="font-semibold w-[90px]">참가자 모집</p>
                    <p>2025/12/17(수) - 24(수)</p>
                </div>
                <div className="flex">
                    <p className="font-semibold w-[90px]">명단 공개</p>
                    <p>2026/1/1(목)</p>
                </div>
                <div className="flex">
                    <p className="font-semibold w-[90px]">제출 마감</p>
                    <p>2026/2/21(토)</p>
                </div>
                <div className="flex">
                    <p className="font-semibold w-[90px]">합작 공개</p>
                    <p>2026/3/7(토)</p>
                </div>

              </div>
            </div>
          </TicketCard>
          <TicketCard className="w-full py-10 px-2">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-center">영화 합작이란?</h3>
                    <p>특정 영화의 세계관, 설정 등을 빌려온 AU / 포스터, 장면 패러디 등을 주제로 한 합작입니다.</p>

                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-center">참가 가능 영화의 기준</h3>
                    <div className="flex flex-col gap-2">
                        <p>실재하는 작품일 것. 로맨스, 공포, 스릴러, 코미디 등 청소년관람불가 등급을 포함해 영화의 장르는 관계 없이 신청 가능합니다.</p>
                        <p>다만 논란을 방지하기 위해 <span className="font-semibold">1.수입되지 않은 영화 / 2.성인용 포르노 영화 / 3.제한상영가 영화</span> 의 참가를 금지합니다.</p>
                        <p>청소년관람불가 등급 영화를 신청하신 경우, 주최측에서 포스타입 등 외부 사이트를 통한 성인 인증을 요청할 수 있습니다.</p>
                    </div>
                    

                </div>
            </div>
          </TicketCard>
          <TicketCard className="w-full py-10 px-2">
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg text-center">진행 방식</h3>
                <ul className="marker:neutral-500 list-disc list-inside flex flex-col gap-2">
                    <li>모집 일시에 구글 폼을 통해 신청 후, 제출 마감일까지 주최의 이메일로 작업물을 제출합니다.</li>
                    <li>특정 영화에 인원이 몰리는 경우를 방지하기 위해, 영화 당 최대 2작품으로 참가를 제한합니다. 신청 시 1지망, 2지망 영화를 선택할 수 있습니다.<p className="text-gray-400">e.g. 척안의 잔상 글 1인, 그림 1인 (가능O) 척안의 잔상 글 2인, 그림 1인 (불가능X, 후에 신청한 분은 2지망 작품으로 배정)</p></li>
                    <li>폼 내에서 1지망, 2지망 작품을 함께 접수받으며 1지망 영화가 선착순 마감되었을 경우, 2지망으로 작성해주신 영화로 접수를 진행합니다. 이 경우에는 이메일 등으로 별도 안내 드릴 예정입니다.</li>
                    <li>1인당 신청 개수 제한은 없습니다.</li>
                    <li>익명 신청 가능합니다.</li>
                    
                </ul>
            </div>
          </TicketCard>
          <TicketCard className="w-full py-10 px-2">
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg text-center">모집 분야 및 제출 형식</h3>
                <div className="mb-4">
                    <p className="font-semibold mb-1">글</p>
                    <ul className="marker:neutral-500 list-disc list-inside flex flex-col">
                        <li>공백 포함 5000자 이상</li>
                        <li>구분자, 인용, 손글씨 폰트, 메세지 형식 등 필요한 스타일이 있을 경우 별도 기재</li>
                        <li>제출 형식: HWP, DOCX, TXT 텍스트 형식의 파일</li>
                    </ul>

                </div>
                <div className="mb-4">
                    <p className="font-semibold mb-1">일러스트</p>
                    <ul className="marker:neutral-500 list-disc list-inside flex flex-col">
                        <li>사이즈 자유, 최소 72dpi 이상</li>
                        <li>컬러, 흑백 가능 (러프 불가)</li>
                        <li>제출 형식: JPG, JPEG, PNG 이미지 파일</li>
                    </ul>

                </div>
                <div className="mb-4">
                    <p className="font-semibold mb-1">애니메이션</p>
                    <ul className="marker:neutral-500 list-disc list-inside flex flex-col">
                        <li>최소분량 없음</li>
                        <li>제출 형식: GIF, MP4 등 영상 파일</li>
                    </ul>

                </div>
                <div>
                    <p className="font-semibold mb-1">만화</p>
                    <ul className="marker:neutral-500 list-disc list-inside flex flex-col">
                        <li>4컷 이상, 최소 72dpi 이상</li>
                        <li>컬러, 흑백 가능 (러프 불가)</li>
                        <li>페이지 넘기기 또는 스크롤 방식 선택 가능</li>
                        <li>제출 형식: JPG, JPEG, PNG 이미지 파일</li>
                    </ul>

                </div>
            </div>
          </TicketCard>
          <TicketCard className="w-full py-10 px-2">
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg text-center">기타 문의사항</h3>
                <p>문의/요청은 트위터 계정(<a className="underline" href="https://x.com/hrtk_cinema" target="_blank">@hrtk_cinema</a>)으로 DM 부탁드립니다.</p>
                <p>문의에 대한 답변은 개별 회신 후, 이 영역 아래로 추가됩니다.</p>
            </div>
          </TicketCard>
        </div>
      </div>
    </div>
  )
}

export default Notice