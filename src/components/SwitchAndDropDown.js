import styled from 'styled-components/macro'
import { useEffect, useState, useMemo } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default SwitchAndDropDown

function SwitchAndDropDown({ children, layout, menu, onClick }) {
  const [menuState, setMenuState] = useState()

  const DDMenu = () => {
    return (
      <StyledUl>
        {menu.map((item) => (
          <li onClick={() => handleMenuClick(item)}>
            {item.icon ? (
              item.icon
            ) : (
              <StyledColorIndicator bgColor={item.color} />
            )}
            <span>{item.text}</span>
          </li>
        ))}
      </StyledUl>
    )
  }

  return (
    <StyledWrapper>
      <StyledButtonArea layout={layout} menuState={menuState}>
        <StyledChildren onClick={closeMenu}>{children}</StyledChildren>
        <StyledDropDownButton onMouseDown={toggleMenue}>
          <BsThreeDotsVertical />
        </StyledDropDownButton>
      </StyledButtonArea>
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

const StyledChildren = styled.div`
  display: flex;

  *:first-child {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  *:nth-child(2) {
    border-radius: 0;
  }
  *:nth-child(3) {
    border-radius: 0;
  }
`

const StyledColorIndicator = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  width: 20px;
  height: 20px;
  border: 2px solid #4d3b1c;
`

const StyledDropDownButton = styled.div`
  display: grid;
  place-items: center;
  color: ${(props) => (props.value ? 'white' : '#424242cc')};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  &:active svg {
    transform: scale(2);
    transition: transform 0.3s ease-out;
  }
  &:focus {
    background-color: #a16e28;
    transition: background-color 0.3s ease-out;
  }
`

const StyledButtonArea = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => props.layout};
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
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;

  padding: 0;
  margin: 0;
  right: 0px;
  box-sizing: border-box;
  width: 100%;
  animation: ${(props) => (props.animationState ? 'none' : 'b 0.1s')};
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
    border-top-left-radius: 0px;
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
