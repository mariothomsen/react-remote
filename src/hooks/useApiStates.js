import switchApiState from '../services/switchApiState'
import setApiState from '../services/setApiState'
import getApiStates from '../services/getApiStates'
import { useState } from 'react'

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
      if (searchState.length) {
        return searchState[0].value
      } else {
        console.error('ERROR - State not found: ', nodeName)
      }
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
  }

  /********************************************** */

  function loadApiStates() {
    const echos = {
      wohnung: 'b3facf1955ff465cb9a1581c8b15f6fd',
      südflügel: 'f4cf13c2be114f4fa0ff7a0a9e9530ac',
      büro: 'G090VP048417012P',
      wohnzimmer: 'G090XG0793243824',
      küche: 'G090VP04851402VS',
      badezimmer: 'G0911M079317235D',
      schlafzimmer: 'G0911W0794162UBK',
    }

    const nodes = [
      /* Büro */
      'javascript.0.klima.büroTemp',
      'javascript.0.klima.büroTargetTemp',
      'javascript.0.lights.büro.current',
      'javascript.0.klima.büroHumidity',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.currentArtist',
      /* Küche */
      'javascript.0.klima.kücheTemp',
      'javascript.0.klima.kücheTargetTemp',
      'javascript.0.lights.küche.current',
      'javascript.0.klima.kücheHumidity',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.currentArtist',
      /* Badezimmer */
      'javascript.0.klima.badezimmerTemp',
      'javascript.0.klima.badezimmerTargetTemp',
      'javascript.0.lights.badezimmer.current',
      'javascript.0.klima.badezimmerHumidity',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.currentArtist',
      /* Küche */
      'javascript.0.klima.schlafzimmerTemp',
      'javascript.0.klima.schlafzimmerTargetTemp',
      'javascript.0.lights.schlafzimmer.current',
      'javascript.0.klima.schlafzimmerHumidity',
      'alexa2.0.Echo-Devices.' + echos['schlafzimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['schlafzimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' +
        echos['schlafzimmer'] +
        '.Player.currentArtist',
      /* Wohnzimmer */
      'javascript.0.klima.wohnzimmerTemp',
      'javascript.0.klima.wohnzimmerTargetTemp',
      'javascript.0.lights.wohnzimmer.current',
      'javascript.0.lights.terrasse.current',
      'javascript.0.klima.wohnzimmerHumidity',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.currentArtist',
      'javascript.0.statusInfos.tvon',
      /* Wohnung */
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.currentArtist',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.currentArtist',
      'javascript.0.klima.terasseTemp',
      'javascript.0.statusInfos.tempInnen',
    ]
    let urlPart = ''
    nodes.forEach((node) => {
      urlPart += ',' + node
    })
    const url =
      'http://192.168.178.60:8087/get/system.adapter.admin.0.alive' + urlPart

    //console.log(url)
    getApiStates(url)
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
    return apiStates
  }
}
