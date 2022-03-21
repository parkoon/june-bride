import styled from '@emotion/styled'
import { useRef } from 'react'

import GuidanceArticle from './GuidanceArticle'
import GuidanceIntro from './GuidanceIntro'

const Wrapper = styled.section``

const DUMMY = ['#00b894', '#00cec9', '#0984e3', '#e17055']
const GAP = 25

function Guidance() {
  const wrapper = useRef<HTMLElement>(null)

  return (
    <Wrapper ref={wrapper}>
      <GuidanceIntro />

      {DUMMY.map((color, index) => (
        <GuidanceArticle
          key={color}
          primary={color}
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
          nostrum repudiandae, velit nam incidunt numquam dicta aspernatur modi
          consectetur possimus mollitia dignissimos blanditiis earum porro
          laudantium nemo commodi ipsam maiores?
        </GuidanceArticle>
      ))}
    </Wrapper>
  )
}

export default Guidance
