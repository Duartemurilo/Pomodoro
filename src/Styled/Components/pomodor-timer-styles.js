import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const BodyPomodoroTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 100%;
  gap: 5vh;
  h1 {
    font-size: 30px;
    color: white;
  }
  button {
    padding: 13px;
    border: 1px solid white;
    border-radius: 80px;
    min-width: 100px;
    color: white;
    cursor: pointer;
    background: none;

    :hover {
      transform: scale(1.2);
      background: white;
      color: black;
    }
  }
  ${`@media only screen and ${breakPoints.device.cel}{
   
  }`}
`
export const DivButtons = styled.div`
  display: flex;
  width: 110%;
  margin-top: 4vh;
  gap: 2vw;
  max-width: 600px;
  justify-content: space-evenly;
`
