import type { NextPage } from 'next'

import EmptyBox from '@components/common/FakeBox'
import Layout from '@components/common/Layout'
import Landing from '@components/sections/Landing'

import useScrollAnimationEffect from '@hooks/useScrollAnimationEffect'
import { EMPTY_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'

const Home: NextPage = () => {
  useScrollAnimationEffect()
  return (
    <Layout>
      <Landing />
      <EmptyBox opacity={0.1} id={EMPTY_SCENE_ID}>
        <button style={{ width: 200, height: 200 }} type="button">
          클릭 테스트
        </button>
      </EmptyBox>
      <EmptyBox opacity={0.3} />
    </Layout>
  )
}

export default Home
