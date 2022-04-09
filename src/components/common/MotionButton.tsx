import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

function MotionButton(props: HTMLMotionProps<'button'>) {
  return <motion.button whileTap={{ scale: 0.9 }} {...props} />
}

export default MotionButton
