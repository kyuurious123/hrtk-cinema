
import type { ReactNode } from 'react'


export const p = ({ children }: { children: ReactNode }) => (
  <p className="text-[17px] text-[#eaeaeb] leading-[1.8] mb-6 tracking-tight">{children}</p>
)

export const strong = ({ children }: { children: ReactNode }) => (
  <strong className="font-bold">{children}</strong>
)

export const em = ({ children }: { children: ReactNode }) => (
  <em className="italic">{children}</em>
)

export const hr = () => (
  <div className="my-8 flex justify-center">
    <img src="https://github.com/kyuurious123/movie-image/raw/main/divider.png" alt="" />
  </div>
)
// ── 커스텀 컴포넌트 — .mdx 파일 안에서 바로 사용 ──────

/** 명조체 (Georgia) */
export const Serif = ({ children }: { children: ReactNode }) => (
  <span style={{ fontFamily: 'BookkMyungjo, serif' }}>{children}</span>
)

/** 고딕체 (sans-serif) */
export const Gothic = ({ children }: { children: ReactNode }) => (
  <span style={{ fontFamily: 'sans-serif' }}>{children}</span>
)

/** 작게 */
export const Small = ({ children }: { children: ReactNode }) => (
  <span className="text-sm">{children}</span>
)

/** 강조 (붉은색) */
export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-red-400 font-semibold">{children}</span>
)

/** 인용 블록 */
export const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-2 border-white/20 pl-4 my-6 text-gray-400 italic leading-relaxed">
    {children}
  </blockquote>
)

/** 가운데 정렬 */
export const Center = ({ children }: { children: ReactNode }) => (
  <div className="text-center my-4">{children}</div>
)

/** 여백 추가 */
export const Spacer = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const h = { sm: 'h-4', md: 'h-8', lg: 'h-16' }[size]
  return <div className={h} />
}
