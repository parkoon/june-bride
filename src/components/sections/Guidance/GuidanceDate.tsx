import React from 'react'

import Calendar from '@components/common/Calendar'

import GuidanceArticle from './GuidanceArticle'

function GuidanceDate() {
  return (
    <GuidanceArticle
      color="#3867d6"
      gap={25}
      header={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
    >
      <Calendar />
    </GuidanceArticle>
  )
}

export default GuidanceDate
