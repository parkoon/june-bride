import type { NextPage } from 'next'
import { useEffect } from 'react'

import EmptyBox from '@components/common/FakeBox'

const Home: NextPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      Hello world
      <EmptyBox opacity={0.1} />
      <EmptyBox opacity={0.2} />
      <EmptyBox opacity={0.3} />
    </div>
  )
}

export default Home
