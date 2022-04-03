import { letterPaperColors } from '@styles/theme'

import GuidanceColorWrapper from './GuidanceColorWrapper'
import GuidanceDate from './GuidanceDate'
import GuidanceIntro from './GuidanceIntro'
import GuidanceNavigation from './GuidanceNavigation'
import GuidancePhotoGallery from './GuidancePhotoGallery'
import GuidanceProfile from './GuidanceProfile'
import { GuidanceColorProvider } from './context'

const COLOR_LENGTH = letterPaperColors.length
const GAP = 25

function Guidance() {
  return (
    <GuidanceColorProvider defaultColor="#fff">
      <GuidanceColorWrapper>
        <GuidanceIntro />

        {letterPaperColors.map((color, index) => {
          if (index === 0)
            return (
              <GuidancePhotoGallery
                gap={(COLOR_LENGTH - index) * GAP}
                color={color}
              />
            )
          if (index === 1)
            return (
              <GuidanceProfile
                gap={(COLOR_LENGTH - index) * GAP}
                color={color}
              />
            )
          if (index === 2)
            return (
              <GuidanceNavigation
                gap={(COLOR_LENGTH - index) * GAP}
                color={color}
              />
            )
          if (index === 3)
            return (
              <GuidanceDate gap={(COLOR_LENGTH - index) * GAP} color={color} />
            )
        })}
      </GuidanceColorWrapper>
    </GuidanceColorProvider>
  )
}

export default Guidance
