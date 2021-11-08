import styled from 'styled-components'

export const ContainerStatic = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 200px;
  width: 40vw;
  height: 40vh;
  background-color: white;
  border-radius: 10px;
  justify-self: center;
  padding: 15px;
  h1 {
    color: #838383;
    margin: 0;
    margin-top: -10px;
    align-self: flex-end;
    font-size: 30px;
    :hover {
      color: red;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`
export const DivTitle = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20px;
    color: rgb(87, 87, 87);
    margin-left: 10px;
    margin-right: 10px;
  }
  div {
    width: 30%;
    background-color: #838383;
    height: 0.2vh;
    margin-left: 5px;
  }
`
export const ContainerDataStatics = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1vw;
`
export const DataCotainer = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  height: 60%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px;
  color: black;
  align-items: center;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    p {
      margin-top: 0px;
      margin-left: 2px;
      font-size: 20px;
    }
  }
  :hover {
    transform: scale(1.08);
    cursor: pointer;
  }

  p {
    margin-top: 10px;
    font-size: 35px;
    align-self: center;
  }
`
