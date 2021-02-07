import styled from 'styled-components/macro'
import { AiOutlinePoweroff } from 'react-icons/ai'
import Slider from '../Slider'

export default function VolumneSlider({ roomData }) {
  function handleChange(event, roomData) {
    roomData.updateApiNode(roomData.volumneNode, event.target.value)
    roomData.updateLocalNode(roomData.volumneNode, event.target.value)
  }

  return (
    <Slider
      onChange={handleChange}
      min="0"
      max="100"
      step="10"
      slideVal={roomData.volumneValue}
      data={roomData}
    ></Slider>
  )
}
