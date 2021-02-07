import switchApiState from '../services/switchApiState'
import setApiState from '../services/setApiState'
import { useEffect, useState } from 'react'

export default function useNodeStates() {
  const [nodeStates, setNodeStates] = useState([])

  return {
    nodeStates,
    setNodeStates,
    getNodeState,
    updateApiNode,
    updateLocalNode,
    toogleNodeState,
    loadApiNodeStates,
  }

  function getNodeState(nodeName) {
    if (nodeStates.length >= 1) {
      let searchState = nodeStates.filter((state) => state.node === nodeName)
      return searchState[0].value
    }
  }

  function updateLocalNode(nodeToChange, newValue) {
    let index = nodeStates.findIndex((state) => state.node === nodeToChange)
    setNodeStates([
      ...nodeStates.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...nodeStates.slice(index + 1),
    ])
    console.log('updateNodeState  - nodeToChange:', nodeToChange)
    console.log('updateNodeState  - newValue:', newValue)
  }

  function updateApiNode(nodeToChange, newValue) {
    setApiState(nodeToChange, newValue)
    console.log('setApiNodeState  - nodeToChange:', nodeToChange)
    console.log('setApiNodeState  - newValue:', newValue)
  }

  function toogleNodeState(nodeToChange) {
    switchApiState(nodeToChange)
    let index = nodeStates.findIndex((state) => state.node === nodeToChange)
    let changedState = nodeStates[index]
    let newValue = !changedState.value
    setNodeStates([
      ...nodeStates.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...nodeStates.slice(index + 1),
    ])
    console.log('NEW STATE:', nodeStates)
  }

  /********************************************** */

  function loadApiNodeStates() {
    fetch(
      'http://192.168.178.60:8087/get/system.adapter.admin.0.alive,deconz.0.Lights.1.on,deconz.0.Lights.21.on,alexa2.0.Echo-Devices.G0911M0793172126.Player.volume,deconz.0.Sensors.11.temperature,javascript.0.lights.büro.current,alexa2.0.Echo-Devices.G090VP04851402VS.Player.currentState,alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState,javascript.0.klima.büroTargetTemp,alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
    )
      .then((res) => res.json())
      .then((data) => setNodeStates(buildNodeStates(data)))
      .catch((error) => console.log(error))
  }

  function buildNodeStates(data) {
    let nodeStates = []
    for (let entry in data) {
      nodeStates = [
        ...nodeStates,
        { node: data[entry]._id, value: data[entry].val },
      ]
    }
    console.log('State on Load ', nodeStates)
    return nodeStates
  }
}
