import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default DropDownButton

function DropDownButton({ children, menu, onClick }) {
  const [menuState, setMenuState] = useState(false)

  return (
    <StyledWrapper>
      <StyledDropDownButton menuState={menuState} onMouseDown={toggleMenue}>
        {children}
      </StyledDropDownButton>

      {menuState && (
        <StyledUl>
          {menu.map((item) => (
            <li key={item.text} onClick={() => handleMenuClick(item)}>
              {item.icon ? (
                item.icon
              ) : (
                <StyledColorIndicator bgColor={item.color} />
              )}
              <span>{item.text}</span>
            </li>
          ))}
        </StyledUl>
      )}
    </StyledWrapper>
  )

  function handleMenuClick(item) {
    closeMenu()
    onClick(item.node, item.targetState)
  }

  function toggleMenue() {
    setMenuState(!menuState)
  }

  function closeMenu() {
    setMenuState(false)
  }
}
const StyledWrapper = styled.div`
  position: relative;
`

const StyledDropDownButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

  background-color: var(--color-primary);
  border: 0 solid currentColor;
  border-radius: 3px;

  color: ${(props) => (props.value ? 'white' : '#424242cc')};
  width: 100%;
  text-transform: uppercase;
  transition: color 0.3s ease-out;

  height: 50px;
  font-size: 8px;

  border-bottom-right-radius: ${(props) => (props.menuState ? '0px' : '3px')};
  border-bottom-left-radius: ${(props) => (props.menuState ? '0px' : '3px')};
  transition: border-bottom-right-radius 0.3s ease-out,
    border-bottom-left-radius 0.3s ease-out;

  &:focus {
    outline: 0px solid #fff;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.3s ease-out;
  }

  span {
    margin-top: 3px;
    letter-spacing: 0.5px;
  }
`

const StyledButtonArea = styled.div`
  position: relative;
  display: grid;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: ${(props) => (props.menuState ? '0px' : '3px')};
  border-bottom-left-radius: ${(props) => (props.menuState ? '0px' : '3px')};
  transition: border-bottom-right-radius 0.3s ease-out,
    border-bottom-left-radius 0.3s ease-out;
  background-color: var(--color-primary);

  height: 50px;
  &:active {
    transform: scale(0.75);
    transition: transform 1s ease-out ease-out;
    transform: scale(1);
    transition: transform 1s ease-out ease-out;
  }
`

const StyledUl = styled.ul`
  z-index: 1000;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  right: 0px;
  top: 50px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  box-sizing: border-box;
  width: 100%;
  flot: right;
  animation: ${(props) => (props.animationState ? 'none' : 'b 0.1s')};
  -webkit-animation-fill-mode: initial; //Changed from both to initial
  animation-fill-mode: initial;
  font-size: 13px;
  color: white;

  span {
    padding-left: 10px;
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
    padding-left: 15px;
    user-select: none;
    font-weight: 200;
    letter-spacing: 0.5px;
    font-size: 11px;
    text-transform: uppercase;
    padding-right: 10px;
  }

  li:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
  }

  li:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
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
const StyledColorIndicator = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  width: 20px;
  height: 20px;
  border: 2px solid #4d3b1c;
`
