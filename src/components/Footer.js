import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/logo_1.svg'

export default Footer

function Footer({}) {
  return (
    <StyledDiv>
      <a href="/klima"></a>
      <Logo />
      <a href=""></a>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
  width: 100%;
  text-align: center;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
