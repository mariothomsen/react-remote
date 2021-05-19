import styled from 'styled-components/macro'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import useNodeStates from './../../hooks/useNodeStates'

export default function SettingPlusMinus({ data }) {
  const [value, setValue] = useState()
  const { updateLocalNode, updateApiNode } = useNodeStates()

  useEffect(() => {
    setValue(data.value)
  }, [data])

  function valuePlus() {
    var newValue = value + 0.5
    setValue(newValue)
    updateLocalNode(data.node, newValue)
    updateApiNode(data.node, newValue)
  }

  function valueMinus() {
    var newValue = value - 0.5
    setValue(newValue)
    updateLocalNode(data.node, newValue)
    updateApiNode(data.node, newValue)
  }

  return (
    <StyledDiv>
      <StyledName>
        {data.text}:{' '}
        <b>
          {value && value.toFixed(1)}
          {data.append}
        </b>
      </StyledName>
      <div></div>
      <StyledAcrtionArea>
        <StyledButtonLeft onClick={valueMinus}>
          <AiOutlineMinusCircle size="20"></AiOutlineMinusCircle>
        </StyledButtonLeft>

        <StyledButtonRight onClick={valuePlus}>
          <AiOutlinePlusCircle size="20"></AiOutlinePlusCircle>
        </StyledButtonRight>
      </StyledAcrtionArea>
    </StyledDiv>
  )
}

/*
      <StyledValue>
          {value && value.toFixed(1)}
          {data.append}
        </StyledValue>
*/

const StyledValue = styled.div``

const StyledAcrtionArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-weight: 800;
`

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 15px 1fr;
  height: 15px;
`

const StyledName = styled.div`
  font-size: 12px;
  font-weight: 200;
  padding-left: 5px;
`

const StyledButtonLeft = styled.div`
  cursor: pointer;
  color: var(--color-primary);

  margin-top: -3px;
  svg:active {
    transform: scale(0.75);
    transition: 0.3s;
  }
`

const StyledButtonRight = styled.div`
  cursor: pointer;
  color: var(--color-primary);
  margin-top: -3px;
  svg:active {
    transform: scale(0.75);
    transition: 0.3s;
  }
`
