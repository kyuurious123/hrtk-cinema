// src/data/movies.ts
export type IllustrationImage = {
  src: string
  width?: string
}

export type IllustrationContent = {
  kind: 'illustration'
  imageUrl: string | string[] | IllustrationImage[]
  hoverImageUrl?: string
  width?: string
  backgroundUrl?: string
}

export type ComicsContent       = { kind: 'comics'; pages: string[] }
export type NovelContent        = { kind: 'novel'; mdPath: string } // .md 파일 경로
export type MovieContent        = NovelContent | IllustrationContent | ComicsContent

export interface Movie {
  id: number
  type: 'NOVEL' | 'ILLUSTRATION' | 'COMICS'
  author: string
  titleKo: string
  titleEn: string
  title: string
  thumbnail: string
  genre: string
  synopsis: string
  watchLinks: { name: string; url: string }[]
  content: MovieContent
  passwordHint?: string

}


export const movies: Movie[] = [
  {
    id: 1,
    type: 'NOVEL',
    author: '고도',
    titleKo: '가타카',
    titleEn: 'Gattaca',
    title: '증명',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/gattaca.webp',
    genre: 'SF, 미스터리',
    synopsis: '유전자 조작이 흔해진 미래, 열성 유전자를 가진 빈센트는 우주비행사를 꿈꾸지만 유전자 탓에 시험에 매번 떨어진다. 우주 항공회사 가타카의 청소부로 일하던 빈센트는 우성 유전자를 가졌지만 사고로 수영선수를 그만둔 유진과 계약하여 가짜 신분을 만들어낸다.',
    watchLinks: [
      { name: '왓챠', url: 'https://watcha.com/contents/mwWLpkW' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CF01_SY0000011284' },
    ],
    content: { kind: 'novel', mdPath: 'gattaca' },
  },
  {
    id: 2,
    type: 'ILLUSTRATION',
    author: '생활연구소',
    titleKo: '윤희에게',
    titleEn: 'Moonlit Winter',
    title: '윤희에게',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/moonlit-winter.webp',
    genre: '드라마, 로맨스',
    synopsis: '겨울, 모녀는 단둘이 산다. 고등학생 딸은 우연히 엄마에게 온 편지를 읽고 그녀가 한평생 숨겨온 비밀을 알아챈다. 그렇게 엄마와 딸의 아름다운 여행이 시작된다. 하얗게 눈이 내린 고요한 마을 오타루, 이곳에서 모녀는 화해의 길로 들어서는 한편, 설레는 추억을 쌓아 나간다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81249832' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_C901_SG0000124324' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdR4eyv' },
    ],
    content: {
      kind: 'illustration',
      imageUrl: [
        { src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/moonlit-winter.webp', width : '45%'}],
    },
  },
  {
    id: 3,
    type: 'ILLUSTRATION',
    author: '아우우',
    titleKo: '미키 17',
    titleEn: 'Mickey 17',
    title: '미키 17',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/mickey17.webp',
    genre: 'SF, 모험',
    synopsis: '친구 티모와 함께 차린 가게가 쫄딱 망해 거액의 빚을 지고 사채업자를 피해 지구를 떠나야 하는 미키. 기술이 없는 그는, 정치인 마셜의 얼음행성 개척단에서 위험한 일을 도맡고, 죽으면 다시 프린트되는 익스펜더블로 지원한다.',
    watchLinks: [],
    content: { kind: 'illustration', 
      imageUrl: [
        {src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/mickey17.gif', width: '45%' }]
      },
  },
  {
    id: 4,
    type: 'ILLUSTRATION',
    author: '재준',
    titleKo: '인터스텔라',
    titleEn: 'Interstellar',
    title: '인터스텔라',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/interstellar.webp',
    genre: 'SF, 디스토피아',
    synopsis: '세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을 탐험해 인류를 구해야 하는 임무가 주어진다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011422' },
    ],
    content: { kind: 'illustration', imageUrl: 
      [ { src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/interstellar.webp', width : '45%' } ]},
  },
  // {
  //   id: 5,
  //   type: 'NOVEL',
  //   author: '100',
  //   titleKo: '좀비랜드',
  //   titleEn: 'Zombieland',
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/zombieland.webp',
  //   genre: '좀비, 코미디',
  //   synopsis: '한 청년이 부모님을 만나러 콜럼버스로 향하는 도중 무자비하게 좀비를 죽이는 한 남자를 만난다.',
  //   watchLinks: [
  //     { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CF01_SY0000011159' },
  //   ],
  //   content: { kind: 'novel', mdPath: 'zombieland' },
  // },
  {
    id: 6,
    type: 'ILLUSTRATION',
    author: '계란',
    titleKo: '장화, 홍련',
    titleEn: 'A Tale of Two Sisters',
    title: '장화, 홍련',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/two-sisters.webp',
    genre: '공포, 스릴러',
    synopsis: '엄마의 죽음 이후, 집은 어두운 기운에 휩싸여 있다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/70020305' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdj09rW' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000364541' },
    ],

    content: {
      kind: 'illustration',
      imageUrl: 'https://raw.githubusercontent.com/kyuurious123/movie-image/main/illust/two-sisters01.webp',
      hoverImageUrl: 'https://github.com/kyuurious123/movie-image/raw/main/illust/two-sisters02.webp',
      backgroundUrl: 'https://github.com/kyuurious123/movie-image/raw/main/illust/bg.webp',
      width: '30vw',
    },
  },
  {
    id: 7,
    type: 'ILLUSTRATION',
    author: '몹',
    titleKo: '이제 그만 끝낼까 해',
    titleEn: "I'm Thinking of Ending Things",
    title: '이제 그만 끝낼까 해',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/im-thinking-of.webp',
    genre: '공포',
    synopsis: '한 여자가 새로 사귄 남자 친구 제이크의 부모님이 계신 농장으로 향한다. 그리고 어딘가 모르게 기이한 그의 어머니와 아버지를 만나고 눈보라에 발이 묶이면서 의문을 품게 된다. 그와 그녀 자신에 대해. 눈앞에 보이는 현실과 이제까지 알고 있고 이해하고 있다고 생각했던 모든 것에 대해.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/80211559' },
    ],
    content: {
      kind: 'illustration', 
      imageUrl: [
        { src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/im-thinking-of.webp', width: '90vw' }
      ]
    }
  },
  {
    id: 8,
    type: 'NOVEL',
    author: '익명',
    titleKo: '블레이드',
    titleEn: 'Blade',
    title: 'Skating Uphill',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/blade.webp',
    genre: '액션, SF',
    synopsis: '출산을 바로 앞둔 산모가 응급실에 실려온다. 이미 위독한 상황에 있는 산모에게서 뱃속의 아이라도 살리기 위해 응급수술이 시작된다. 그러나 누구도 산모가 뱀파이어에게 물렸다는 사실을 모른다. 산모의 몸 속에 스며든 뱀파이어의 피는 아기의 혈관 속으로 스며들어 아이의 운명을 바꾼다.',
    watchLinks: [
      { name: '웨이브', url: 'https://wavve.com/player/movie?movieid=MV_CD01_WR0000011139' },
    ],
    content: { kind: 'novel', mdPath: 'blade' },
    passwordHint: 'https://url.kr/o2ws7x 링크의 ISBN 끝 4자리',
  },
  // {
  //   id: 9,
  //   type: 'NOVEL',
  //   author: '익명B',
  //   titleKo: '오늘밤, 세계에서 이 사랑이 사라진다해도',
  //   titleEn: 'Even If This Love Disappears from the World Tonight',
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/even-if-this-love.png',
  //   genre: '로맨스',
  //   synopsis: '"카미야 토루에 대해 잊지 말 것" 자고 일어나면 전날의 기억을 잃는 선행성 기억상실증에 걸린 소녀 마오리.',
  //   watchLinks: [
  //     { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_MC01_MC000000028' },
  //   ],
  //   content: { kind: 'novel', mdPath: 'even-if-this-love' },
  // },
  // {
  //   id: 10,
  //   type: 'NOVEL',
  //   author: '람이',
  //   titleKo: '신과 함께',
  //   titleEn: 'Along with the Gods',
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/with-the-gods.webp',
  //   genre: '판타지',
  //   synopsis: '화재 현장에서 아이를 구하고 죽은 소방관 자홍.',
  //   watchLinks: [
  //     { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/80214451' },
  //     { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CI01_LE0000011216' },
  //     { name: '왓챠', url: 'https://watcha.com/contents/mWw8zEO' },
  //   ],
  //   content: { kind: 'novel', mdPath: 'along-with-the-gods' },
  // },
  {
    id: 11,
    type: 'ILLUSTRATION',
    author: '나가',
    titleKo: '해피엔드',
    titleEn: 'Happyend',
    title: '해피엔드',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/happyend.webp',
    genre: '재난, SF',
    synopsis: '점멸등이 일렁이는 근미래의 도쿄. 음악에 빠진 고등학생 유타와 코우는 친구들과 함께 자유로운 나날을 보낸다. 동아리방을 찾아 늦은 밤 학교에 잠입한 그들은 교장의 고급 차량에 장난을 치고, 분노한 학교는 AI 감시 체제를 도입한다. 그날 이후 그들을 둘러싼 모든 것이 조금씩 달라지기 시작하는데...',
    watchLinks: [
      { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-49c74be6-0c82-47b8-9a33-06559e4a2079' },
    ],
    content: { 
      kind: 'illustration', 
      imageUrl: [ { src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/happyend.webp', width: '45%'}]
    },
  },
  {
    id: 12,
    type: 'NOVEL',
    author: '매리',
    titleKo: '뷰티 인사이드',
    titleEn: 'The Beauty Inside',
    title: 'Time to',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/beauty-inside.webp',
    genre: '로맨스',
    synopsis: '자고 일어나면 겉모습이 매일 다른 사람으로 변하는 우진. 무덤덤하게 새로운 얼굴로 하루하루를 맞이하던 어느 날, 우연히 만난 이수와 사랑에 빠진 그는 난생처음 자신의 비밀을 털어놓기로 결심한다.',
    watchLinks: [
      { name: '왓챠', url: 'https://watcha.com/contents/mWqJnGr' },
      { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-c41a12d5-3def-4b49-a45d-1c49e7fab63f' },
    ],
    content: { kind: 'novel', mdPath: 'beauty-inside' },
  },
  // {
  //   id: 13,
  //   type: 'NOVEL',
  //   author: '걸신',
  //   titleKo: '베드타임 스토리',
  //   titleEn: 'Bedtime Stories',
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/bedtime-stories.webp',
  //   genre: '코미디, 가족',
  //   synopsis: '어느날 갑자기 당신이 벤허의 주인공이 되어 콜로세움을 질주한다면.',
  //   watchLinks: [
  //     { name: '디즈니+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-75cceb6f-2cee-4807-bc3d-c6b0a0646cd2' },
  //     { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CA01_DY0000011128' },
  //   ],
  //   content: { kind: 'novel', mdPath: 'bedtime-stories' },
  // },
  {
    id: 14,
    type: 'ILLUSTRATION',
    author: '아개무리',
    titleKo: '해리포터',
    titleEn: 'Harry Potter',
    title: '해리포터',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/harrypoter.webp',
    genre: '판타지, 액션',
    synopsis: '친척집에서 구박받는 생활을 하던 해리는 11살 생일을 앞두고 호그와트 마법학교로부터 입학초대장을 받고 자신이 마법사라는 사실을 알게 된다. 해리는 호그와트 마법학교로 가는 열차에서 친구 론, 헤르미온느를 사귀고 마법, 신비, 모험으로 가득한 학교생활을 시작한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011244' },
    ],
    content: { kind: 'illustration', 
      imageUrl: [
        { src : 'https://github.com/kyuurious123/movie-image/raw/main/illust/harrypoter.webp', width : '90%' }
      ]
      },
  },
  {
    id: 15,
    type: 'COMICS',
    author: '익명C',
    titleKo: '콘스탄틴',
    titleEn: 'Constantine',
    title: '콘스탄틴',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/constantine.webp',
    genre: '판타지',
    synopsis: '콘스탄틴은 천국과 지옥을 넘나들며 세상의 악을 지옥으로 돌려보낸다. 어느 날, 전투에 지친 콘스탄틴에게 형사 안젤라가 찾아와 동생의 죽음에 대한 의문을 풀기 위한 도움을 요청한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://wavve.com/player/movie?movieid=MV_CD01_WR0000011139' },
      { name: '왓챠', url: 'https://watcha.com/contents/mBOk7jO' },
    ],
    content: {
      kind: 'comics',
      pages: [
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/005.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/006.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/007.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/008.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/009.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/010.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/011.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/012.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/013.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/014.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/015.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/016.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/017.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/018.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/019.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/020.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/021.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/022.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/023.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/024.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/025.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/026.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/027.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/028.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/029.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/030.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/031.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/032.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/033.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/034.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/035.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/036.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/037.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/038.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/039.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/040.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/041.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/042.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/043.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/contantine/044.webp',
      ],
    },
  },
  {
    id: 16,
    type: 'ILLUSTRATION',
    author: '마봄',
    titleKo: '어바웃 타임',
    titleEn: 'About Time',
    title: '어바웃 타임',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/about-time.webp',
    genre: '판타지, 로맨스',
    synopsis: '아버지에게 가문 대대로 시간을 돌리는 능력을 타고났다는 사실을 들은 팀. 우연히 만난 메리에게 반한 팀은 완벽한 사랑을 위해 능력을 마음껏 사용하고, 그럴 때마다 주변 상황들이 점점 어긋나기 시작한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CG01_NU0000011177' },
      { name: '왓챠', url: 'https://watcha.com/contents/mO2x9k5' },
    ],
    content: { kind: 'illustration', 
      imageUrl: [
        { src :'https://github.com/kyuurious123/movie-image/raw/main/illust/about-time.webp', width : '45%' }]

        },
  },
  {
    id: 17,
    type: 'NOVEL',
    author: '뵤뵤',
    titleKo: '넥스트',
    titleEn: 'Next',
    title: '넥스트',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/next2.webp',
    genre: 'SF, 스릴러',
    synopsis: '라스베가스의 마술사 크리스 존슨. 그는 2분 후의 미래를 볼 수 있는 아주 특별한 능력을 갖고 있지만, 가급적 드러내지 않고 조용히 지내려 한다. 그러던 어느 날, 카지노에서 총기강도 사건을 예견하고, 사고를 방지하려다가 도리어 총기강도 사건에 휘말린다.',
    watchLinks: [],
    content: { kind: 'novel', mdPath: 'next' },
  },
  // {
  //   id: 18,
  //   type: 'ILLUSTRATION',
  //   author: '마도',
  //   titleKo: '인셉션',
  //   titleEn: 'Inception',
  //   title:
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/inception.webp',
  //   genre: '액션, SF',
  //   synopsis: '타인의 꿈에 들어가 생각을 훔칠 수 있는 가까운 미래.',
  //   watchLinks: [
  //     { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CD01_WR0000011261' },
  //     { name: '왓챠', url: 'https://watcha.com/contents/mW4L2XW' },
  //   ],
  //   content: { kind: 'illustration', imageUrl: '/images/illustration/inception.webp' },
  // },
  {
    id: 19,
    type: 'NOVEL',
    author: '슈므',
    titleKo: '스타트렉: 더 비기닝',
    titleEn: 'Star Trek',
    title: '언제나 내가 제일로 사랑하는건 바로 너란다.',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/star-trek2.webp',
    genre: '액션, SF',
    synopsis: '우주를 항해하던 켈빈호 앞에 정체불명의 함선이 나타나 공격한다. 커크는 자신을 희생해 선원들을 구한다. 혼돈의 그날 태어난 아들 제임스 커크. 방황하던 커크는 파이크 함장의 조언을 듣고 스타플릿에 입대한다. 아버지의 뒤를 잇기 위해 아카데미에서 훈련을 받게 되는데.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CQ01_PT0000011179' },
    ],
    content: { kind: 'novel', mdPath: 'star-trek' },
  },
  {
    id: 20,
    type: 'ILLUSTRATION',
    author: '계란/생활연구소/아우우',
    titleKo: '헤어질 결심',
    titleEn: 'Decision to Leave',
    title: '헤어질 결심',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/decision-leave.webp',
    genre: '드라마, 로맨스',
    synopsis: '형사 해준은 추락사고 사망자의 아내 서래가 일반적인 유가족과 다른 반응을 보이자, 그를 용의선상에 올린다. 해준은 서래에 대해 조사하며 관심이 커지고, 서래도 해준을 거절하지 않는다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81646755' },
      { name: '왓챠', url: 'https://watcha.com/contents/m5DP0eR' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000368649' },
    ],

    content: {
      kind: 'illustration',
      imageUrl:[
        'https://github.com/kyuurious123/movie-image/raw/main/illust/decision-leave-poster.webp?',
        'https://github.com/kyuurious123/movie-image/raw/main/illust/decision-leave01.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/illust/decision-leave02.webp',
        'https://github.com/kyuurious123/movie-image/raw/main/illust/decision-leave03.webp'

      ]
     },
    },
  // {
  //   id: 21,
  //   type: 'COMICS',
  //   author: 'YO',
  //   titleKo: '박쥐',
  //   titleEn: 'Thirst',
  //   thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/thirst2.jpeg',
  //   genre: '호러, 로맨스',
  //   synopsis: '신부 상현은 백신개발 실험에 참여하다가 바이러스에 감염되고 뱀파이어가 된다.',
  //   watchLinks: [
  //     { name: '웨이브', url: 'https://wavve.com/player/movie?movieid=MV_CD01_WR0000011139' },
  //   ],
  //   content: {
  //     kind: 'comics',
  //     pages: [
  //       '/images/comics/thirst/page-01.webp',
  //       '/images/comics/thirst/page-02.webp',
  //     ],
  //   },
  // },
  {
    id: 22,
    type: 'NOVEL',
    author: '후추',
    titleKo: '더 기버 : 기억전달자',
    titleEn: 'The Giver',
    title: '기억 혁명',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/the-giver.webp',
    genre: 'SF, 스릴러',
    synopsis: '가난과 차별이 존재하지 않는 커뮤니티에서 살던 조너스는 수여식에서 기억 보유자의 직위를 부여받는다. 선대 기억 전달자와의 훈련을 통해 제거된 과거를 배운 조너스는 모순이 가득한 커뮤니티를 탈출하기로 한다.',
    watchLinks: [
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_LX01_LX0000000884' },
      { name: '왓챠', url: 'https://watcha.com/contents/mdKB7PJ' },
      { name: '티빙', url: 'https://www.tving.com/contents/M000295333' },
    ],
    content: { kind: 'novel', mdPath: 'the-giver' },
  },
  {
    id: 23,
    type: 'NOVEL',
    author: '공명정대',
    titleKo: '화양연화',
    titleEn: 'In the Mood for Love',
    title: '정재불구(情在不久)',
    thumbnail: 'https://github.com/kyuurious123/movie-image/raw/main/mood-for-love.webp',
    genre: '로맨스',
    synopsis: '1962년 홍콩, 한 아파트에 같은 날 두 쌍의 부부가 이사온다. 우연히 계속 마주치던 차우와 첸 부인은 서로의 배우자가 사랑에 빠졌다는 사실을 눈치채고, 서로를 의식하기 시작한다. 비밀스러운 만남에 궁금함을 느낀 차우와 첸 부인 역시 둘만의 만남을 가지기 시작한다. 서로에게 적당한 거리를 두려고 하지만 그 시도는 실패하기만 하고, 마음은 깊어져만 간다.',
    watchLinks: [
      { name: '넷플릭스', url: 'https://www.netflix.com/kr/title/81580523' },
      { name: '왓챠', url: 'https://watcha.com/contents/my5YK3O' },
      { name: '웨이브', url: 'https://www.wavve.com/player/movie?movieid=MV_CX01_CX0000011505' },
    ],
    content: { kind: 'novel', mdPath: 'in-the-mood-for-love' },
  },
]
