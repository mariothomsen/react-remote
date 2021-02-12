import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { RiTempColdLine } from 'react-icons/ri'
import { BiRadio } from 'react-icons/bi'

import useApiStates from './hooks/useApiStates'
import useRoomConfig from './hooks/useRoomConfig'
import useOverlay from './hooks/useOverlay'

import SwitchButton from './components/SwitchButton'
import Card from './components/Card'
import CardHead from './components/CardHead'
import Layout from './components/Layout'
import Overlay from './components/Overlay'

import LightWidget from './components/widgets/LightWidget'
import RadioOverlayMenu from './components/widgets/RadioOverlayMenu'
import HeatingOverlay from './components/widgets/HeatingOverlay'
import VolumneSlider from './components/widgets/VolumneSlider'

function App() {
  //
  const {
    apiStates,
    getApiState,
    updateApiState,
    updateLocalState,
    loadApiStates,
  } = useApiStates()

  const { roomData } = useRoomConfig(
    getApiState,
    updateApiState,
    updateLocalState
  )

  const {
    overlayStatus,
    setOverlayStatus,
    overlayContent,
    setOverlayContent,
  } = useOverlay()

  // On load
  useEffect(() => {
    console.log('OnLoad...', apiStates)
    loadApiStates()
  }, [])

  // Refresh states
  var interval
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      loadApiStates()
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [apiStates])

  function roomTemplateV1(roomName) {
    return (
      <main>
        <Card>
          <CardHead
            headline={roomData[roomName].name}
            infos={roomData[roomName].infos}
          />
          <Layout layout="1fr 15px 1fr 15px 2fr">
            <SwitchButton
              onClick={() => handleRadioClick(roomData[roomName])}
              value={roomData[roomName].radioValue}
              children={<BiRadio size="15" />}
            />
            <div></div>
            <SwitchButton
              onClick={() => handleHeatingClick(roomData[roomName])}
              value={false}
              children={<RiTempColdLine size="15" />}
            />
            <div></div>
            <LightWidget roomData={roomData[roomName]} />
          </Layout>
          <VolumneSlider
            onChange={roomData[roomName]}
            min="0"
            max="100"
            step="10"
            roomData={roomData[roomName]}
          ></VolumneSlider>
        </Card>
      </main>
    )
  }

  /** MAIN **/
  if (roomData['buero']) {
    return (
      <StyledApp className="App">
        <Overlay status={overlayStatus} onClick={() => setOverlayStatus(false)}>
          {overlayContent}
        </Overlay>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        {roomTemplateV1('buero')}
      </StyledApp>
    )
  } else {
    return <div>Loading...</div>
  }

  function handleRadioClick(roomData) {
    setOverlayContent(<RadioOverlayMenu roomData={roomData}></RadioOverlayMenu>)
    setOverlayStatus(true)
  }

  function handleHeatingClick(roomData) {
    setOverlayContent(<HeatingOverlay roomData={roomData}></HeatingOverlay>)
    setOverlayStatus(true)
  }
}

export default App
const StyledApp = styled.div``
