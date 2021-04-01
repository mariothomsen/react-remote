import styled from 'styled-components/macro'
import RadioSwitch from './../RadioSwitch'

export default function Setting({ roomData }) {
  return roomData.settings.map((roomSetting) => (
    <StyledDiv>
      <StyledName>{roomSetting.text}</StyledName>
      <div></div>
      <StyledRadioSwitch
        node={roomSetting.node}
        onChange={(event) => handleRadioChange(event, roomSetting.node)}
        currentValue={roomSetting.value}
        buttonstyle="flat"
        roomName={roomData.name}
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
    </StyledDiv>
  ))

  function handleRadioChange(event, node) {
    var status = ''
    if (event.target.value === 'true') {
      status = true
    } else {
      status = false
    }

    roomData.updateApiNode(node, status)
    roomData.updateLocalNode(node, status)
  }
}
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 15px 1fr;
  align-items: center;
  margin-bottom: 10px;
`
const StyledRadioSwitch = styled(RadioSwitch)``

const StyledName = styled.div`
  font-weight: 200;
  padding-left: 5px;
`
