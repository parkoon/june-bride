import GuidanceArticle from './GuidanceArticle'
import GuidanceColorWrapper from './GuidanceColorWrapper'
import GuidanceIntro from './GuidanceIntro'
import GuidancePhotoGallery from './GuidancePhotoGallery'
import GuidanceProfile from './GuidanceProfile'
import { GuidanceColorProvider } from './context'

const DUMMY = ['#eb3b5a', '#20bf6b', '#8854d0', '#3867d6']
const GAP = 25

function Guidance() {
  return (
    <GuidanceColorProvider defaultColor="#fff">
      <GuidanceColorWrapper>
        <GuidanceIntro />

        {DUMMY.map((color, index) => {
          if (index === 0) return <GuidancePhotoGallery />
          if (index === 1) return <GuidanceProfile />

          return (
            <GuidanceArticle
              key={color}
              color={color}
              gap={(DUMMY.length - index) * GAP}
              header={{
                title: 'lorem',
                description: 'Lorem ipsum dolor \n ipsum sit.',
              }}
              body={{
                title: 'lorem',
                description: 'Lorem ipsum dolor \n ipsum sit.',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              nostrum repudiandae, velit nam incidunt numquam dicta aspernatur
              modi consectetur possimus mollitia dignissimos blanditiis earum
              porro laudantium nemo commodi ipsam maiores?
            </GuidanceArticle>
          )
        })}
      </GuidanceColorWrapper>
    </GuidanceColorProvider>
  )
}

export default Guidance
