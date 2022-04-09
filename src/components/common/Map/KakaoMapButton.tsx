import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import mobileOnlyTrigger from 'src/helpers/mobileOnlyTrigger'

import MotionButton from '../MotionButton'
import { destination, lat, lng } from './constants'

function KakaoMapButton() {
  const handleClick = () => {
    mobileOnlyTrigger(
      () =>
        (window.location.href = `https://map.kakao.com/link/to/${destination} ,${lat},${lng}`)
    )
  }
  return (
    <MotionButton onClick={handleClick}>
      <Image
        src="/images/map_kakao.png"
        width={40}
        height={40}
        alt="map_kakao"
      />
    </MotionButton>
  )
}

export default KakaoMapButton
