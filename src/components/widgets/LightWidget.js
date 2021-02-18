import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi'
import SwitchAndDropDown from './../SwitchAndDropDown'
import RadioSwitch from './../RadioSwitch'

export default function LightWidget({ roomData }) {
  let lightStatus = false
  if (roomData.lightValue > 0) {
    lightStatus = true
  }

  return (
    <SwitchAndDropDown
      layout={roomData.lightWidgetLayout}
      onClick={handleMenuChange}
      menu={roomData.lightMenu}
    >
      <RadioSwitch
        node={roomData.lightHandler}
        onChange={handleRadioChange}
        currentValue={lightStatus}
        mykey={roomData.name}
        options={[
          {
            value: true,
            icon: <HiLightBulb size="18" />,
          },
          {
            value: false,
            icon: <HiOutlineLightBulb size="18" color="#886936" />,
          },
        ]}
      />
    </SwitchAndDropDown>
  )

  function handleRadioChange(event) {
    var status = ''
    if (event.target.value === 'true') {
      status = true
    } else {
      status = false
    }

    let handlerValueApi = status ? roomData.name + '.on' : roomData.name + '.0'
    let handlerValueLocal = status ? 1 : 0

    roomData.updateApiNode(roomData.lightHandler, handlerValueApi)
    roomData.updateLocalNode(roomData.lightNode, handlerValueLocal)
  }

  function handleMenuChange(node, value) {
    roomData.updateApiNode(roomData.lightHandler, value)
  }
}
