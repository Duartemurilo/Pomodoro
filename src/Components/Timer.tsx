import React from 'react'
import { secondsToTime } from '../Services/seconds-to-time'
import { ContainerTimer } from '../Styled/Components/timer-styled'

interface Props {
  mainTime: number
}

function Timer(props: Props): JSX.Element {
  return <ContainerTimer className="timer">{secondsToTime(props.mainTime)}</ContainerTimer>
}

export default Timer
