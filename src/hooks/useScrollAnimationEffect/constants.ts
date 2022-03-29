export const LANDING_SCENE_ID = 'landing'
export const ENVELOPE_SCENE_ID = 'envelope'

export type Scene = typeof LANDING_SCENE_ID | typeof ENVELOPE_SCENE_ID

export const SCENE = [
  {
    id: LANDING_SCENE_ID,
    long: 4,
    animation: true,
  },
  {
    id: ENVELOPE_SCENE_ID,
    long: 3,
    animation: true,
  },
  {
    id: '',
    long: 0,
    animation: false,
  },
  {
    id: '',
    long: 0,
    animation: false,
  },
]
