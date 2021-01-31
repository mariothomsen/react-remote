import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'

export default Slider

function Slider({}) {
  const [sliderValue, SetSliderValue] = useState(false)
  function sliderHandle(event) {
    console.log(event.target.value)
  }
  return (
    <StyledSlider
      id="typeinp"
      type="range"
      min="0"
      max="100"
      onChange={sliderHandle}
    />
  )
}

const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  background: #81612b;
  outline: none;
  margin: 25px 0 10px -1px;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: var(--color-primary);
    cursor: pointer;
    border-radius: 50%;
    border: 5px solid #242424;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: var(--color-primary);
    cursor: pointer;
  }
`
