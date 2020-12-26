import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'

export default DropDownButton

function DropDownButton({}) {
  const [menuState, setMenuState] = useState(false)
  const [menuHeight, setMenuHeight] = useState('30px')

  useEffect(() => {
    console.log('menuState', menuState)
  }, [menuState])

  const DropDownMenu = () => {
    return (
      <StyledDropDownMenu menuHeight={menuHeight}>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#ffa10070" />
          <span>Gemütlich</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#ffa101" />
          <span>Normal I</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#ffa101" />
          <span>Normal II</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#e3f2ff" />
          <span>Hell</span>
        </li>
      </StyledDropDownMenu>
    )
  }

  return (
    <StyledDropDown>
      <StyledButton onMouseDown={toggleMenue} class="dropbtn">
        ...
      </StyledButton>
      {menuState && <DropDownMenu />}
    </StyledDropDown>
  )

  function toggleMenue() {
    console.log('toggle...')
    setMenuState(!menuState)
    setMenuHeight('50px')
  }
}
const StyledColorIndicator = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  width: 20px;
  height: 20px;
  border: 2px solid #4d3b1c;
`

const StyledButton = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffa101;
  border: 0 solid currentColor;
  border-radius: 3px;
  padding: 10px 25px;
  min-height: 50px;
  color: ${(props) => (props.value ? 'white' : '#424242a1')};
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
`
const StyledDropDown = styled.div`
  position: relative;
`
const StyledDropDownMenu = styled.ul`
  z-index: 100;
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  animation: b 0.3s;
  font-size: 13px;
  color: white;
  span {
    padding-left: 20px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    background-color: #74613ff0;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    transition-delay: 0.1s;
    padding-left: 20px;
    user-select: none;
    font-weight: 200;
    letter-spacing: 1px;
    font-size: 11px;
    text-transform: uppercase;
  }

  li:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom: 0px solid grey;
  }

  li:first-child {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  li:hover {
    background-color: #6e4500;
    transition: background-color 0.3s ease-out;
  }

  @keyframes b {
    0% {
      transform: scaleY(0);
      transform: scaleX(0);
    }
    80% {
      transform: scaleY(1);
      transform: scaleX(1);
    }
    100% {
      transform: scaleY(1);
      transform: scaleX(1);
    }
  }

  @keyframes out {
    0% {
      transform: scaleY(1);
    }

    100% {
      transform: scaleY(0);
    }
  }
`

/*
    background-color: ${props => props.value ? "palevioletred" : "blue"};

*/
