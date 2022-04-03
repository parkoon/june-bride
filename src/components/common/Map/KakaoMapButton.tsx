import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import { destination, lat, lng } from './constants'

function KakaoMapButton() {
  return (
    <a href={`https://map.kakao.com/link/to/${destination} ,${lat},${lng}`}>
      <Image
        src="/images/map_kakao.png"
        width={40}
        height={40}
        alt="map_kakao"
      />
    </a>
  )
}

export default KakaoMapButton
