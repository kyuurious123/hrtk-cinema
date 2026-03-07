// src/mdx.d.ts
// TypeScript가 .mdx 파일을 React 컴포넌트로 인식하게 해줌
declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const Component: ComponentType
  export default Component
}
