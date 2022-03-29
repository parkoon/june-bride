import type { NextPage } from 'next'
import { useEffect } from 'react'

import Layout from '@components/common/Layout'
import Envelope from '@components/sections/Envelope'
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
      <Landing />
      <Envelope />
      <Guidance />
      <FAQ />
    </Layout>
  )
}

export default Home
