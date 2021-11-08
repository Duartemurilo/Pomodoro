import styled from 'styled-components'

export const ContainerTask = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 200px;
  width: 40vw;
  height: 40vh;
  background-color: white;
  border-radius: 10px;
  justify-self: center;
  padding: 35px;
  align-items: center;
  h1 {
    color: #838383;
    margin: 0;
    margin-top: -10px;
    align-self: flex-end;
    font-size: 30px;
    color: rgb(85, 85, 85);
  }
  button {
    border: 1px solid black;
    background: none;
    border-radius: 20px;
    cursor: pointer;
    width: 20%;
    padding: 10px;
    margin-top: 8vh;
  }
`
export const DivTitleTask = styled.div`
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
    width: 28%;
    background-color: #838383;
    height: 0.2vh;
    margin-left: 5px;
  }
`
export const TaskContainer = styled.div`
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  height: 7vh;
  margin-top: 8vh;
`
export const InputTask = styled.input`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  margin-left: 10px;
  font-size: 20px;
  padding: 10px;
  ::placeholder {
    font-size: 20px;
    opacity: 0.8;
    color: rgb(87, 87, 87);
  }
`
