import { ComponentProps } from 'react'

import Accordion from '@components/common/Accordion'
import Inline from '@components/common/Inline'
import {
  KakaoMapButton,
  MapCopyButton,
  NaverMapButton,
} from '@components/common/Map'
import { address } from '@components/common/Map/constants'

import { letterPaperColors } from '@styles/theme'

import FAQAddress from './FAQAddress'
import FAQBankAccount from './FAQBankAccount'

export const ITEMS: ComponentProps<typeof Accordion>[] = [
  {
    category: { color: letterPaperColors[3], text: '결혼하는 날' },
    title: '결혼식 날짜와 시간이 언제인가요?',
    content: <FAQAddress />,
  },
  {
    category: { color: letterPaperColors[2], text: '오시는 길' },
    title: '주소가 뭐에요?',
    content: <FAQAddress />,
  },
  {
    category: { color: letterPaperColors[2], text: '오시는 길' },
    title: '강동역 몇 번 출구로 나와야 하나요?',
    content: '강동역 1번 출구 입니다.',
  },
  {
    category: { color: letterPaperColors[1], text: '프로필' },
    title: '신랑/신부의 계좌번호를 알고 싶어요.',
    content: <FAQBankAccount />,
  },
  {
    category: { color: letterPaperColors[1], text: '프로필' },
    title: '신랑/신부의 이름이 뭐에요?',
    content: '설마...😥',
  },
]
