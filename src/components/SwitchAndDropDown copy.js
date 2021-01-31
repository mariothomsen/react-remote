import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default SwitchAndDropDown

function SwitchAndDropDown({ children, layout }) {
  const [menuState, setMenuState] = useState(false)
  const [menuHeight, setMenuHeight] = useState('30px')

  useEffect(() => {
    console.log('menuState', menuState)
  }, [menuState])

  const DropDownMenu = () => {
    return (
      <StyledUl menuHeight={menuHeight}>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#ffa10070" />
          <span>Gemütlich</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="var(--color-primary)" />
          <span>Normal I</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="var(--color-primary)" />
          <span>Normal II</span>
        </li>
        <li onClick={toggleMenue}>
          <StyledColorIndicator bgColor="#e3f2ff" />
          <span>Hell</span>
        </li>
      </StyledUl>
    )
  }

  return (
    <StyledLayout layout={layout}>
      <StyledDropDownArea menuState={menuState}>
        <StyledChildren>{children}</StyledChildren>
        <StyledDropDownButton onMouseDown={toggleMenue}>
          <BsThreeDotsVertical />
        </StyledDropDownButton>
        {menuState && <DropDownMenu />}
      </StyledDropDownArea>
    </StyledLayout>
  )

  function toggleMenue() {
    console.log('toggle...')
    setMenuState(!menuState)
    setMenuHeight('50px')
  }
}

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

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.layout};
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
  color: ${(props) => (props.value ? 'white' : '#424242a1')};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
`

const StyledDropDownArea = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  border-top-right-radius: 3px;
  border-bottom-right-radius: ${(props) => (props.menuState ? '0px' : '3px')};
  transition: border-bottom-right-radius 0.3s ease-out;
  background-color: var(--color-primary);
  position: relative;
  height: 50px;
`

const StyledUl = styled.ul`
  z-index: 100;
  list-style: none;
  padding: 0;
  margin: 0;
  right: 0px;
  top: 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;

  flot: right;
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
    letter-spacing: 0.5px;
    font-size: 11px;
    text-transform: uppercase;
    padding-right: 30px;
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
