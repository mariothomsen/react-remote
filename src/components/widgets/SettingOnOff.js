import styled from 'styled-components/macro'
import useNodeStates from './../../hooks/useNodeStates'
import { useEffect, useState } from 'react'

export default function Setting({ data }) {
  const { updateLocalNode, updateApiNode } = useNodeStates()
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(data.value)
  }, [data])

  return (
    <StyledDiv>
      <StyledName>{data.text}</StyledName>
      <div></div>
      <StyledSwitchArea>
        <StyledOn
          onClick={() => handleRadioChange(data.node, true)}
          cvalue={value}
        >
          AN
        </StyledOn>
        <StyledOff
          onClick={() => handleRadioChange(data.node, false)}
          cvalue={value}
        >
          AUS
        </StyledOff>
      </StyledSwitchArea>
    </StyledDiv>
  )

  function handleRadioChange(node, status) {
    setValue(status)
    updateApiNode(node, status)
    updateLocalNode(node, status)
  }
}
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 15px 1fr;
  align-items: center;
  font-weight: 600;
  height: 15px;
`
const StyledSwitchArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const StyledOn = styled.div`
  justify-self: center;
  cursor: pointer;
  color: ${(props) => (props.cvalue ? 'var(--color-primary)' : '#424242cc')};
  transition: color 0.3s ease-out;
`
const StyledOff = styled.div`
  justify-self: center;
  cursor: pointer;
  color: ${(props) => (!props.cvalue ? 'var(--color-primary)' : '#424242cc')};
  transition: color 0.3s ease-out;
`

const StyledName = styled.div`
  font-size: 12px;
  font-weight: 200;
  padding-left: 5px;
`

/*
      <StyledRadioSwitch
        node={data.node}
        onChange={(event) => handleRadioChange(event, data.node)}
        currentValue={value}
        buttonstyle="flat"
        keyForSwitch={'settings-' + data.text}
        options={[
          {
            value: true,
            icon: 'AN',
          },
          {
            value: false,
            icon: 'AUS',
          },
        ]}
      />

*/
