import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { FaBeer } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function RadioSwitch({
  node,
  targetStates,
  currentState,
  onChange,
}) {
  return (
    <StyledForm>
      {targetStates.map((targetState, index) => (
        <StyledDiv key={'input' + node + index}>
          <input
            id={node + index}
            onChange={handleChange}
            type="radio"
            value={targetState.value}
            checked={targetState.value === currentState}
          />
          <label htmlFor={node + index}>{targetState.icon}</label>
        </StyledDiv>
      ))}
    </StyledForm>
  )

  function handleChange(event) {
    onChange(node, JSON.parse(event.target.value.toLowerCase()))
  }
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`

const StyledForm = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  display: flex;

  border-radius: 3px;
  height: 50px;
  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    color: white !important;
    transition: color 0.3s ease-out;
  }

  label {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    color: white;
    color: #424242a1;
  }
`

/*
background-color: red;

    <label htmlFor>
        <input type="radio" name="test" value="1" />
        <span>All</span>
      </label>
      <label>
        <input type="radio" name="test" value="2" />
        <span>Open</span>
      </label>
      <label>
        <input type="radio" name="test" value="3" />
        <span>Archived</span>
      </label>
*/
