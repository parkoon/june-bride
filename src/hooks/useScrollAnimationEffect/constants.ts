export const LANDING_SCENE_ID = 'landing'
export const ENVELOPE_SCENE_ID = 'envelope'

export type Scene = typeof LANDING_SCENE_ID | typeof ENVELOPE_SCENE_ID

export const SCENE = [
  {
    id: LANDING_SCENE_ID,
    long: 5,
  },
  {
    id: ENVELOPE_SCENE_ID,
    long: 5,
  },
]
