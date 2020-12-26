import { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa'
import useNodeStates from './hooks/useNodeStates'
import RadioSwitch from './components/RadioSwitch'
import SwitchButton from './components/SwitchButton'
import DropDownButton from './components/DropDownButton'
import SwitchAndDropDown from './components/SwitchAndDropDown'

function App() {
  const {
    nodeStates,
    getNodeState,
    setNewNodeState,
    toogleNodeState,
    loadApiNodeStates,
  } = useNodeStates()

  useEffect(() => {
    loadApiNodeStates()
  }, [])

  useEffect(() => {
    console.log('states', nodeStates)
  }, [nodeStates])

  return (
    <div className="App">
      <SwitchButton
        onClick={() => toogleNodeState('deconz.0.Lights.1.on')}
        node="deconz.0.Lights.1.on"
        value={getNodeState('deconz.0.Lights.1.on')}
        children={<FaBeer></FaBeer>}
      />
      <br></br>
      <br></br>

      <br></br>
      <DropDownButton></DropDownButton>
      <br></br>
      <br></br>
      <RadioSwitch
        node="deconz.0.Lights.1.on"
        targetStates={[true, false, 3, 4, 5]}
        currentState={getNodeState('deconz.0.Lights.1.on')}
        onChange={setNewNodeState}
      />
      <br></br>
      <SwitchAndDropDown>
        {' '}
        <RadioSwitch
          node="deconz.0.Lights.1.on"
          targetStates={[true, false, 3, 4, 5]}
          currentState={getNodeState('deconz.0.Lights.1.on')}
          onChange={setNewNodeState}
        />
      </SwitchAndDropDown>
      <br></br>
    </div>
  )
}

export default App
