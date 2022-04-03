import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import Copy from '@icons/Copy'

const Wrapper = styled.section`
  position: relative;
`
const Header = styled.div`
  padding: 12px 20px;
  margin-top: 12px;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 12px;
  }
`

const Content = styled.div`
  background-color: #fff;
  padding: 0 20px 20px 20px;
`

const Months = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    position: relative;
    font-size: 1.1rem;
    font-weight: bold;
  }

  span:first-child::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 25%;
    width: 50%;
    height: 3px;
    background: #3255a5;
  }

  span:not(:first-child) {
    color: #bdc3c7;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    position: relative;
    text-align: center;
    width: 12px;
    height: 12px;

    margin-top: 24px;
  }

  span.highlight::after {
    content: '18';
    position: absolute;

    text-align: center;
    line-height: 25px;

    width: 25px;
    height: 25px;
    background: #3255a5;
    color: #fff;

    border-radius: 50%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  span.disabled {
    color: #bdc3c7;
  }
`

const Upcoming = styled.div`
  background: pink;

  padding: 12px 20px;

  color: #fff;

  > h3 {
    text-align: center;
    font-size: 1.3rem;

    margin-bottom: 24px;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 14px;
`

const Right = styled.div`
  flex: 1;
  display: flex;

  justify-content: space-between;
`

const UpcomingContent = styled.div`
  display: flex;
`
const Time = styled.div`
  color: pink;
  background: #fff;
  display: inline-block;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  line-height: 24px;
`
const DashedVerticalDivider = styled.div`
  width: 1px;
  height: 100px;
  border: 1px dashed #fff;
  margin-top: 7px;
`

const Schedule = styled.div`
  > h2 {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  > p {
    font-size: 1rem;
    color: #ecf0f1;
  }
`
const Icon = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
`
function Calendar() {
  return (
    <Wrapper>
      <Header>
        <h3>2020</h3>
        <Months>
          <span>6월</span>
          <span>7월</span>
          <span>8월</span>
          <span>9월</span>
          <span>10월</span>
        </Months>
      </Header>
      <Content>
        <Row>
          <span>일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
        </Row>
        <Row>
          <span className="disabled">29</span>
          <span className="disabled">30</span>
          <span className="disabled">31</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </Row>
        <Row>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
        </Row>
        <Row>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span className="highlight">18</span>
        </Row>
        <Row>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
        </Row>
        <Row>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span className="disabled">1</span>
          <span className="disabled">2</span>
        </Row>
      </Content>
      <Upcoming>
        <h3>다가오는 일정</h3>
        <UpcomingContent>
          <Left>
            <Time>12</Time>
            <DashedVerticalDivider />
          </Left>
          <Right>
            <Schedule>
              <h2>종혁/진아 결혼식</h2>
              <p>오후 12:30</p>
            </Schedule>
            <Icon whileTap={{ scale: 0.9 }}>
              <Copy />
            </Icon>
          </Right>
        </UpcomingContent>
      </Upcoming>
    </Wrapper>
  )
}

export default Calendar
