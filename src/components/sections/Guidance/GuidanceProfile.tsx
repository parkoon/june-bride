import styled from '@emotion/styled'
import React from 'react'

import SlidingTab from '@components/common/SlidingTab'

import GuidanceArticle from './GuidanceArticle'

const Content = styled.div``

function GuidanceProfile() {
  return (
    <GuidanceArticle
      color="#f39c12"
      gap={25}
      header={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
      body={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
    >
      <Content>
        <SlidingTab items={['신랑', '신부']} />
      </Content>
    </GuidanceArticle>
  )
}

export default GuidanceProfile
