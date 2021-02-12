import { useState } from 'react'
import {
  s42828,
  s24855,
  s24885,
  s120806,
  s18018,
  s78204,
} from '../components/radioLogos'

export default function useRoomConfig(
  getApiState,
  updateApiState,
  updateLocalState
) {
  var data = {
    /************************ BÜRO *************************/
    buero: {
      name: 'büro',
      infos: [
        {
          value:
            getApiState('javascript.0.klima.büroTemp').toFixed(1) +
            '° / ' +
            getApiState('javascript.0.klima.büroTargetTemp').toFixed(1),
          unit: '°',
        },
        {
          value: getApiState('javascript.0.klima.büroTargetTemp'),
          unit: '°',
        },
      ],
      lightHandler: 'javascript.0.handler.lights',
      lightValue: getApiState('javascript.0.lights.büro.current'),
      lightNode: 'javascript.0.lights.büro.current',
      lightWidgetLayout: '2fr 1fr',
      lightMenu: [
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
        {
          node: 'javascript.0.handler.lights',
          text: 'Meeting',
          color: '#e3f2ff',
          icon: '',
          targetState: 'büro.6',
        },
      ],
      volumneValue: getApiState(
        'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
      ),
      volumneNode: 'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume',
      radioHandler: 'javascript.0.handler.radio',
      radioValue: getApiState(
        'alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState'
      ),
      radioNode: 'alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState',
      radioMenu: [
        {
          node: 'javascript.0.handler.radio',
          text: 'Hamburg Zwei',
          targetState: 'büro.s78204',
          logo: s78204,
        },
        {
          node: 'javascript.0.handler.radio',
          text: 'Radio HH',
          targetState: 'büro.s18018',
          logo: s18018,
        },
        {
          node: 'javascript.0.handler.radio',
          text: 'NDR Info',
          targetState: 'büro.s24885',
          logo: s24885,
        },
        {
          node: 'javascript.0.handler.radio',
          text: 'Deutschlandfunk',
          targetState: 'büro.s42828',
          logo: s42828,
        },
        {
          node: 'javascript.0.handler.radio',
          text: 'DLF Nova',
          targetState: 'büro.s120806',
          logo: s120806,
        },
        {
          node: 'javascript.0.handler.radio',
          text: 'Bayern 2',
          targetState: 'büro.s24855',
          logo: s24855,
        },
      ],
      heatingValue: getApiState('javascript.0.klima.büroTargetTemp'),
      heatingNode: 'javascript.0.klima.büroTargetTemp',
      heatingHandler: 'javascript.0.handler.heating',
      updateApiNode: updateApiState,
      updateLocalNode: updateLocalState,
    },
  }

  return {
    data,
  }
}

/*
var data = {
  buero: {
    name: 'büro',
    infos: [
      {
        value:
          getNodeState('javascript.0.klima.büroTemp').toFixed(0) +
          '° / ' +
          getNodeState('javascript.0.klima.büroTargetTemp'),
        unit: '°',
      },
      {
        value: getNodeState('javascript.0.klima.büroTargetTemp'),
        unit: '°',
      },
    ],
    lightHandler: 'javascript.0.handler.lights',
    lightValue: getNodeState('javascript.0.lights.büro.current'),
    lightNode: 'javascript.0.lights.büro.current',
    lightWidgetLayout: '2fr 1fr',
    lightMenu: [
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
      {
        node: 'javascript.0.handler.lights',
        text: 'Meeting',
        color: '#e3f2ff',
        icon: '',
        targetState: 'büro.6',
      },
    ],
    volumneValue: getNodeState(
      'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getNodeState(
      'alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState'
    ),
    radioNode: 'alexa2.0.Echo-Devices.G090VP048417012P.Player.currentState',
    radioMenu: [
      {
        node: 'javascript.0.handler.radio',
        text: 'Hamburg Zwei',
        targetState: 'büro.s78204',
        logo: s78204,
      },
      {
        node: 'javascript.0.handler.radio',
        text: 'Radio HH',
        targetState: 'büro.s18018',
        logo: s18018,
      },
      {
        node: 'javascript.0.handler.radio',
        text: 'NDR Info',
        targetState: 'büro.s24885',
        logo: s24885,
      },
      {
        node: 'javascript.0.handler.radio',
        text: 'Deutschlandfunk',
        targetState: 'büro.s42828',
        logo: s42828,
      },
      {
        node: 'javascript.0.handler.radio',
        text: 'DLF Nova',
        targetState: 'büro.s120806',
        logo: s120806,
      },
      {
        node: 'javascript.0.handler.radio',
        text: 'Bayern 2',
        targetState: 'büro.s24855',
        logo: s24855,
      },
    ],
    heatingValue: getNodeState('javascript.0.klima.büroTargetTemp'),
    heatingNode: 'javascript.0.klima.büroTargetTemp',
    heatingHandler: 'javascript.0.handler.heating',
    updateApiNode: updateApiNode,
    updateLocalNode: updateLocalNode,
  },
}*/
