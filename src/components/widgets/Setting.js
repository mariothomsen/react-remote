import styled from 'styled-components/macro'
import RadioSwitch from './../RadioSwitch'

export default function Setting({ roomData }) {
  return (
    <StyledDiv>
      <StyledName>Automatisches Licht</StyledName>
      <div></div>
      <StyledRadioSwitch
        node={roomData.settings}
        onChange={handleRadioChange}
        currentValue={roomData.value}
        mykey="roomName"
        options={[
          {
            value: true,
            icon: 'ON',
          },
          {
            value: false,
            icon: 'OFF',
          },
        ]}
      />
    </StyledDiv>
  )

  function handleRadioChange(event) {
    console.log(event.target.value)
    // var status = ''
    // if (event.target.value === 'true') {
    //   status = true
    // } else {
    //   status = false
    // }

    // let handlerValueApi = status ? roomData.name + '.on' : roomData.name + '.0'
    // let handlerValueLocal = status ? 1 : 0

    // roomData.updateApiNode(roomData.lightHandler, handlerValueApi)
    // roomData.updateLocalNode(roomData.lightNode, handlerValueLocal)
  }
}
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 15px 1fr;
  align-items: center;
`
const StyledRadioSwitch = styled(RadioSwitch)``

const StyledName = styled.div`
  font-weight: 200;
  padding-left: 5px;
`

/*
  <input
            id={mykey + '-' + index}
            onChange={onChange}
            type="radio"
            value={option.value}
            checked={option.value === currentValue}
          />

*/
