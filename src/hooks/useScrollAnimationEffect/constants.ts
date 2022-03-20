export const LANDING_SCENE_ID = 'landing'
export const EMPTY_SCENE_ID = 'empty'

export type Scene = typeof LANDING_SCENE_ID | typeof EMPTY_SCENE_ID

export const SCENE = [
  {
    id: LANDING_SCENE_ID,
    long: 5,
  },
  {
    id: EMPTY_SCENE_ID,
    long: 1,
  },
]
