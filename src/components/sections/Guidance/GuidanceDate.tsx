import React from 'react'

import Calendar from '@components/common/Calendar'

import GuidanceArticle from './GuidanceArticle'

const color = '#3867d6'
function GuidanceDate() {
  return (
    <GuidanceArticle
      color={color}
      gap={25}
      header={{
        title: '손 없는날',
        description: '2022년 6월 18일 \n 오후 12시 30분',
      }}
    >
      <Calendar color={color} />
    </GuidanceArticle>
  )
}

export default GuidanceDate
