import switchApiState from '../services/switchApiState'
import setApiState from '../services/setApiState'
import { useEffect, useState } from 'react'

export default function useNodeStates() {
  const [nodeStates, setNodeStates] = useState([])

  return {
    nodeStates,
    setNodeStates,
    getNodeState,
    setNewNodeState,
    toogleNodeState,
    loadApiNodeStates,
  }

  function getNodeState(nodeName) {
    if (nodeStates.length >= 1) {
      let searchState = nodeStates.filter((state) => state.node === nodeName)
      return searchState[0].value
    }
  }

  function setNewNodeState(nodeToChange, newValue) {
    setApiState(nodeToChange, newValue)
    let index = nodeStates.findIndex((state) => state.node === nodeToChange)
    setNodeStates([
      ...nodeStates.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...nodeStates.slice(index + 1),
    ])
    console.log('NEW STATE:', nodeStates)
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
      'http://192.168.178.60:8087/get/system.adapter.admin.0.alive,deconz.0.Lights.1.on,deconz.0.Lights.21.on'
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
