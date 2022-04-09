import React from 'react'

import Calendar from '@components/common/Calendar'
import Confetti from '@components/common/Confetti'

import GuidanceArticle from './GuidanceArticle'

type Props = {
  gap: number
  color: string
}
function GuidanceDate(props: Props) {
  return (
    <GuidanceArticle
      header={{
        title: '결혼하는 날',
        description: '2022년 6월 18일',
      }}
      body={{
        title: '점심 시간.',
        description: '밥먹기 좋은 시간 \n 오후 12시 30분.',
      }}
      {...props}
    >
      <Calendar color={props.color} />

      <Confetti />
    </GuidanceArticle>
  )
}

export default GuidanceDate
