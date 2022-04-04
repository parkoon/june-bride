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

  // const [books, setBooks] = useState()

  // const addItem = async () => {
  //   const collectionRef = collection(db, 'books')
  //   const docRef = await addDoc(collectionRef, {
  //     username: 'foo',
  //     password: 'bar',
  //     content: 'fooo bar',
  //     createdAt: serverTimestamp(),
  //   })

  //   alert(docRef.id)
  // }

  // const deleteItem = async () => {
  //   const docRef = doc(db, 'books', 'z9jof9xlcDbbiRXVCpTz')

  //   await deleteDoc(docRef)
  // }

  // useEffect(() => {
  //   const collectionRef = collection(db, 'books')
  //   const q = query(collectionRef, orderBy('createdAt', 'desc'))

  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => {
  //       console.log('zz', doc.data())

  //       const d = doc.data()
  //       return {
  //         ...doc.data(),
  //         id: doc.id,
  //         createdAt: doc.data().createdAt?.toDate().getTime(),
  //       }
  //     })
  //     console.log('snapshot', data)

  //     setBooks(data)
  //     // setBooks(
  //     //   snapshot.docs.map((doc) => ({
  //     //     ...doc.data(),
  //     //     id: doc.id,
  //     //     timestamp: doc.data().timestamp?.toDate().getTime(),
  //     //   }))
  //     // )
  //   })

  //   return unsubscribe
  // }, [])

  const resetScroll = () => window.scrollTo(0, 0)

  useEffect(() => {
    window.addEventListener('beforeunload', resetScroll)
  }, [])
  return (
    <Layout>
      {/* <Envelope />
      <div style={{ height: '100vh' }} /> */}
      <Guidance />

      <ToastContainer autoClose={1500} position="top-center" />
      {/* <FAQ /> */}
    </Layout>
  )
}

export default Home
