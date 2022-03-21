import { useEffect } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

import { useGuidanceColorHandler } from './context'

export const useChangeColorInView = (
  options: IntersectionOptions & { color?: string } = {}
) => {
  const { ref, inView } = useInView(options)

  const changeColor = useGuidanceColorHandler()

  useEffect(() => {
    if (inView) {
      changeColor(options.color || '#f5f1e7')
    }
  }, [inView, changeColor, options.color])

  return ref
}
