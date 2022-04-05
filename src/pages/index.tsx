import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { db } from 'src/firebase'

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
      <Envelope />
      <div style={{ height: '100vh' }} />
      <Guidance />
      <FAQ />
      <ToastContainer autoClose={1500} position="top-center" />
    </Layout>
  )
}

export default Home
