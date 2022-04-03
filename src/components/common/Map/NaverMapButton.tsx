import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import { destination, lat, lng } from './constants'

function NaverMapButton() {
  return (
    <a
      href={`nmap://place?lat=${lat}&lng=${lng}&name=${destination}&appname=com.example.myapp:`}
    >
      <Image
        src="/images/map_naver.png"
        width={40}
        height={40}
        alt="map_naver"
      />
    </a>
  )
}

export default NaverMapButton
