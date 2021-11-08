import React from 'react'
import { ContainerDataStatics, ContainerStatic, DataCotainer, DivTitle } from '../Styled/Components/ statisticStyle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { secondsToTime } from '../Services/seconds-to-time'

interface Props {
  completedCycles: number
  numberOfPomodoros: number
  fullWorkingTime: number
  setShowStatics: any
}

function Statistic(props: Props) {
  return (
    <ContainerStatic>
      <h1 onClick={() => props.setShowStatics(false)}>X</h1>
      <DivTitle>
        <div></div>
        <p>Estatísticas</p>
        <div></div>
      </DivTitle>
      <ContainerDataStatics>
        <DataCotainer>
          <div>
            <AccessTimeIcon style={{ fontSize: 40 }} />
            <p>Tempo:</p>
          </div>
          <p>{secondsToTime(props.fullWorkingTime)}</p>
        </DataCotainer>
        <DataCotainer>
          <div>
            <AutorenewIcon style={{ fontSize: 40 }} />
            <p>Ciclos: </p>
          </div>
          <p>{props.completedCycles}</p>
        </DataCotainer>
        <DataCotainer>
          <div>
            <LocalFireDepartmentIcon style={{ fontSize: 40 }} />
            <p>Pomodoros:</p>
          </div>
          <p>{props.numberOfPomodoros}</p>
        </DataCotainer>
      </ContainerDataStatics>
    </ContainerStatic>
  )
}

export default Statistic
