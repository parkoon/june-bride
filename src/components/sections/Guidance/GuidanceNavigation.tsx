import styled from '@emotion/styled'
import React from 'react'

import Inline from '@components/common/Inline'
import { MapCopyButton } from '@components/common/Map'
import KakaoMapButton from '@components/common/Map/KakaoMapButton'
import NaverMapButton from '@components/common/Map/NaverMapButton'

import { color } from '@styles/theme'

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

const ActionWrapper = styled.div`
  padding-left: 20px;
`
const Action = styled.button`
  margin-right: 7px;
`
const ActionTitle = styled.div`
  color: ${color.gray};
  font-size: 0.9rem;
  margin-bottom: 12px;
`

const Content = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`
type Props = {
  gap: number
  color: string
}
function GuidanceNavigation(props: Props) {
  return (
    <GuidanceArticle
      header={{
        title: '오시는 길',
        description: '잠실에서 10분 거리 \n 강동역 1번 출구.',
      }}
      body={{
        title: '강동루벨.',
        description:
          '서울특별시 강동구 \n 천호대로 1077 \n 이스트센트럴타워 35층.',
      }}
      {...props}
    >
      <Content>
        <ActionWrapper>
          <ActionTitle>길치들을 위한 길찾기</ActionTitle>
          <Inline>
            <NaverMapButton />
            <KakaoMapButton />
            <MapCopyButton />
          </Inline>
        </ActionWrapper>
        <CityBackground />
        <Load />
        <Car src="/images/car.png" />
      </Content>
    </GuidanceArticle>
  )
}

export default GuidanceNavigation
