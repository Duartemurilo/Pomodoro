import styled from 'styled-components'
import breakPoints from '../../Constants/BreakPoints'

export const ContainerHeader = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  align-self: center;
  height: 10vh;
  border-bottom: 2px solid white;
  margin-bottom: 10vh;
  color: white;
  margin-top: -10vh;
  padding-bottom: 7px;
  justify-content: space-between;
  h1 {
    margin-left: 5px;
    font-size: 25px;
    font-weight: bold;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
    border:none;
    margin-top: -15vh;
    margin-left:-50vw;
    justify-content: flex-start;
  }`}
`
export const ContainerData = styled.div`
  display: flex;
  height: 100%;
  width: 63%;
  align-items: flex-end;
  justify-content: space-evenly;
  button {
    display: flex;
    align-items: center;
    padding: 7px;
    border: 1px solid white;
    border-radius: 10px;
    min-width: 100px;
    color: white;
    cursor: pointer;
    gap: 7px;
    background: none;

    font-size: 16px;
    :hover {
      transform: scale(1.1);
      background: white;
      color: black;
    }
  }
`
