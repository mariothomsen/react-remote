import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/logo_circle.svg'

export default Footer

function Footer({}) {
  return (
    <StyledDiv>
      <a href="/klima">Klima-Übersicht</a>
      <Logo width="30"></Logo>
      <a href="/klima">Einstellungen</a>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  @media only screen and (min-width: 1000px) {
  }
  width: 100%;
  text-align: center;
  margin: 5px 0 20px 0;
  height: 30px;
  display: flex;
  justify-content: center;
  place-items: center;
  max-width: 930px;

  a {
    padding: 0 10px;
    width: 100px;
    color: #c7c7c7;
    text-decoration: none;
    font-size: 9px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }
`
