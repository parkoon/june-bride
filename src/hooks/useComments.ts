import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from 'src/firebase'

export type Comment = {
  id: string
  username: string
  password: string
  createdAt: number
  comment: string
}
export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const collectionRef = collection(db, 'comments')
    const q = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
              createdAt: doc.data().createdAt?.toDate().getTime(),
            } as unknown as Comment)
        )
      )
    })

    return unsubscribe
  }, [])

  return comments
}

export const addComment = async (value: Omit<Comment, 'createdAt' | 'id'>) => {
  const collectionRef = collection(db, 'comments')
  return await addDoc(collectionRef, {
    ...value,
    createdAt: serverTimestamp(),
  })
}

export const deleteComment = async (id: string) => {
  const docRef = doc(db, 'comments', id)
  return await deleteDoc(docRef)
}
