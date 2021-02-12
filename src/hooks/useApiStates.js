import switchApiState from '../services/switchApiState'
import setApiState from '../services/setApiState'
import { useEffect, useState } from 'react'

export default function useNodeStates() {
  const [apiStates, setApiStates] = useState([])

  return {
    apiStates,
    setApiStates,
    getApiState,
    updateApiState,
    updateLocalState,
    toggleApiState,
    loadApiStates,
  }

  function getApiState(nodeName) {
    if (apiStates.length >= 1) {
      let searchState = apiStates.filter((state) => state.node === nodeName)
      return searchState[0].value
    } else {
      return 0
    }
  }

  function updateLocalState(nodeToChange, newValue) {
    let index = apiStates.findIndex((state) => state.node === nodeToChange)
    setApiStates([
      ...apiStates.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...apiStates.slice(index + 1),
    ])
    console.log(
      'updateNodeState: ' + nodeToChange + ', value: ' + newValue + ')'
    )
  }

  function updateApiState(nodeToChange, newValue) {
    setApiState(nodeToChange, newValue)
    console.log('updateNodeState: ' + nodeToChange + ', value: ' + newValue)
  }

  function toggleApiState(nodeToChange) {
    switchApiState(nodeToChange)
    let index = apiStates.findIndex((state) => state.node === nodeToChange)
    let changedState = apiStates[index]
    let newValue = !changedState.value
    setApiStates([
      ...apiStates.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...apiStates.slice(index + 1),
    ])
    console.log('NEW STATE:', apiStates)
  }

  /********************************************** */

  function loadApiStates() {
    const nodes = [
      'javascript.0.klima.büroTemp',
      'javascript.0.klima.büroTargetTemp',
      'javascript.0.lights.büro.current',
      'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume',
      'alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState',
    ]
    let urlPart = ''
    nodes.forEach((node) => {
      urlPart += ',' + node
    })
    const url =
      'http://192.168.178.60:8087/get/system.adapter.admin.0.alive' + urlPart

    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApiStates(buildNodeStates(data)))
      .catch((error) => console.log(error))
  }

  function buildNodeStates(data) {
    let apiStates = []
    for (let entry in data) {
      apiStates = [
        ...apiStates,
        { node: data[entry]._id, value: data[entry].val },
      ]
    }
    //console.log('State on Load ', nodeStates)
    return apiStates
  }
}
