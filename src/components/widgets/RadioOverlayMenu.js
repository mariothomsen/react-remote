import styled from 'styled-components/macro'
import { AiOutlinePoweroff, AiOutlineStepForward } from 'react-icons/ai'
import { GiFastForwardButton } from 'react-icons/gi'

function handleMenuClick(item, roomData) {
  roomData.updateApiNode(roomData.radioHandler, item.targetState)
  roomData.updateLocalNode(roomData.radioNode, item.targetState)
}

function handleMainButtonClick(roomData, modifier) {
  roomData.updateApiNode(roomData.radioHandler, roomData.name + modifier)
  roomData.updateLocalNode(roomData.radioNode, false)
}

// function radioOn(roomData) {
//   roomData.updateApiNode(roomData.radioHandler, roomData.name + '.2')
//   roomData.updateLocalNode(roomData.radioNode, false)
// }

// function nextRadio(roomData) {
//   roomData.updateApiNode(roomData.radioHandler, roomData.name + '.1')
//   roomData.updateLocalNode(roomData.radioNode, false)
// }

export default function RadioOverlayMenu({ roomData }) {
  return (
    <StyledLayout>
      <h2>radio</h2>
      <h3>{roomData.name}</h3>
      <ul>
        {roomData.radioMenu.map((item) => (
          <li key={item.text} onClick={() => handleMenuClick(item, roomData)}>
            <img src={item.logo} />
            {item.text}
          </li>
        ))}
      </ul>
      <StyledButtonArea>
        <StyledButton onClick={() => handleMainButtonClick(roomData, '.1')}>
          <AiOutlinePoweroff color="#306730"></AiOutlinePoweroff>
        </StyledButton>
        <StyledButton onClick={() => handleMainButtonClick(roomData, '.2')}>
          <AiOutlineStepForward color="var(--color-primary)"></AiOutlineStepForward>
        </StyledButton>
        <StyledButton onClick={() => handleMainButtonClick(roomData, '.0')}>
          <AiOutlinePoweroff color="#bb2d2d"></AiOutlinePoweroff>
        </StyledButton>
      </StyledButtonArea>
    </StyledLayout>
  )
}
const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 315px;
  cursor: pointer;
`

const StyledButton = styled.div`
  font-size: 1em;
  font-weight: 200;
  text-transform: uppercase;

  max-width: 600px;
  box-sizing: border-box;
  display: grid;
  text-align: center;
`

const StyledLayout = styled.div`
  font-family: 'Roboto', sans-serif;

  display: grid;
  place-items: center;
  ul {
    padding: 0;
  }

  h3 {
    margin-bottom: 30px;
  }

  li {
    list-style: none;
    color: white;
    font-size: 0.4em;
    font-weight: 100;
    padding-bottom: 5px;
    height: 38px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border-bottom: 0.5px solid #e3e3e3a3;
    max-width: 300px;
    min-width: 200px;
    img {
      width: 20px;
      margin-right: 10px;
      border: 3px solid var(--color-primary);
      border-radius: 50%;
    }
  }
  li:last-child {
    background: none;
    border-bottom: 0px solid #e3e3e3;
  }

  li:hover {
    color: var(--color-primary);
    transition: color 0.3s ease-in;
  }
`

/*
  background: linear-gradient(
    to left,
    rgb(0 0 0) 0%,
    var(--color-primary) 50%,
    rgb(0 0 0) 100%
  )
  left bottom #000 no-repeat;
background-size: 100% 1px; 

*/
