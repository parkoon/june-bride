import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import mobileOnlyTrigger from 'src/helpers/mobileOnlyTrigger'

import { destination, lat, lng } from './constants'

function NaverMapButton() {
  const handleClick = () => {
    mobileOnlyTrigger(
      () =>
        (window.location.href = `nmap://place?lat=${lat}&lng=${lng}&name=${destination}&appname=com.example.myapp:`)
    )
  }
  return (
    <motion.button whileTap={{ scale: 0.9 }} onClick={handleClick}>
      <Image
        src="/images/map_naver.png"
        width={40}
        height={40}
        alt="map_naver"
      />
    </motion.button>
  )
}

export default NaverMapButton
