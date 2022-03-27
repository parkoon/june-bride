import type { NextPage } from 'next'
import { useEffect } from 'react'

import EmptyBox from '@components/common/FakeBox'
import Layout from '@components/common/Layout'
import Envelope from '@components/sections/Envelope'
import EnvelopeIcon from '@components/sections/Envelope/EnvelopeIcon'
import FAQ from '@components/sections/FAQ'
import Guidance from '@components/sections/Guidance'
import Landing from '@components/sections/Landing'

import useScrollAnimationEffect from '@hooks/useScrollAnimationEffect'

const Home: NextPage = () => {
  useScrollAnimationEffect()

  const resetScroll = () => window.scrollTo(0, 0)

  useEffect(() => {
    window.addEventListener('beforeunload', resetScroll)
  }, [])
  return (
    <Layout>
      <Guidance />
      {/* <Landing />
      <Envelope />
      <Guidance />
      <FAQ /> */}
      {/* <Guidance />

      <FAQ /> */}
      {/* <Landing />

      <Envelope /> */}

      {/* <EmptyBox opacity={0.1} /> */}
      {/* <EmptyBox opacity={0.3} /> */}
      {/* <EmptyBox opacity={0.1} id={EMPTY_SCENE_ID} /> */}

      {/* <Card /> */}
      {/* <EmptyBox opacity={0.3} /> */}
      {/* <EmptyBox opacity={0.1} id={EMPTY_SCENE_ID}>
        <button style={{ width: 200, height: 200 }} type="button">
          클릭 테스트
        </button>
      </EmptyBox>
      <EmptyBox opacity={0.3} /> */}
    </Layout>
  )
}

export default Home
