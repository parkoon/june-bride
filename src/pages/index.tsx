import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '@components/common/Layout'
import Envelope from '@components/sections/Envelope'
import FAQ from '@components/sections/FAQ'
import Guidance from '@components/sections/Guidance'
import OnlyPC from '@components/sections/OnlyPC'

import useScrollAnimationEffect from '@hooks/useScrollAnimationEffect'
import useShareKakao from '@hooks/useShareKakao'

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
`

const Home: NextPage = () => {
  useScrollAnimationEffect()

  const resetScroll = () => window.scrollTo(0, 0)

  // const shareKakao = useShareKakao()

  useEffect(() => {
    window.addEventListener('beforeunload', resetScroll)
  }, [])

  return (
    <Wrapper>
      <OnlyPC />
      <Layout>
        <Envelope />
        <div style={{ height: '100vh' }} />
        <Guidance />
        <FAQ />
        <ToastContainer autoClose={1500} position="top-center" />

        {/* <button onClick={shareKakao}>카카오로 공유하기</button> */}
      </Layout>
    </Wrapper>
  )
}

export default Home
