import { useEffect, useState } from 'react'

import styled from 'styled-components/macro'
import { AiOutlinePoweroff, AiOutlineFire } from 'react-icons/ai'
import Slider from './../Slider'

export default function HeatingOverlay({ roomData }) {
  const [displayTemp, setDisplayTemp] = useState(roomData.heatingValue)

  useEffect(() => {
    setDisplayTemp(roomData.heatingValue)
  }, [roomData])

  function handleButtonClick(roomData, modifier) {
    roomData.updateApiNode(
      roomData.heatingHandler,
      'heizung.' + roomData.name + '.' + modifier
    )
  }

  function handleTargetTempChange(event, roomData) {
    roomData.updateLocalNode(roomData.heatingNode, event.target.value)
    roomData.updateApiNode(
      roomData.heatingHandler,
      'heizung.' + roomData.name + '.' + event.target.value
    )
    setDisplayTemp(event.target.value)
  }

  return (
    <StyledLayout>
      <h2>Heizung</h2>
      <h3>{roomData.name}</h3>
      <StyledTargetTemp>{displayTemp}°</StyledTargetTemp>
      <Slider
        onChange={handleTargetTempChange}
        min="5"
        max="30"
        step="1"
        slideVal={roomData.heatingValue}
        data={roomData}
      ></Slider>
      <StyledButtonArea>
        <StyledButton onClick={() => handleButtonClick(roomData, 'on')}>
          <AiOutlinePoweroff color="#306730"></AiOutlinePoweroff>
        </StyledButton>
        <StyledButton onClick={() => handleButtonClick(roomData, 'boost')}>
          <AiOutlineFire color="var(--color-primary)"></AiOutlineFire>
        </StyledButton>
        <StyledButton onClick={() => handleButtonClick(roomData, 'off')}>
          <AiOutlinePoweroff color="#bb2d2d"></AiOutlinePoweroff>
        </StyledButton>
      </StyledButtonArea>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  max-width: 600px;
  display: grid;
  text-align: center;
  place-items: center;
  font-family: 'Roboto', sans-serif;

  padding: 50px;
  box-sizing: border-box;

  h3 {
    margin-bottom: 5px;
  }
`

const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 315px;
`

const StyledButton = styled.div`
  font-size: 1em;
  font-weight: 200;
  text-transform: uppercase;

  max-width: 600px;
  box-sizing: border-box;
  display: grid;
  text-align: center;
  cursor: pointer;
`

const StyledTargetTemp = styled.div`
  font-size: 3.1em;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  color: var(--color-primary);
`
