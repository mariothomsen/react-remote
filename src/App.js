import { useEffect, useState } from 'react'

import { FaBeer } from 'react-icons/fa'
import { RiTempColdLine } from 'react-icons/ri'
import { BiRadio } from 'react-icons/bi'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi'

import useNodeStates from './hooks/useNodeStates'

import RadioSwitch from './components/RadioSwitch'
import SwitchButton from './components/SwitchButton'
import DropDownButton from './components/DropDownButton'
import SwitchAndDropDown from './components/SwitchAndDropDown'
import Card from './components/Card'
import CardHead from './components/CardHead'
import Slider from './components/Slider'
import Layout from './components/Layout'

function App() {
  const {
    nodeStates,
    getNodeState,
    setNewNodeState,
    toogleNodeState,
    loadApiNodeStates,
  } = useNodeStates()

  const [nStates, setNStates] = useState([])

  useEffect(() => {
    loadApiNodeStates()
  }, [])

  useEffect(() => {
    console.log('States ', nodeStates)
    setNStates(nodeStates)
  }, [nodeStates])

  var rooms = {
    name: 'wohnzimmer',
    lightNodes: '',
    lightHandler: '',
    lightMenu: [
      { text: 'Gemütlich', color: '#ffa10070', icon: '' },
      { text: 'Normal', color: 'var(--color-primary)', icon: '' },
      { text: 'Normal II', color: 'var(--color-primary)', icon: '' },
      { text: 'Hell', color: '#e3f2ff', icon: '' },
    ],
    heatingNodes: [],
    heatingHandler: '',
  }

  function roomTemplate(roomName) {
    return (
      <Card>
        <CardHead headline="wohnzimmer" infos="ddf"></CardHead>
        <Layout layout="1fr 15px 1fr 15px  3fr">
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={getNodeState('deconz.0.Lights.21.on')}
            children={<BiRadio size="15" />}
          />
          <div></div>
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={getNodeState('deconz.0.Lights.21.on')}
            children={<RiTempColdLine size="14" />}
          />
          <div></div>
          <SwitchAndDropDown layout="2fr  1fr">
            <RadioSwitch
              node="deconz.0.Lights.1.on"
              onChange={setNewNodeState}
              targetStates={[
                { value: true, icon: <HiLightBulb size="18" /> },
                { value: false, icon: <HiOutlineLightBulb size="18" /> },
              ]}
              //currentState={nodeStates('deconz.0.Lights.21.on')}
              currentState={getNodeState('deconz.0.Lights.1.on')}
            />
          </SwitchAndDropDown>
        </Layout>
        <Slider></Slider>
        <br></br>
      </Card>
    )
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <Card>
        <CardHead headline="wohnzimmer" infos="ddf"></CardHead>
        <Layout layout="1fr 15px 1fr 15px  3fr">
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={getNodeState('deconz.0.Lights.21.on')}
            children={<BiRadio size="15" />}
          />
          <div></div>
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={getNodeState('deconz.0.Lights.21.on')}
            children={<RiTempColdLine size="14" />}
          />
          <div></div>
          <SwitchAndDropDown
            layout="2fr 1fr"
            onClick={setNewNodeState}
            menu={[
              {
                text: 'Gemütlich',
                color: '#ffa10070',
                node: 'javascript.0.handler.lights',
                nodeValue: 'büro.1',
              },
              {
                text: 'Normal',
                color: 'var(--color-primary)',
                node: 'javascript.0.handler.lights',
                nodeValue: 'büro.2',
              },
              {
                text: 'Normal II',
                color: 'var(--color-primary)',
                node: 'javascript.0.handler.lights',
                nodeValue: 'büro.2',
              },
              {
                text: 'Hell',
                color: '#e3f2ff',
                icon: '',
                node: 'javascript.0.handler.lights',
                nodeValue: 'büro.3',
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
              //currentState={nodeStates('deconz.0.Lights.21.on')}
              currentState={getNodeState('deconz.0.Lights.1.on')}
            />
          </SwitchAndDropDown>
        </Layout>
        <Slider></Slider>
        <br></br>
      </Card>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default App
/*

 <Card>
        <CardHead headline="wohnzimmer" infos="ddf"></CardHead>
        <Layout layout="1fr 15px 1fr 15px  3fr">
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={nodeStates('deconz.0.Lights.21.on')}
            children={<BiRadio size="15" />}
          />
          <div></div>
          <SwitchButton
            onClick={() => toogleNodeState('deconz.0.Lights.21.on')}
            node="deconz.0.Lights.21.on"
            value={nodeStates('deconz.0.Lights.21.on')}
            children={<RiTempColdLine size="14" />}
          />
          <div></div>
          <SwitchAndDropDown layout="2fr  1fr">
            <RadioSwitch
              node="deconz.0.Lights.1.on"
              onChange={setNewNodeState}
              targetStates={[
                { value: true, icon: <HiLightBulb size="18" /> },
                { value: false, icon: <HiOutlineLightBulb size="18" /> },
              ]}
              //currentState={nodeStates('deconz.0.Lights.21.on')}
              currentState={nodeStates('deconz.0.Lights.1.on')}
            />
          </SwitchAndDropDown>
        </Layout>
        <Slider></Slider>
        <br></br>
        <RadioSwitch
          node="deconz.0.Lights.1.on"
          onChange={setNewNodeState}
          targetStates={[
            { value: true, icon: <HiLightBulb size="18" /> },
            { value: false, icon: <HiOutlineLightBulb size="18" /> },
          ]}
          //currentState={nodeStates('deconz.0.Lights.21.on')}
          currentState={nodeStates('deconz.0.Lights.1.on')}
        />
      </Card>

*/

/*

      <br></br>
      <DropDownButton></DropDownButton>
      <br></br>
      <Layout layout="1fr 20px 2fr 1fr">
        <SwitchButton
          onClick={() => toogleNodeState('deconz.0.Lights.1.on')}
          node="deconz.0.Lights.1.on"
          value={nodeStates('deconz.0.Lights.1.on')}
          children={<FaBeer></FaBeer>}
        />
        <div></div>
        <SwitchButton
          onClick={() => toogleNodeState('deconz.0.Lights.1.on')}
          node="deconz.0.Lights.1.on"
          value={nodeStates('deconz.0.Lights.1.on')}
          children={<FaBeer></FaBeer>}
        />
      </Layout>
      <br></br>
      <SwitchAndDropDown>
        <SwitchButton
          onClick={() => toogleNodeState('deconz.0.Lights.1.on')}
          node="deconz.0.Lights.1.on"
          value={nodeStates('deconz.0.Lights.1.on')}
          children={<FaBeer></FaBeer>}
        />
        <SwitchButton
          onClick={() => toogleNodeState('deconz.0.Lights.1.on')}
          node="deconz.0.Lights.1.on"
          value={nodeStates('deconz.0.Lights.1.on')}
          children={<FaBeer></FaBeer>}
        />
      </SwitchAndDropDown>
      <br></br>
      <SwitchAndDropDown></SwitchAndDropDown>

      <Slider></Slider>
*/
