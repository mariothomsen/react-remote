import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

import { RiTempColdLine } from 'react-icons/ri'
import { BiRadio } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'
import { BsList } from 'react-icons/bs'

import useApiStates from './hooks/useApiStates'
import useRoomData from './hooks/useRoomData'
import useOverlay from './hooks/useOverlay'

import Header from './components/Header'
import Footer from './components/Footer'
import SwitchButton from './components/SwitchButton'
import Card from './components/Card'
import Layout from './components/Layout'
import Overlay from './components/Overlay'
import DropDownButton from './components/DropDownButton'

import Setting from './components/widgets/Setting'
import CardHead from './components/widgets/CardHead'
import LightWidget from './components/widgets/LightWidget'
import RadioOverlayMenu from './components/widgets/RadioOverlayMenu'
import HeatingOverlay from './components/widgets/HeatingOverlay'
import VolumneSlider from './components/widgets/VolumneSlider'
import FloatGraph from './components/widgets/FloatGraph'

import CardExtension from './components/CardExtension'

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    document.title = 'D // James'
  }

  const {
    apiStates,
    getApiState,
    updateApiState,
    updateLocalState,
    loadApiStates,
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

  useEffect(() => {
    loadApiStates()
  }, [])

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

  const [extensionState, setExtensionState] = useState({
    wohnzimmer: false,
    wohnung: false,
    büro: false,
    küche: false,
    schlafzimmer: false,
    badezimmer: false,
  })

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
            <Header></Header>
            <StyledMain>
              <Layout layout="1fr 1fr" desktopLayout="1fr">
                <div>
                  {cardTemplateWhg('wohnung')}
                  {cardTemplateWhz('wohnzimmer')}
                  {cardTemplateBasic('büro')}
                </div>
                <div>
                  {cardTemplateBasic('küche')}
                  {cardTemplateBasic('badezimmer')}
                  {cardTemplateBasic('schlafzimmer')}
                </div>
              </Layout>
            </StyledMain>
            <Footer></Footer>
          </Route>
          <Route exact path="/klima">
            <Overlay
              status={overlayStatus}
              onClick={() => setOverlayStatus(false)}
            >
              {overlayContent}
            </Overlay>
            <Card>
              <FloatGraph
                headline="Temperatur - Innen"
                url="http://192.168.178.60:8082/flot/index.html?range=1440&zoom=false&axeX=lines&axeY=inside&hoverDetail=true&aggregate=onchange&chartType=step&live=30&instance=sql.0&l%5B0%5D%5Bid%5D=javascript.0.klima.wohnzimmerTemp&l%5B0%5D%5Boffset%5D=0&l%5B0%5D%5Baggregate%5D=minmax&l%5B0%5D%5Bcolor%5D=%23DFBF6C&l%5B0%5D%5Bthickness%5D=3&l%5B0%5D%5Bshadowsize%5D=3&l%5B0%5D%5Bmin%5D=15&l%5B0%5D%5Binstance%5D=sql.0&l%5B0%5D%5Byaxe%5D=right&l%5B0%5D%5Bxaxe%5D=bottom&l%5B0%5D%5Bname%5D=Wohnzimmer&l%5B0%5D%5Bunit%5D=%C2%B0&l%5B0%5D%5BcommonYAxis%5D=1&l%5B0%5D%5BignoreNull%5D=true&l%5B0%5D%5BafterComma%5D=2&l%5B0%5D%5Bdashes%5D=false&l%5B0%5D%5BdashLength%5D=10&l%5B0%5D%5BspaceLength%5D=10&l%5B0%5D%5BchartType%5D=line&l%5B1%5D%5Bid%5D=javascript.0.klima.b%C3%BCroTemp&l%5B1%5D%5Boffset%5D=0&l%5B1%5D%5Baggregate%5D=minmax&l%5B1%5D%5Bcolor%5D=%2388BB99&l%5B1%5D%5Bthickness%5D=3&l%5B1%5D%5Bshadowsize%5D=3&l%5B1%5D%5Bmin%5D=15&l%5B1%5D%5Binstance%5D=sql.0&l%5B1%5D%5Byaxe%5D=off&l%5B1%5D%5Bxaxe%5D=off&l%5B1%5D%5Bname%5D=B%C3%BCro&l%5B1%5D%5Bunit%5D=%C2%B0&l%5B1%5D%5BchartType%5D=line&l%5B1%5D%5BcommonYAxis%5D=1&l%5B1%5D%5BignoreNull%5D=true&l%5B1%5D%5BafterComma%5D=2&l%5B1%5D%5Bdashes%5D=false&l%5B1%5D%5BdashLength%5D=10&l%5B1%5D%5BspaceLength%5D=10&l%5B2%5D%5Bid%5D=javascript.0.klima.schlafzimmerTemp&l%5B2%5D%5Boffset%5D=0&l%5B2%5D%5Baggregate%5D=minmax&l%5B2%5D%5Bcolor%5D=%23E29804&l%5B2%5D%5Bthickness%5D=3&l%5B2%5D%5Bshadowsize%5D=3&l%5B2%5D%5Bmin%5D=15&l%5B2%5D%5Binstance%5D=sql.0&l%5B2%5D%5Byaxe%5D=off&l%5B2%5D%5Bxaxe%5D=off&l%5B2%5D%5Bname%5D=Schlafzimmer&l%5B2%5D%5Bunit%5D=%C2%B0&l%5B2%5D%5BcommonYAxis%5D=1&l%5B2%5D%5BignoreNull%5D=true&l%5B2%5D%5BafterComma%5D=2&l%5B2%5D%5Bdashes%5D=false&l%5B2%5D%5BdashLength%5D=10&l%5B2%5D%5BspaceLength%5D=10&l%5B2%5D%5Bxticks%5D=1&l%5B2%5D%5Byticks%5D=1&l%5B2%5D%5BchartType%5D=line&l%5B3%5D%5Bid%5D=javascript.0.klima.k%C3%BCcheTemp&l%5B3%5D%5Boffset%5D=0&l%5B3%5D%5Baggregate%5D=minmax&l%5B3%5D%5Bcolor%5D=%23BBEECC&l%5B3%5D%5Bthickness%5D=3&l%5B3%5D%5Bshadowsize%5D=3&l%5B3%5D%5Bmin%5D=15&l%5B3%5D%5Binstance%5D=sql.0&l%5B3%5D%5Byaxe%5D=off&l%5B3%5D%5Bxaxe%5D=off&l%5B3%5D%5Bname%5D=K%C3%BCche&l%5B3%5D%5Bunit%5D=%C2%B0&l%5B3%5D%5Bpoints%5D=false&l%5B3%5D%5BcommonYAxis%5D=1&l%5B3%5D%5BignoreNull%5D=true&l%5B3%5D%5BafterComma%5D=2&l%5B3%5D%5Bdashes%5D=false&l%5B3%5D%5BdashLength%5D=10&l%5B3%5D%5BspaceLength%5D=10&l%5B3%5D%5BchartType%5D=line&l%5B4%5D%5Bid%5D=javascript.0.klima.badezimmerTemp&l%5B4%5D%5Binstance%5D=sql.0&l%5B4%5D%5Boffset%5D=0&l%5B4%5D%5Baggregate%5D=minmax&l%5B4%5D%5Bcolor%5D=%23833130&l%5B4%5D%5Bmin%5D=15&l%5B4%5D%5Bthickness%5D=3&l%5B4%5D%5Bshadowsize%5D=3&l%5B4%5D%5Bunit%5D=%C2%B0&l%5B4%5D%5Bname%5D=Badezimmer&l%5B4%5D%5Byaxe%5D=off&l%5B4%5D%5Bxaxe%5D=off&l%5B4%5D%5BignoreNull%5D=true&l%5B4%5D%5BafterComma%5D=2&l%5B4%5D%5Bdashes%5D=false&l%5B4%5D%5BdashLength%5D=10&l%5B4%5D%5BspaceLength%5D=10&l%5B4%5D%5BcommonYAxis%5D=1&aggregateType=step&aggregateSpan=300&relativeEnd=now&timeType=relative&noBorder=noborder&bg=%23242424&useComma=true&noedit=false&animation=300&window_bg=%23242424&x_labels_color=%23fca43c&y_labels_color=%23fca43c&border_color=%23242424&barColor=%23fe7878&barLabels=middle&barWidth=100&barFontSize=100&titlePos=top%3A35%3Bleft%3A65&legend=sw&legColumns=5&legBgOpacity=0.5&timeFormat=%25H%3A%25M"
              />
            </Card>
            <Card>
              <FloatGraph
                headline="Feuchtigkeit"
                url="http://192.168.178.60:8082/flot/index.html?range=1440&zoom=false&axeX=lines&axeY=inside&hoverDetail=true&aggregate=onchange&chartType=step&live=30&instance=sql.0&l%5B0%5D%5Bid%5D=javascript.0.klima.wohnzimmerHumidity&l%5B0%5D%5Boffset%5D=0&l%5B0%5D%5Baggregate%5D=minmax&l%5B0%5D%5Bcolor%5D=%23DFBF6C&l%5B0%5D%5Bthickness%5D=3&l%5B0%5D%5Bshadowsize%5D=3&l%5B0%5D%5Bmin%5D=15&l%5B0%5D%5Binstance%5D=sql.0&l%5B0%5D%5Byaxe%5D=right&l%5B0%5D%5Bxaxe%5D=bottom&l%5B0%5D%5Bname%5D=Wohnzimmer&l%5B0%5D%5Bunit%5D=%25&l%5B0%5D%5BcommonYAxis%5D=1&l%5B0%5D%5BignoreNull%5D=true&l%5B0%5D%5BafterComma%5D=2&l%5B0%5D%5Bdashes%5D=false&l%5B0%5D%5BdashLength%5D=10&l%5B0%5D%5BspaceLength%5D=10&l%5B0%5D%5BchartType%5D=line&l%5B1%5D%5Bid%5D=javascript.0.klima.b%C3%BCroHumidity&l%5B1%5D%5Boffset%5D=0&l%5B1%5D%5Baggregate%5D=minmax&l%5B1%5D%5Bcolor%5D=%2388BB99&l%5B1%5D%5Bthickness%5D=3&l%5B1%5D%5Bshadowsize%5D=3&l%5B1%5D%5Bmin%5D=15&l%5B1%5D%5Binstance%5D=sql.0&l%5B1%5D%5Byaxe%5D=off&l%5B1%5D%5Bxaxe%5D=off&l%5B1%5D%5Bname%5D=B%C3%BCro&l%5B1%5D%5Bunit%5D=%25&l%5B1%5D%5BchartType%5D=line&l%5B1%5D%5BcommonYAxis%5D=1&l%5B1%5D%5BignoreNull%5D=true&l%5B1%5D%5BafterComma%5D=2&l%5B1%5D%5Bdashes%5D=false&l%5B1%5D%5BdashLength%5D=10&l%5B1%5D%5BspaceLength%5D=10&l%5B2%5D%5Bid%5D=javascript.0.klima.schlafzimmerHumidity&l%5B2%5D%5Boffset%5D=0&l%5B2%5D%5Baggregate%5D=minmax&l%5B2%5D%5Bcolor%5D=%23E29804&l%5B2%5D%5Bthickness%5D=3&l%5B2%5D%5Bshadowsize%5D=3&l%5B2%5D%5Bmin%5D=15&l%5B2%5D%5Binstance%5D=sql.0&l%5B2%5D%5Byaxe%5D=off&l%5B2%5D%5Bxaxe%5D=off&l%5B2%5D%5Bname%5D=Schlafzimmer&l%5B2%5D%5Bunit%5D=%25&l%5B2%5D%5BcommonYAxis%5D=1&l%5B2%5D%5BignoreNull%5D=true&l%5B2%5D%5BafterComma%5D=2&l%5B2%5D%5Bdashes%5D=false&l%5B2%5D%5BdashLength%5D=10&l%5B2%5D%5BspaceLength%5D=10&l%5B2%5D%5Bxticks%5D=1&l%5B2%5D%5Byticks%5D=1&l%5B2%5D%5BchartType%5D=line&l%5B3%5D%5Bid%5D=javascript.0.klima.k%C3%BCcheHumidity&l%5B3%5D%5Boffset%5D=0&l%5B3%5D%5Baggregate%5D=minmax&l%5B3%5D%5Bcolor%5D=%23BBEECC&l%5B3%5D%5Bthickness%5D=3&l%5B3%5D%5Bshadowsize%5D=3&l%5B3%5D%5Bmin%5D=15&l%5B3%5D%5Binstance%5D=sql.0&l%5B3%5D%5Byaxe%5D=off&l%5B3%5D%5Bxaxe%5D=off&l%5B3%5D%5Bname%5D=K%C3%BCche&l%5B3%5D%5Bunit%5D=%25&l%5B3%5D%5Bpoints%5D=false&l%5B3%5D%5BcommonYAxis%5D=1&l%5B3%5D%5BignoreNull%5D=true&l%5B3%5D%5BafterComma%5D=2&l%5B3%5D%5Bdashes%5D=false&l%5B3%5D%5BdashLength%5D=10&l%5B3%5D%5BspaceLength%5D=10&l%5B3%5D%5BchartType%5D=line&l%5B4%5D%5Bid%5D=javascript.0.klima.badezimmerHumidity&l%5B4%5D%5Binstance%5D=sql.0&l%5B4%5D%5Boffset%5D=0&l%5B4%5D%5Baggregate%5D=minmax&l%5B4%5D%5Bcolor%5D=%23833130&l%5B4%5D%5Bmin%5D=15&l%5B4%5D%5Bthickness%5D=3&l%5B4%5D%5Bshadowsize%5D=3&l%5B4%5D%5Bunit%5D=%25&l%5B4%5D%5Bname%5D=Badezimmer&l%5B4%5D%5Byaxe%5D=off&l%5B4%5D%5Bxaxe%5D=off&l%5B4%5D%5BignoreNull%5D=true&l%5B4%5D%5BafterComma%5D=2&l%5B4%5D%5Bdashes%5D=false&l%5B4%5D%5BdashLength%5D=10&l%5B4%5D%5BspaceLength%5D=10&l%5B4%5D%5BcommonYAxis%5D=1&aggregateType=step&aggregateSpan=300&relativeEnd=now&timeType=relative&noBorder=noborder&bg=%23242424&useComma=true&noedit=false&animation=300&window_bg=%23242424&x_labels_color=%23fca43c&y_labels_color=%23fca43c&border_color=%23242424&barColor=%23fe7878&barLabels=middle&barWidth=100&barFontSize=100&titlePos=top%3A35%3Bleft%3A65&legend=sw&legColumns=5&legBgOpacity=0.5&timeFormat=%25H%3A%25M"
              />
            </Card>
            <Card>
              <FloatGraph
                headline="Temperatur - Aussen"
                url="http://192.168.178.60:8082/flot/index.html?range=1440&zoom=false&axeX=lines&axeY=inside&hoverDetail=true&aggregate=onchange&chartType=step&live=30&instance=sql.0&l%5B0%5D%5Bid%5D=javascript.0.klima.terasseTemp&l%5B0%5D%5Boffset%5D=0&l%5B0%5D%5Baggregate%5D=minmax&l%5B0%5D%5Bcolor%5D=%23E29804&l%5B0%5D%5Bthickness%5D=3&l%5B0%5D%5Bshadowsize%5D=3&l%5B0%5D%5Binstance%5D=sql.0&l%5B0%5D%5Byaxe%5D=right&l%5B0%5D%5Bxaxe%5D=bottom&l%5B0%5D%5Bname%5D=Au%C3%9Fentemperatur&l%5B0%5D%5Bunit%5D=%C2%B0&l%5B0%5D%5BcommonYAxis%5D=1&l%5B0%5D%5BignoreNull%5D=true&l%5B0%5D%5BafterComma%5D=2&l%5B0%5D%5Bdashes%5D=false&l%5B0%5D%5BdashLength%5D=10&l%5B0%5D%5BspaceLength%5D=10&l%5B0%5D%5Bxticks%5D=1&l%5B0%5D%5Byticks%5D=1&l%5B0%5D%5BchartType%5D=line&aggregateType=step&aggregateSpan=300&relativeEnd=now&timeType=relative&noBorder=noborder&bg=%23242424&useComma=true&noedit=false&animation=300&window_bg=%23242424&x_labels_color=%23fca43c&y_labels_color=%23fca43c&border_color=%23242424&barColor=%23fe7878&barLabels=middle&barWidth=100&barFontSize=100&titlePos=top%3A35%3Bleft%3A65&legend=sw&legColumns=5&legBgOpacity=0.5&timeFormat=%25H%3A%25M"
              />
            </Card>
            <Footer></Footer>
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
    roomData.tvState
      ? updateApiState(roomData.tvHandler, 'powerOff')
      : updateApiState(roomData.tvHandler, 'powerOn')
  }

  function handleDropDownClick(node, value) {
    roomData.updateApiNode(roomData.lightHandler, value)
  }

  function toggleExtension(roomName) {
    let oldState = { ...extensionState } // unview all other...
    oldState[roomName] = !extensionState[roomName]
    setExtensionState(oldState)
  }

  function cardTemplateBasic(roomName) {
    return (
      <Card>
        <CardHead
          roomData={roomData[roomName]}
          onClick={() => toggleExtension(roomName)}
        />
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
        <CardExtension
          extended={extensionState[roomName]}
          expandedHeight="50px"
        >
          <Setting roomData={roomData[roomName]} />
        </CardExtension>
      </Card>
    )
  }

  function cardTemplateWhg(roomName) {
    return (
      <Card>
        <CardHead
          roomData={roomData[roomName]}
          onClick={() => toggleExtension(roomName)}
        />
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
            onClick={handleDropDownClick}
            menu={roomData[roomName].ddmenu}
            children={
              <>
                <BsList size="15" />
                <span>Szenen</span>
              </>
            }
          />
        </Layout>
        <CardExtension
          extended={extensionState[roomName]}
          expandedHeight="100px"
        >
          <Setting roomData={roomData[roomName]} />
        </CardExtension>
      </Card>
    )
  }

  function cardTemplateWhz(roomName) {
    return (
      <Card>
        <CardHead
          roomData={roomData[roomName]}
          onClick={() => toggleExtension(roomName)}
        />
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
        <CardExtension
          extended={extensionState[roomName]}
          expandedHeight="50px"
        >
          <Setting roomData={roomData[roomName]} />
        </CardExtension>
      </Card>
    )
  }
}

export default App

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    min-height: 100vh;
  }
`
const StyledMain = styled.main`
  width: 100%;
  @media only screen and (min-width: 1000px) {
    max-width: 930px;
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
  }
`

/*

*/
