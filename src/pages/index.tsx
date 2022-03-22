import type { NextPage } from 'next'

import Layout from '@components/common/Layout'
import FAQ from '@components/sections/FAQ'
import Guidance from '@components/sections/Guidance'

import useScrollAnimationEffect from '@hooks/useScrollAnimationEffect'

const Home: NextPage = () => {
  useScrollAnimationEffect()
  return (
    <Layout>
      <Guidance />

      <FAQ />
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
