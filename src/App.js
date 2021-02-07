import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { RiTempColdLine } from 'react-icons/ri'
import { BiRadio } from 'react-icons/bi'

import useNodeStates from './hooks/useNodeStates'
import useOverlay from './hooks/useOverlay'

import SwitchButton from './components/SwitchButton'
import Card from './components/Card'
import CardHead from './components/CardHead'
import Slider from './components/Slider'
import Layout from './components/Layout'
import Overlay from './components/Overlay'
import {
  s42828,
  s24855,
  s24885,
  s120806,
  s18018,
  s78204,
} from './components/radioLogos'

import LightWidget from './components/widgets/LightWidget'
import RadioOverlayMenu from './components/widgets/RadioOverlayMenu'
import HeatingOverlay from './components/widgets/HeatingOverlay'
import VolumneSlider from './components/widgets/VolumneSlider'

function App() {
  const {
    nodeStates,
    getNodeState,
    updateApiNode,
    updateLocalNode,
    loadApiNodeStates,
  } = useNodeStates()

  const {
    overlayStatus,
    setOverlayStatus,
    overlayContent,
    setOverlayContent,
  } = useOverlay()

  var interval
  useEffect(() => {
    loadApiNodeStates()
    clearInterval(interval)
    interval = setInterval(() => {
      loadApiNodeStates()
    }, 5000)
  }, [])

  useEffect(() => {}, [nodeStates])

  var data = {
    /************************ WOHNZIMMER *************************/
    wohnzimmer: {
      name: 'büro',
      infos: [
        {
          value: getNodeState('deconz.0.Sensors.11.temperature'),
          unit: '°',
        },
        {
          value: getNodeState(
            'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
          ),
          unit: 'v',
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
  }

  function roomTemplate(roomName) {
    return (
      <main>
        <Card>
          <CardHead
            headline={data[roomName].name}
            infos={data[roomName].infos}
          />
          <Layout layout="1fr 15px 1fr 15px 2fr">
            <SwitchButton
              onClick={() => handleRadio(data[roomName])}
              value={data[roomName].radioValue}
              children={<BiRadio size="15" />}
            />
            <div></div>
            <SwitchButton
              onClick={() => handleHeating(data[roomName])}
              value={false}
              children={<RiTempColdLine size="15" />}
            />
            <div></div>
            <LightWidget roomData={data[roomName]} />
          </Layout>
          <VolumneSlider
            onChange={data[roomName]}
            min="0"
            max="100"
            step="10"
            roomData={data[roomName]}
          ></VolumneSlider>
        </Card>
      </main>
    )
  }

  function handleRadio(roomData) {
    setOverlayContent(<RadioOverlayMenu roomData={roomData}></RadioOverlayMenu>)
    setOverlayStatus(true)
  }

  function handleHeating(roomData) {
    setOverlayContent(<HeatingOverlay roomData={roomData}></HeatingOverlay>)
    setOverlayStatus(true)
  }

  if (data['wohnzimmer']) {
    return (
      <StyledApp className="App">
        <Overlay status={overlayStatus} onClick={() => setOverlayStatus(false)}>
          {overlayContent}
        </Overlay>
        <br></br>
        {roomTemplate('wohnzimmer')}
        <br></br>
      </StyledApp>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default App

const StyledApp = styled.div``

/*

 <Card>
          <CardHead
            headline="wohnzimmer"
            infos={[
              {
                value: getNodeState('deconz.0.Sensors.11.temperature'),
                unit: '°',
              },
              {
                value: getNodeState(
                  'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
                ),
                unit: 'v',
              },
            ]}
          />
          <Layout layout="1fr 15px 1fr 15px 2fr">
            <SwitchButton
              node="deconz.0.Lights.21.on"
              onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
              value={getNodeState('deconz.0.Lights.21.on')}
              children={<BiRadio size="15" />}
            />
            <div></div>
            <SwitchButton
              node="deconz.0.Lights.21.on"
              onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
              value={getNodeState('deconz.0.Lights.21.on')}
              children={<RiTempColdLine size="14" />}
            />
            <div></div>
            <SwitchAndDropDown
              layout="2fr 1fr"
              onClick={setNewNodeState}
              menu={[
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
              ]}
            >
              <RadioSwitch
                node="deconz.0.Lights.1.on"
                onChange={setNewNodeState}
                targetStates={[
                  { value: true, icon: <HiLightBulb size="18" /> },
                  { value: false, icon: <HiOutlineLightBulb size="18" /> },
                ]}
                currentState={getNodeState('deconz.0.Lights.1.on')}
              />
            </SwitchAndDropDown>
          </Layout>
          <Slider
            node="alexa2.0.Echo-Devices.G0911M0793172126.Player.volume"
            onChange={setNewNodeState}
            value={getNodeState(
              'alexa2.0.Echo-Devices.G0911M0793172126.Player.volume'
            )}
          ></Slider>
        </Card>

*/
