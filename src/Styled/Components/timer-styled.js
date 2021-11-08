import styled from 'styled-components'
import breakPoints from '../../Constants/BreakPoints'

export const ContainerTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  border-radius: 50%;
  padding: 65px;
  max-width: 300px;
  color: white;
  width: 80vw;
  font-size: 6rem;

  border-style: dashed;
  ${`@media only screen and ${breakPoints.device.cel}{
   padding: 70px;
   min-width: 70vw;
   font-size: 5.0rem;
   max-height: 35vh;
  }`}
`
