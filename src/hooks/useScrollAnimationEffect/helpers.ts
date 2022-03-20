import { SCENE } from './constants'

type Values = [number, number, { start: number; end: number }]
export const calcValues = ({
  values,
  currentOffsetY,
  scrollHeight,
}: {
  values: Values
  currentOffsetY: number
  scrollHeight: number
}) => {
  let result = values[0]

  const partScrollStart = values[2].start * scrollHeight
  const partScrollEnd = values[2].end * scrollHeight
  const partScrollHeight = partScrollEnd - partScrollStart

  if (currentOffsetY >= partScrollStart && currentOffsetY <= partScrollEnd) {
    result =
      ((currentOffsetY - partScrollStart) / partScrollHeight) *
        (values[1] - values[0]) +
      values[0]
  } else if (currentOffsetY < partScrollStart) {
    result = values[0]
  } else if (currentOffsetY > partScrollEnd) {
    result = values[1]
  }

  return result
}

export const getPrevScrollHeight = (currentScene: number) => {
  let result = 0
  for (let i = 0; i < currentScene; i++) {
    result += window.innerHeight * SCENE[i].long
  }

  return result
}
