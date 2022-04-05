import { useEffect } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

import { useLayoutBackgroundColorHandler } from '@hooks/useLayoutBackgroundColor'

export const useChangeColorInView = (
  options: IntersectionOptions & { color?: string } = {}
) => {
  const { ref, inView } = useInView(options)

  const changeColor = useLayoutBackgroundColorHandler()

  useEffect(() => {
    if (inView) {
      changeColor(options.color || '#f5f1e7')
    }
  }, [inView, changeColor, options.color])

  return ref
}
