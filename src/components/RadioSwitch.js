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
  // console.log('node', node)
  // console.log('targetStates', targetStates)
  // console.log('currentState', currentState)

  return (
    <StyledForm>
      {targetStates.map((targetState, index) => {
        return (
          <>
            <input
              id={'test' + index}
              onChange={handleChange}
              name="test"
              type="radio"
              value={targetState}
              checked={targetState === currentState}
            />
            <label htmlFor={'test' + index}>
              <FaBeer />
            </label>
          </>
        )
      })}
    </StyledForm>
  )

  function handleChange(event) {
    onChange(node, JSON.parse(event.target.value.toLowerCase()))
  }
}

const StyledForm = styled.div`
  background-color: #ffa101;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 3px;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    color: white !important;
  }

  label {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

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
