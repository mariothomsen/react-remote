import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/logo_circle.svg'
import { Link } from 'react-router-dom'

export default Footer

function handlePopupClick() {
  var url = '/'
  window.open(
    url,
    'window',
    'toolbar=no, menubar=no, location=no, resizable=yes, height=' +
      window.screen.height +
      'px, width=500px'
  )
}

function Footer() {
  return (
    <StyledDiv>
      <Link to="/klima">Klima_Übersicht</Link>
      <Link to="/">
        <Logo width="30"></Logo>
      </Link>
      <span onClick={handlePopupClick}>Open_As_Popup</span>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
  margin: 0px 0 20px -10px;
  height: 30px;
  display: flex;
  justify-content: center;
  place-items: center;
  max-width: 930px;

  a {
    min-width: 60px;
    color: #c7c7c7;
    text-decoration: none;
    font-size: 9px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
  }

  span {
    min-width: 60px;
    text-align: left;
    color: #c7c7c7;
    text-decoration: none;
    font-size: 9px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }
`
