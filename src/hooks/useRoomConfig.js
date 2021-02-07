import switchApiState from '../services/switchApiState'
import setApiState from '../services/setApiState'
import { useEffect, useState } from 'react'
import useNodeStates from './useNodeStates'

export default function useRoomConfig() {
  const [roomConfig, setRoomConfig] = useState([])
  useEffect(() => {
    setRoomConfig(data)
  }, [])

  var data = {
    /*****************/
    wohnzimmer: {
      name: 'wohnzimmer',
      infos: [
        {
          value: 'deconz.0.Sensors.11.temperature',
          unit: '°',
        },
        {
          value: 'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume',
          unit: 'v',
        },
      ],
      lightLayout: '2fr 1fr',
      lightProps: [
        {
          node: 'javascript.0.handler.lights',
          text: 'Gemütlich',
          color: '#ffa10070',
          targetState: 'büro.1',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Normal',
          color: 'var(--color-primary)',
          targetState: 'büro.2',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Normal II',
          color: 'var(--color-primary)',
          targetState: 'büro.2',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Hell',
          color: '#e3f2ff',
          icon: '',
          targetState: 'büro.3',
        },
      ],
      heatingNodes: [],
      heatingHandler: '',
    },
  }

  return {
    roomConfig,
  }
}

/*

  var data = [
    {
      name: 'wohnzimmer',
      lightLayout: '2fr 1fr',
      lightProps: [
        {
          node: 'javascript.0.handler.lights',
          text: 'Gemütlich',
          color: '#ffa10070',
          targetState: 'büro.1',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Normal',
          color: 'var(--color-primary)',
          targetState: 'büro.2',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Normal II',
          color: 'var(--color-primary)',
          targetState: 'büro.2',
        },
        {
          node: 'javascript.0.handler.lights',
          text: 'Hell',
          color: '#e3f2ff',
          icon: '',
          targetState: 'büro.3',
        },
      ],
      heatingNodes: [],
      heatingHandler: '',
    },
  ]

*/
