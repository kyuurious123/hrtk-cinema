// src/lib/firebase.ts
// 1. https://console.firebase.google.com 에서 프로젝트 생성
// 2. Firestore Database 활성화 (테스트 모드로 시작)
// 3. 프로젝트 설정 > 앱 추가 > 웹에서 config 값 복사
// 4. 프로젝트 루트에 .env.local 파일 만들고 아래 값 입력

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
