// src/data/movies.ts

// 영화 데이터 타입 정의
export interface Movie {
  id: number
  type: 'NOVEL' | 'ILLUSTRATION' | 'COMICS'  // 작품 종류
  author: string                              // 작가명
  titleKo: string                            // 한글 제목
  titleEn: string                            // 영어 제목
  thumbnail: string                          // 썸네일 이미지 URL
  genre: string                              // 장르
  synopsis: string                           // 줄거리
  watchLinks: {                              // 볼 수 있는 사이트들
    name: string
    url: string
  }[]
}

// 영화 데이터 목록
export const movies: Movie[] = [
  {
    id: 1,
    type: 'NOVEL',
    author: '고도',
    titleKo: '가타카',
    titleEn: 'Gattaca',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/gattaca.jpg',
    genre: 'SF, 미스터리',
    synopsis: '유전자 조작이 흔해진 미래, 열성 유전자를 가진 빈센트는 우주비행사를 꿈꾸지만 유전자 탓에 시험에 매번 떨어진다. 우주 항공회사 가타카의 청소부로 일하던 빈센트는 우성 유전자를 가졌지만 사고로 수영선수를 그만둔 유진과 계약하여 가짜 신분을 만들어낸다.',
    watchLinks: [
      { name: '왓챠', url: 'https://watcha.com/contents/mwWLpkW' },
      { name: 'Wavve', url: 'https://www.wavve.com/player/movie?movieid=MV_CF01_SY0000011284' }
    ]
  },
  {
    id: 2,
    type: 'ILLUSTRATION',
    author: '생활연구소',
    titleKo: '윤희에게',
    titleEn: 'Moonlit Winter',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/moonlit-winter.jpg',
    genre: '드라마, 로맨스',
    synopsis: '겨울, 모녀는 단둘이 산다. 고등학생 딸은 우연히 엄마에게 온 편지를 읽고 그녀가 한평생 숨겨온 비밀을 알아챈다. 그렇게 엄마와 딸의 아름다운 여행이 시작된다. 하얗게 눈이 내린 고요한 마을 오타루, 이곳에서 모녀는 화해의 길로 들어서는 한편, 설레는 추억을 쌓아 나간다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81249832' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_C901_SG0000124324' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdR4eyv' }
    ]
  },
  {
    id: 3,
    type: 'ILLUSTRATION',
    author: '아우우',
    titleKo: '미키 17',
    titleEn: 'Mickey 17',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/mickey17.webp',
    genre: 'SF, 모험',
    synopsis: '친구 티모와 함께 차린 가게가 쫄딱 망해 거액의 빚을 지고 사채업자를 피해 지구를 떠나야 하는 미키. 기술이 없는 그는, 정치인 마셜의 얼음행성 개척단에서 위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다.',
    watchLinks: [
    ]
  },
  {
    id: 4,
    type: 'ILLUSTRATION',
    author: '재준',
    titleKo: '인터스텔라',
    titleEn: 'Interstellar',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/interstellar.webp',
    genre: 'SF, 디스토피아',
    synopsis: '세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을 탐험해 인류를 구해야 하는 임무가 주어진다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011422' }
    ]
  },
  {
    id: 5,
    type: 'NOVEL',
    author: '100',
    titleKo: '좀비랜드',
    titleEn: 'Zombieland',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/zombieland.jpg',
    genre: '좀비, 코미디',
    synopsis: '한 청년이 부모님을 만나러 콜럼버스로 향하는 도중 무자비하게 좀비를 죽이는 한 남자를 만난다. 가는 길이 비슷했던 둘은 서로의 목적지를 서로의 이름처럼 부르게 되는데, 잠시 마트에 들렀다가 자신의 동생이 좀비에게 당했다고 말하는 한 소녀를 만나게 된다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CF01_SY0000011159' }
    ]
  },
  {
    id: 6,
    type: 'ILLUSTRATION',
    author: '계란',
    titleKo: '장화, 홍련',
    titleEn: 'A Tale of Two Sisters',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/two-sisters.jpg',
    genre: '공포, 스릴러',
    synopsis: '엄마의 죽음 이후, 집은 어두운 기운에 휩싸여 있다. 두 자매는 반드시 그들을 집에서 몰아내야만 한다. 사악한 새엄마, 그리고 원한을 품은 알 수 없는 존재를.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/70020305' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdj09rW' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000364541' }
    ]
  },
  {
    id: 7,
    type: 'ILLUSTRATION',
    author: '몹',
    titleKo: '이제 그만 끝낼까 해',
    titleEn: 'Im Thinking of Ending Things',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/im-thinking-of.jpg',
    genre: '공포',
    synopsis: '한 여자가 새로 사귄 남자 친구 제이크의 부모님이 계신 농장으로 향한다. 그리고 어딘가 모르게 기이한 그의 어머니와 아버지를 만나고 눈보라에 발이 묶이면서 의문을 품게 된다. 그와 그녀 자신에 대해. 눈앞에 보이는 현실과 이제까지 알고 있고 이해하고 있다고 생각했던 모든 것에 대해.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/80211559' }
    ]
  },
  {
    id: 8,
    type: 'NOVEL',
    author: '익명A',
    titleKo: '블레이드',
    titleEn: 'Blade',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/blade.webp',
    genre: '액션, SF',
    synopsis: '출산을 바로 앞둔 산모가 응급실에 실려온다. 이미 위독한 상황에 있는 산모에게서 뱃속의 아이라도 살리기 위해 응급수술이 시작된다. 그러나 누구도 산모가 뱀파이어에게 물렸다는 사실을 모른다. 산모의 몸 속에 스며든 뱀파이어의 피는 아기의 혈관 속으로 스며들어 아이의 운명을 바꾼다.',
    watchLinks: [
      { name: '웨이브', url: 'wavve.com/player/movie?movieid=MV_CD01_WR0000011139' }
    ]
  },
  {
    id: 9,
    type: 'NOVEL',
    author: '익명B',
    titleKo: '오늘밤, 세계에서 이 사랑이 사라진다해도',
    titleEn: 'Even If This Love Disappears from the World Tonight',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/even-if-this-love.png',
    genre: '로맨스',
    synopsis: '"카미야 토루에 대해 잊지 말 것” 자고 일어나면 전날의 기억을 잃는 ‘선행성 기억상실증’에 걸린 소녀 마오리. 누구에게도 기억되지 않는 무색무취의 평범한 소년 ‘토루’ 매일 밤 사랑이 사라지는 세계. 그럼에도 불구하고, 다음 날 서로를 향한 애틋한 고백을 반복하는 두 소년, 소녀의 가장 슬픈 청춘담',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_MC01_MC000000028' }
    ]
  },
  {
    id: 10,
    type: 'NOVEL',
    author: '람이',
    titleKo: '신과 함께',
    titleEn: 'Along with the Gods',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/with-the-gods.jpg',
    genre: '판타지',
    synopsis: '화재 현장에서 아이를 구하고 죽은 소방관 자홍. 그는 저승차사 혜원맥과 덕춘, 강림과 함께 저승에서 7번 재판을 받고, 그 과정 중 예상치 못한 일들이 벌어진다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/80214451' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CI01_LE0000011216' },
      { name: '왓챠', url: 'https://watcha.com/contents/mWw8zEO' }

    ]
  },
  {
    id: 21,
    type: 'COMICS',
    author: 'YO',
    titleKo: '박쥐',
    titleEn: 'Thirst',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/thirst.jpeg',
    genre: '호러, 로맨스',
    synopsis: '신부 상현은 백신개발 실험에 참여하다가 바이러스에 감염되고, 수수께끼의 피를 수혈받아 살아난 뒤로 피를 갈망하는 뱀파이어가 된다. 상현은 신앙심과 흡혈을 향한 욕망이 사이에서 갈등하던 중 어린시절 친구인 강우와 그의 아내 태주를 만나게 된다.',
    watchLinks: [
      { name: '웨이브', url: 'wavve.com/player/movie?movieid=MV_CD01_WR0000011139' }
    ]
  },
  {
    id: 11,
    type: 'ILLUSTRATION',
    author: '나가',
    titleKo: '해피엔드',
    titleEn: 'Happyend',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/happyend.jpg',
    genre: '재난, SF',
    synopsis: '점멸등이 일렁이는 근미래의 도쿄. 음악에 빠진 고등학생 유타와 코우는 친구들과 함께 자유로운 나날을 보낸다. 동아리방을 찾아 늦은 밤 학교에 잠입한 그들은 교장의 고급 차량에 장난을 치고, 분노한 학교는 AI 감시 체제를 도입한다. 그날 이후 그들을 둘러싼 모든 것이 조금씩 달라지기 시작하는데...',
    watchLinks: [
      { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-49c74be6-0c82-47b8-9a33-06559e4a2079?irclickid=x3jWeDXnSxycT9g1SFTE11p5UkpVqY0kxSEeXk0&campaignId=9358&irgwc=1&afsrc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0301000d-19b7-4346-8f00-080f6953e704' }
    ]
  },
  {
    id: 22,
    type: 'NOVEL',
    author: '후추',
    titleKo: '더 기버 : 기억전달자',
    titleEn: 'The Giver',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/the-giver.jpg',
    genre: 'SF, 스릴러',
    synopsis: '가난과 차별이 존재하지 않는 커뮤니티에서 살던 조너스는 수여식에서 기억 보유자의 직위를 부여받는다. 선대 기억 전달자와의 훈련을 통해 제거된 과거를 배운 조너스는 모순이 가득한 커뮤니티를 탈출하기로 한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_LX01_LX0000000884' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdKB7PJ' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000295333' }
    ]
  },
  {
    id: 12,
    type: 'NOVEL',
    author: '매리',
    titleKo: '뷰티 인사이드',
    titleEn: 'The Beauty Inside',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/beauty-inside.jpg',
    genre: '로맨스',
    synopsis: '자고 일어나면 겉모습이 매일 다른 사람으로 변하는 우진. 무덤덤하게 새로운 얼굴로 하루하루를 맞이하던 어느 날, 우연히 만난 이수와 사랑에 빠진 그는 난생처음 자신의 비밀을 털어놓기로 결심한다.',
    watchLinks: [
      { name: '왓챠', url: 'https://watcha.com/contents/mWqJnGr' },
      { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-c41a12d5-3def-4b49-a45d-1c49e7fab63f?irclickid=XOBSU3XlGxycWTwTPhUiFyWiUkpVvAUgXzJ02Q0&campaignId=9358&irgwc=1&afsrc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0f010015-3af2-43ca-b700-215969538f85' }

    ]
  },
  {
    id: 13,
    type: 'NOVEL',
    author: '걸신',
    titleKo: '베드타임 스토리',
    titleEn: 'Bedtime Stories',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/bedtime-stories.jpg',
    genre: '코미디, 가족',
    synopsis: '어느날 갑자기 당신이 벤허의 주인공이 되어 콜로세움을 질주하고, 서부개척시대에 미녀를 사로잡는 로맨틱한 카우보이가 되고, 또 우주에서 무중력 속의 결투를 벌이는 투사도 될 수 있다면? 그야말로 시공을 초월해 상상하는 모든 것이 현실이 되는 마법같은 1주일이 펼쳐진다면... 당신은 무엇을 이루고 싶습니까?',
    watchLinks: [
      { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-75cceb6f-2cee-4807-bc3d-c6b0a0646cd2?irclickid=XOBSU3XlGxycWTwTPhUiFyWiUkpVvAWAXzJ02Q0&campaignId=9358&irgwc=1&afsrc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=08010008-adb6-4cf1-9200-243169538fa7' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CA01_DY0000011128' }

    ]
  },
  {
    id: 23,
    type: 'NOVEL',
    author: '공명정대',
    titleKo: '화양연화',
    titleEn: 'In the Mood for Love',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/mood-for-love.webp',
    genre: '로맨스',
    synopsis: '홍콩의 지역 신문 편집장인 초 모완, 수출회사의 비서로 근무하는 수 리첸. 둘은 상하이의 한 건물로 같은 날 이사하게 된다. 이사 날부터 자주 부딪히게 되는 두 사람. 둘 다 가정이 있지만 어쩐지 배우자들은 자리를 비우는 날이 더 많고 두 사람의 외로움은 서로에게 낯설지 않게 다가와 가깝게 한다. 감정이 깊어질수록 예견된 이별 앞에 마음이 혼란스럽다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81580523' },
      { name: '왓챠', url: 'https://watcha.com/contents/my5YK3O' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CX01_CX0000011505' }

    ]
  },
  {
    id: 14,
    type: 'ILLUSTRATION',
    author: '아개무리',
    titleKo: '해리포터',
    titleEn: 'Harry Potter',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/harrypoter.jpg',
    genre: '액션, 판타지',
    synopsis: '해리 포터에겐 이번 여름방학이 별로 즐겁질 못했다. 마법이라면 질색을 하는 페투니아 이모와 버논 이모부의 구박도 그렇지만, 무엇보다 속상한 건 단짝이었던 론 위즐리와 헤르미온느 그레인저가 그 사이 자신을 까맣게 잊었는지 자신의 편지에 답장 한 통 없다는 것. 그러던 어느날 꼬마 집요정 도비가 해리의 침실에 나타나 뜻밖의 얘기를 한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011244' }
    ]
  },
  {
    id: 15,
    type: 'COMICS',
    author: '익명C',
    titleKo: '콘스탄틴',
    titleEn: 'Constantine',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/Constantine.jpg',
    genre: '판타지',
    synopsis: '콘스탄틴은 천국과 지옥을 넘나들며 세상의 악을 지옥으로 돌려보낸다. 어느 날, 전투에 지친 콘스탄틴에게 형사 안젤라가 찾아와 동생의 죽음에 대한 의문을 풀기 위한 도움을 요청한다.',
    watchLinks: [
      { name: '웨이브', url: 'wavve.com/player/movie?movieid=MV_CD01_WR0000011139' },
      { name: '왓챠', url: 'https://watcha.com/contents/mBOk7jO' }

    ]
  },
  {
    id: 16,
    type: 'ILLUSTRATION',
    author: '마봄',
    titleKo: '어바웃 타임',
    titleEn: 'About Time',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/about-time.webp',
    genre: '판타지, 로맨스',
    synopsis: '아버지에게 가문 대대로 시간을 돌리는 능력을 타고났다는 사실을 들은 팀. 우연히 만난 메리에게 반한 팀은 완벽한 사랑을 위해 능력을 마음껏 사용하고, 그럴 때마다 주변 상황들이 점점 어긋나기 시작한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CG01_NU0000011177' },
      { name: '왓챠', url: 'https://watcha.com/contents/mO2x9k5' }

    ]
  },
  {
    id: 17,
    type: 'NOVEL',
    author: '뵤뵤',
    titleKo: '넥스트',
    titleEn: 'Next',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/next.jpg',
    genre: 'SF, 스릴러',
    synopsis: '라스베가스의 마술사 크리스 존슨. 그는 2분 후의 미래를 볼 수 있는 아주 특별한 능력을 갖고 있지만, 가급적 드러내지 않고 조용히 지내려 한다. 그러던 어느 날, 카지노에서 총기강도 사건을 예견하고, 사고를 방지하려다가 도리어 총기강도 사건에 휘말린다.',
    watchLinks: [
    ]
  },
  {
    id: 18,
    type: 'ILLUSTRATION',
    author: '마도',
    titleKo: '인셉션',
    titleEn: 'Inception',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/inception.jpg',
    genre: '액션, SF',
    synopsis: '타인의 꿈에 들어가 생각을 훔칠 수 있는 가까운 미래. 꿈의 보안 프로그래머 코브는 기업 합병을 저지하려는 사업가 사이토의 의뢰로 기업의 총수가 될 피셔의 꿈을 설계하고 침투한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011261' },
      { name: '왓챠', url: 'https://watcha.com/contents/mW4L2XW' }

    ]
  },
  {
    id: 19,
    type: 'NOVEL',
    author: '슈므',
    titleKo: '스타트렉',
    titleEn: 'Star Trek',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/star-trek.png',
    genre: '액션, SF',
    synopsis: '거대한 에너지를 가진 미지의 물체가 지구로 다가오는 것이 포착된다. 마치 블랙홀처럼 주변의 모든 것을 빨아들이면서 지구로 다가오는 이 미지의 물체를 막기 위해 일선에서 물러나있던 커크 선장이 돌아온다. 후임 선장인 덱커와 충돌을 빚으며 엔터프라이즈호를 지휘하던 커크 선장은 마침내 물체의 비밀을 밝혀낸다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CQ01_PT0000011179' }
    ]
  },
  {
    id: 20,
    type: 'ILLUSTRATION',
    author: '계란/생활연구소/아우우',
    titleKo: '헤어질 결심',
    titleEn: 'Decision to Leave',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/decision-leave.jpg',
    genre: '액션, SF',
    synopsis: '형사 해준은 추락사고 사망자의 아내 서래가 일반적인 유가족과 다른 반응을 보이자, 그를 용의선상에 올린다. 해준은 서래에 대해 조사하며 관심이 커지고, 서래도 해준을 거절하지 않는다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81646755' },
      { name: '왓챠', url: 'https://watcha.com/contents/m5DP0eR' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000368649' }
    ]
  },
]