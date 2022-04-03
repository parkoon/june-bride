import React from 'react'

import Calendar from '@components/common/Calendar'

import GuidanceArticle from './GuidanceArticle'

type Props = {
  gap: number
  color: string
}
function GuidanceDate(props: Props) {
  return (
    <GuidanceArticle
      header={{
        title: '손없는 날',
        description: '2022년 6월 18일 \n 오후 12시 30분',
      }}
      {...props}
    >
      <Calendar color={props.color} />
    </GuidanceArticle>
  )
}

export default GuidanceDate
