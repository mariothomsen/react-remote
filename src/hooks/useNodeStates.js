import setApiNodeValue from '../services/setApiNodeValue'
import getApiNodeValues from '../services/getApiNodeValues'
import { useState } from 'react'
import exampleResponse from '../data/exampleResponse.json'
export default function useNodeStates() {
  const [localNodes, setLocalNodes] = useState([])

  return {
    localNodes,
    setLocalNodes,
    getLocalNode,
    updateLocalNode,
    updateApiNode,
    loadApiNodeValues,
  }

  function getLocalNode(nodeName) {
    if (localNodes.length >= 1) {
      let searchState = localNodes.filter((state) => state.node === nodeName)
      if (searchState.length) {
        return searchState[0].value
      } else {
        console.error('ERROR - State not found: ', nodeName)
      }
    } else {
      return 0
    }
  }

  function updateLocalNode(nodeToChange, newValue) {
    let index = localNodes.findIndex((state) => state.node === nodeToChange)
    setLocalNodes([
      ...localNodes.slice(0, index),
      { node: nodeToChange, value: newValue },
      ...localNodes.slice(index + 1),
    ])
    console.log(
      'update local node: ' + nodeToChange + ', value: ' + newValue + ')'
    )
  }

  function updateApiNode(nodeToChange, newValue) {
    setApiNodeValue(nodeToChange, newValue)
    console.log('update api node: ' + nodeToChange + ', value: ' + newValue)
  }

  // function toggleApiState(nodeToChange) {
  //   switchApiState(nodeToChange)
  //   let index = localNodes.findIndex((state) => state.node === nodeToChange)
  //   let changedState = localNodes[index]
  //   let newValue = !changedState.value
  //   setLocalNodes([
  //     ...localNodes.slice(0, index),
  //     { node: nodeToChange, value: newValue },
  //     ...localNodes.slice(index + 1),
  //   ])
  // }

  /********************************************** */

  function loadApiNodeValues() {

    const echos = {
      wohnung: 'b3facf1955ff465cb9a1581c8b15f6fd',
      südflügel: 'f4cf13c2be114f4fa0ff7a0a9e9530ac',
      büro: 'G090VP048417012P',
      wohnzimmer: 'G090XG0793243824',
      küche: 'G090VP04851402VS',
      badezimmer: 'G0911M079317235D',
      schlafzimmer: 'G0911W0794162UBK',
    }

    const windowContacts = {
      wohnzimmer: 'contact_197c63',
      küche: 'contact_18de74',
      badezimmer: 'contact_18de81',
      schlafzimmer: 'contact_193593',
      büro: 'contact_18de48',
    }

    const nodes = [
      /* Büro */
      'javascript.0.klima.büroTemp',
      'javascript.0.klima.büroTargetTemp',
      'javascript.0.klima.büroHumidity',
      'javascript.0.lights.büro.current',
      'javascript.0.lights.büro.autoMode',
      'maxcube.0.devices.' + windowContacts['büro'] + '.opened',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['büro'] + '.Player.currentArtist',
      /* Küche */
      'javascript.0.klima.kücheTemp',
      'javascript.0.klima.kücheTargetTemp',
      'javascript.0.klima.kücheHumidity',
      'javascript.0.lights.küche.current',
      'javascript.0.lights.küche.autoMode',
      'maxcube.0.devices.' + windowContacts['küche'] + '.opened',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['küche'] + '.Player.currentArtist',
      /* Badezimmer */
      'javascript.0.klima.badezimmerTemp',
      'javascript.0.klima.badezimmerTargetTemp',
      'javascript.0.klima.badezimmerHumidity',
      'javascript.0.lights.badezimmer.current',
      'javascript.0.lights.badezimmer.autoMode',
      'maxcube.0.devices.' + windowContacts['badezimmer'] + '.opened',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['badezimmer'] + '.Player.currentArtist',
      /* Küche */
      'javascript.0.klima.schlafzimmerTemp',
      'javascript.0.klima.schlafzimmerTargetTemp',
      'javascript.0.klima.schlafzimmerHumidity',
      'javascript.0.lights.schlafzimmer.current',
      'javascript.0.lights.schlafzimmer.autoMode',
      'maxcube.0.devices.' + windowContacts['schlafzimmer'] + '.opened',
      'alexa2.0.Echo-Devices.' + echos['schlafzimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['schlafzimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' +
      echos['schlafzimmer'] +
      '.Player.currentArtist',
      /* Wohnzimmer */
      'javascript.0.klima.wohnzimmerTemp',
      'javascript.0.klima.wohnzimmerTargetTemp',
      'javascript.0.lights.wohnzimmer.current',
      'javascript.0.klima.wohnzimmerHumidity',
      'javascript.0.lights.terrasse.current',
      'javascript.0.lights.wohnzimmer.autoMode',
      'maxcube.0.devices.' + windowContacts['wohnzimmer'] + '.opened',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['wohnzimmer'] + '.Player.currentArtist',
      'javascript.0.statusInfos.tvon',
      /* Wohnung & Sonstiges */
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['wohnung'] + '.Player.currentArtist',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.volume',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.currentState',
      'alexa2.0.Echo-Devices.' + echos['südflügel'] + '.Player.currentArtist',
      'javascript.0.klima.terasseTemp',
      'javascript.0.statusInfos.tempInnen',
      'javascript.0.klima.autoMode',
      'javascript.0.settings.radio.automatic',
    ]
    let urlPart = ''
    nodes.forEach((node) => {
      urlPart += ',' + node
    })

    if (process.env.REACT_APP_LOAD_EXAMPLE_DATA === 'true') {
      console.log('Load dummy data...')
      setLocalNodes(buildLocalNodeObj(exampleResponse))
    } else {
      getApiNodeValues(urlPart)
        .then((res) => res.json())
        .then((data) => setLocalNodes(buildLocalNodeObj(data)))
        .catch((error) => console.log(error))
    }
  }

  function buildLocalNodeObj(data) {
    let localNodes = []
    for (let entry in data) {
      localNodes = [
        ...localNodes,
        { node: data[entry]._id, value: data[entry].val },
      ]
    }
    //console.log(localNodes)
    return localNodes
  }
}
