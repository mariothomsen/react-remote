import { useEffect } from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

import { RiTempColdLine } from 'react-icons/ri'
import { BiRadio } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'
import { BsList } from 'react-icons/bs'

import useApiStates from './hooks/useApiStates'
import useRoomData from './hooks/useRoomData'
import useOverlay from './hooks/useOverlay'

import SwitchButton from './components/SwitchButton'
import Card from './components/Card'
import CardHead from './components/widgets/CardHead'
import Layout from './components/Layout'
import Overlay from './components/Overlay'
import DropDownButton from './components/DropDownButton'

import LightWidget from './components/widgets/LightWidget'
import RadioOverlayMenu from './components/widgets/RadioOverlayMenu'
import HeatingOverlay from './components/widgets/HeatingOverlay'
import VolumneSlider from './components/widgets/VolumneSlider'
import Footer from './components/Footer'

function App() {
  //
  const {
    apiStates,
    getApiState,
    updateApiState,
    updateLocalState,
    loadApiStates,
    toggleApiState,
  } = useApiStates()

  const { roomData } = useRoomData(
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
      console.log('OnLoad...', apiStates)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [apiStates])

  function roomTemplateV1(roomName) {
    return (
      <main>
        <Card>
          <CardHead roomData={roomData[roomName]} />
          <Layout layout="1fr 15px 1fr">
            <Layout layout="1fr 15px 1fr">
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
            </Layout>
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

  function roomTemplateWZ(roomName) {
    return (
      <main>
        <Card>
          <CardHead roomData={roomData[roomName]} />
          <Layout layout="1fr 15px 1fr">
            <Layout layout="1fr 15px 1fr">
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
            </Layout>
            <div></div>
            <LightWidget roomData={roomData[roomName]} />
          </Layout>
          <br></br>
          <Layout layout="1fr 15px 1fr ">
            <SwitchButton
              onClick={() => handleTVClick(roomData[roomName])}
              value={roomData[roomName].tvState}
              children={<FiMonitor size="15" />}
            />
            <div></div>
            <LightWidget roomData={roomData['terrasse']} />
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
  function handleMenuChange(node, value) {
    roomData.updateApiNode(roomData.lightHandler, value)
  }

  function roomTemplateWG(roomName) {
    return (
      <main>
        <Card>
          <CardHead roomData={roomData[roomName]} />
          <Layout layout="1fr 15px 1fr 15px 1fr ">
            <SwitchButton
              onClick={() => handleRadioClick(roomData['wohnung'])}
              value={roomData['wohnung'].radioValue}
              children={
                <>
                  <BiRadio size="15" />
                  <span>Wohnung</span>
                </>
              }
            />
            <div></div>
            <SwitchButton
              onClick={() => handleRadioClick(roomData['südflügel'])}
              value={roomData['südflügel'].radioValue}
              children={
                <>
                  <BiRadio size="15" />
                  <span>Südflügel</span>
                </>
              }
            />
            <div></div>
            <DropDownButton
              onClick={handleMenuChange}
              menu={roomData[roomName].ddmenu}
              children={
                <>
                  <BsList size="15" />
                  <span>Szenen</span>
                </>
              }
            />
          </Layout>
        </Card>
      </main>
    )
  }

  /** MAIN **/
  if (roomData['büro']) {
    return (
      <StyledApp className="App">
        <Switch>
          <Route exact path="/">
            <Overlay
              status={overlayStatus}
              onClick={() => setOverlayStatus(false)}
            >
              {overlayContent}
            </Overlay>
            {roomTemplateWG('wohnung')}
            {roomTemplateV1('büro')}
            {roomTemplateWZ('wohnzimmer')}
            {roomTemplateV1('küche')}
            {roomTemplateV1('badezimmer')}
            {roomTemplateV1('schlafzimmer')}
            <Footer></Footer>
          </Route>
          <Route exact path="/klima">
            <Overlay
              status={overlayStatus}
              onClick={() => setOverlayStatus(false)}
            >
              {overlayContent}
            </Overlay>
            Klima...
          </Route>
        </Switch>
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

  function handleTVClick(roomData) {
    console.log(roomData.tvState)
    roomData.tvState
      ? updateApiState(roomData.tvHandler, 'powerOff')
      : updateApiState(roomData.tvHandler, 'powerOn')
  }
}

export default App
const StyledApp = styled.div``
