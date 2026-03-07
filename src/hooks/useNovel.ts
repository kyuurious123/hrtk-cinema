// src/hooks/useNovel.ts
import { useState, useEffect, type ComponentType } from 'react'

// Vite glob: src/content/novels/ 의 모든 .mdx를 React 컴포넌트로 가져옴
const novels = import.meta.glob<{ default: ComponentType }>(
  '../content/novels/*.mdx'
)

export function useNovel(mdPath: string) {
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(false)

  useEffect(() => {
    const key = `../content/novels/${mdPath}.mdx`
    const loader = novels[key]

    if (!loader) {
      setError(true)
      setLoading(false)
      return
    }

    loader()
      .then((mod) => {
        setComponent(() => mod.default)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [mdPath])

  return { Component, loading, error }
}
