import styled from '@emotion/styled'
import React from 'react'

import GuidanceArticle from './GuidanceArticle'

const LOAD_HEIGHT = 50

const CityBackground = styled.div`
  height: 100px;
  width: 700%;
  background-image: url('/images/city2.png');
  display: block;
  background-repeat: repeat-x;
  position: absolute;

  bottom: ${LOAD_HEIGHT}px;

  background-size: contain;
  transform: translateX(-543px);

  animation: move 20s linear infinite;

  @keyframes move {
    100% {
      transform: translateX(-1800px);
    }
  }
`

const Car = styled.img`
  position: absolute;
  left: 20px;

  height: 25px;
  bottom: 10px;

  animation: suspension 1s linear infinite;

  @keyframes suspension {
    100% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(2px);
    }
    0% {
      transform: translateY(-1px);
    }
  }
`

const Load = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${LOAD_HEIGHT}px;

  background: #555859;
`

const Content = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`

function GuidanceNavigation() {
  return (
    <GuidanceArticle
      color="#8854d0"
      gap={25 * 2}
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
        <CityBackground />
        <Load />
        <Car src="/images/car.png" />
      </Content>
    </GuidanceArticle>
  )
}

export default GuidanceNavigation
