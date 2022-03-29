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

    window.onload = function () {
      if (
        navigator.userAgent.match(
          /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i
        )
      ) {
        document.body.innerHTML = ''
        if (navigator.userAgent.match(/iPhone|iPad/i)) {
          location.href = 'ftp://도메인/bridge.html?_targeturl=' + location.href
        } else {
          location.replace(
            'intent://' +
              location.href.replace(/https?:\/\//i, '') +
              '#Intent;scheme=http;package=com.android.chrome;end'
          )
        }
      }
    }
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
