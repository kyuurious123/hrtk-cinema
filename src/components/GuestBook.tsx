// src/components/GuestBook.tsx
// npm install bcryptjs @types/bcryptjs
import { useState, useEffect } from 'react'
import bcrypt from 'bcryptjs'
import {
  collection, addDoc, deleteDoc, doc,
  onSnapshot, orderBy, query,
  serverTimestamp, type Timestamp,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

interface GuestEntry {
  id: string
  nickname: string
  message: string
  passwordHash: string
  createdAt: Timestamp | null
}

// ── 관리자 비밀번호 ───────────────────────────────────────
// 실제 비밀번호는 .env.local 에 보관
// VITE_ADMIN_PASSWORD=원하는비밀번호
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string
// ─────────────────────────────────────────────────────────

// ── 금칙어 목록 ───────────────────────────────────────────
const BANNED_WORDS = [
  '시발', '씨발', 'ㅅㅂ', '개새끼', '병신', 'ㅂㅅ',
  '지랄', '미친놈', '미친년', '꺼져', '죽어',
  '보지', '자지', '섹스', '씹',
]
function containsBannedWord(text: string): boolean {
  const normalized = text.replace(/\s/g, '').toLowerCase()
  return BANNED_WORDS.some((w) => normalized.includes(w))
}
// ─────────────────────────────────────────────────────────

export default function GuestBook() {
  const [entries, setEntries]     = useState<GuestEntry[]>([])
  const [nickname, setNickname]   = useState('')
  const [password, setPassword]   = useState('')
  const [message, setMessage]     = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError]         = useState('')

  // 삭제 모달 상태
  const [deleteTarget, setDeleteTarget] = useState<GuestEntry | null>(null)
  const [deletePassword, setDeletePassword] = useState('')
  const [deleteError, setDeleteError]   = useState('')
  const [deleting, setDeleting]         = useState(false)

  // Firestore 실시간 구독
  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setEntries(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<GuestEntry, 'id'>) }))
      )
    })
    return () => unsub()
  }, [])

  // ── 글 작성 ──────────────────────────────────────────────
  async function handleSubmit() {
    if (!nickname.trim() || !password.trim() || !message.trim()) {
      setError('모든 항목을 입력해주세요.')
      return
    }
    if (password.length < 4) {
      setError('비밀번호는 4자 이상 입력해주세요.')
      return
    }
    if (message.trim().length > 200) {
      setError('내용은 200자 이내로 작성해주세요.')
      return
    }
    if (containsBannedWord(nickname) || containsBannedWord(message)) {
      setError('사용할 수 없는 단어가 포함되어 있습니다.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      const passwordHash = await bcrypt.hash(password, 10)
      await addDoc(collection(db, 'guestbook'), {
        nickname:  nickname.trim(),
        message:   message.trim(),
        passwordHash,
        createdAt: serverTimestamp(),
      })
      setNickname('')
      setPassword('')
      setMessage('')
    } catch {
      setError('저장 중 오류가 발생했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── 삭제 모달 열기 ────────────────────────────────────────
  function openDeleteModal(entry: GuestEntry) {
    setDeleteTarget(entry)
    setDeletePassword('')
    setDeleteError('')
  }

  function closeDeleteModal() {
    setDeleteTarget(null)
    setDeletePassword('')
    setDeleteError('')
  }

  // ── 삭제 실행 ────────────────────────────────────────────
  async function handleDelete() {
    if (!deleteTarget || !deletePassword.trim()) return
    setDeleting(true)
    setDeleteError('')

    try {
      // 관리자 비밀번호 확인
      const isAdmin = deletePassword === ADMIN_PASSWORD
      // 본인 비밀번호 확인
      const isOwner = await bcrypt.compare(deletePassword, deleteTarget.passwordHash)

      if (!isAdmin && !isOwner) {
        setDeleteError('비밀번호가 일치하지 않습니다.')
        setDeleting(false)
        return
      }

      await deleteDoc(doc(db, 'guestbook', deleteTarget.id))
      closeDeleteModal()
    } catch {
      setDeleteError('삭제 중 오류가 발생했습니다.')
    } finally {
      setDeleting(false)
    }
  }

  function formatDate(ts: Timestamp | null): string {
    if (!ts) return ''
    return ts.toDate().toLocaleDateString('ko-KR', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  }

  const canSubmit = nickname.trim() && password.trim() && message.trim() && !submitting

  return (
    <>
      <section className="max-w-[800px] mx-auto px-4 py-16 border-t border-white/[0.06]">
        <h2 className="text-gray-500 uppercase mb-4">
          방명록
        </h2>

        {/* 입력 폼 */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="grid grid-cols-2 gap-3">
            <input
              className="bg-white/[0.04] border border-white/10 text-gray-50 text-sm px-4 py-3 outline-none focus:border-white/25 transition-colors placeholder:text-gray-500"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => { setNickname(e.target.value); setError('') }}
              maxLength={20}
            />
            <input
              type="password"
              className="bg-white/[0.04] border border-white/10 text-gray-50 text-sm px-4 py-3 outline-none focus:border-white/25 transition-colors placeholder:text-gray-500"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError('') }}
              maxLength={20}
            />
          </div>
          <textarea
            className="w-full bg-white/[0.04] border border-white/10 text-gray-50 text-sm px-4 py-3 outline-none focus:border-white/25 transition-colors placeholder:text-gray-500 resize-none"
            placeholder="내용"
            value={message}
            onChange={(e) => { setMessage(e.target.value); setError('') }}
            maxLength={200}
            rows={3}
          />

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              {error && <p className="text-xs text-red-400">{error}</p>}
              <p className="text-xs text-gray-600">{message.length} / 200</p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="border border-red-900/50 text-red-300/70 text-sm uppercase px-5 py-2 transition-all disabled:opacity-30 hover:border-red-700/70 hover:text-red-300 disabled:cursor-not-allowed"
            >
              {submitting ? '저장 중...' : '등록'}
            </button>
          </div>
        </div>

        {/* 방명록 목록 */}
        {entries.length === 0 ? (
          <p className="text-xs text-gray-600 text-center py-8">아직 방명록이 없습니다.</p>
        ) : (
          <ul className="flex flex-col gap-5">
            {entries.map((entry) => (
              <li key={entry.id} className="border-b border-white/[0.06] pb-5 group">
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm text-gray-200">
                      {entry.nickname}
                    </span>
                    <span className="text-xs text-gray-600">
                      {formatDate(entry.createdAt)}
                    </span>
                  </div>
                  {/* 삭제 버튼 — hover 시 표시 */}
                  <button
                    onClick={() => openDeleteModal(entry)}
                    className="text-[10px] text-gray-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 tracking-widest"
                  >
                    삭제
                  </button>
                </div>
                <p className="text-gray-50 leading-[1.8] break-keep">
                  {entry.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 삭제 모달 */}
      {deleteTarget && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={closeDeleteModal}
        >
          <div
            className="bg-[#111] border border-white/10 p-8 w-full max-w-sm flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm text-gray-300 tracking-widest uppercase">방명록 삭제</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              작성 시 입력한 비밀번호를 입력하면 삭제됩니다.
            </p>

            <input
              type="password"
              autoFocus
              className="w-full bg-white/[0.04] border border-white/10 text-[#e8e0d8] text-sm px-4 py-3 outline-none focus:border-white/25 transition-colors placeholder:text-gray-600"
              placeholder="비밀번호"
              value={deletePassword}
              onChange={(e) => { setDeletePassword(e.target.value); setDeleteError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleDelete()}
            />

            {deleteError && (
              <p className="text-xs text-red-400">{deleteError}</p>
            )}

            <div className="flex gap-2 justify-end">
              <button
                onClick={closeDeleteModal}
                className="text-xs text-gray-500 border border-white/10 px-4 py-2 hover:border-white/25 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleDelete}
                disabled={!deletePassword.trim() || deleting}
                className="text-xs text-red-300/70 border border-red-900/50 px-4 py-2 hover:border-red-700/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {deleting ? '삭제 중...' : '삭제'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}