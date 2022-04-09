import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { figure } from '@styles/theme'

import Pulse from '../Pulse'
import { days, weeks } from './constants'

const Wrapper = styled.section`
  padding-bottom: 32px;
`

const Content = styled.div`
  width: 100%;

  margin: 0 auto;

  border-radius: ${figure.borderRadius};

  background-color: #fff;
`

const Weeks = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`

const DayCell = styled.span<{
  thisMonth?: boolean
  weekend?: boolean
}>`
  position: relative;

  margin-top: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ weekend }) =>
    weekend &&
    css`
      color: #e74c3c;
    `}

  ${({ thisMonth }) =>
    !thisMonth &&
    css`
      color: #bdc3c7;
    `}
`

const WeekCell = styled.span`
  padding-bottom: 12px;
`

type Props = {
  color: string
}
function Calendar({ color }: Props) {
  return (
    <Wrapper>
      <Content>
        <Weeks>
          {weeks.map((week) => (
            <WeekCell key={week}>{week}</WeekCell>
          ))}
        </Weeks>
        <Days>
          {days.map(({ day, selected, ...rest }, index) => {
            return (
              <DayCell key={index} {...rest}>
                {selected ? <Pulse color={color}>{day}</Pulse> : day}
              </DayCell>
            )
          })}
        </Days>
      </Content>
    </Wrapper>
  )
}

export default Calendar
