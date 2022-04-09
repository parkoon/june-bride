import React from 'react'

import Inline from '@components/common/Inline'
import {
  KakaoMapButton,
  MapCopyButton,
  NaverMapButton,
} from '@components/common/Map'
import { address } from '@components/common/Map/constants'

function FAQAddress() {
  return (
    <>
      {address}
      <Inline style={{ marginTop: 4 }}>
        <KakaoMapButton />
        <NaverMapButton />
        <MapCopyButton />
      </Inline>
    </>
  )
}

export default FAQAddress
