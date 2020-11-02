import { useEffect, useState } from "react";
import SwitchButton from "./components/SwitchButton";
import switchApiState from './services/switchApiState'

function noDots(node){
  return String(node).replaceAll('.','-')
}

function buildNodeStates(data){
  let nodeStates = []
  for(let entry in data) {
    nodeStates = [...nodeStates, {node: data[entry]._id, value : data[entry].val}]
  }
  console.log('State Test ', nodeStates)
  return nodeStates;
}


function App() {
  const [states, setStates] = useState([])
  useEffect(() => {
    fetch('http://192.168.178.60:8087/get/system.adapter.admin.0.alive,deconz.0.Lights.1.on,admin.0.info.lastUpdateCheck')
    .then(res => res.json())
    .then(data => setStates(buildNodeStates(data)))
    .catch(error => console.log(error))
    console.log('Initial Render...')
  }, [])

  useEffect(() => {
    console.log('Change Render...', states)
  }, );

  console.log('FILTER: ', getValueByNodeName('deconz.0.Lights.1.on'))


  return (
    <div className="App">
      <SwitchButton onClick={() => toggleState('deconz.0.Lights.1.on')} node='deconz.0.Lights.1.on' color="red" value={getValueByNodeName('deconz.0.Lights.1.on')}/>
    </div>
  );

  function getValueByNodeName(nodeName){
    console.log('State-Length', states.length)
    console.log('States in getVal', states)

    if(states.length >= 1){
      let searchState = states.filter((state) => state.node === nodeName)
      console.log(searchState)
      return searchState[0].value;
    }
  }


  function toggleState(nodeToChange) {
    switchApiState(nodeToChange)

    /*
    console.log('states bei switch: ', states)
    console.log('searched node: ', nodeToChange)
    console.log('OLD STATE:', states)
    */

    // Index?
    let index = states.findIndex((state) => state.node === nodeToChange)
    let changedState = states[index];
    let newValue = !changedState.value;

    /*
    console.log('index: ', index)
    console.log('changedState:',changedState)
    console.log('changedState-value',changedState.value)
    console.log('changedState-NewValue',!changedState.value)
    */

    setStates([
      ...states.slice(0, index),
      {node: nodeToChange, value: newValue},
      ...states.slice(index + 1)
    ])
   

    //let newStatus = !states[noDots(node)]
    //states[[noDots(node)]] = newStatus
    //setStates(states)
    console.log('NEW STATE:', states)
  }
}

export default App;





/*


function toggleTodo(index) {
    const todo = todos[index]
    setTodos([
      ...todos.slice(0, index),
      {...todo, isDone: !todo.isDone},
      ...todos.slice(index + 1)
    ])
  }

  function addTodo(title) {
    setTodos([...todos, {title, isDone: false, id: uuidv4() }])
  }



*/
/*
function getKeys(obj, filter) {
  const keys = Object.keys(obj);
  for(let key in keys){
    if(keys[key] === filter){
      //console.log('found: '+ filter + ' in ' + keys[key] + ' by Index: '+ key)
      return key;
    }
  }
}
*/

/*
function App() {


  
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data))
    .catch(error => console.log(error))
  }, [])

  //console.log( Array.from(characters))
  //let results = Array.from(characters)
  //let results = Object.values(characters)
  let results = characters;



  function resultsToArray(){
    let nodeValues = [];

    
    for(var i = 0; i <= results.length-1; i++) {
        //console.log(results[i]['val'])
        //console.log(typeof results[i])

        //var fds = Object.keys(results[i]).map((key) => [Number(key), results[i][key]]);
        var fds = Object.entries(results[i])
        fds.map(f => console.log(f[0]));

    }
    
    console.log('results.length',results.length)

    return results
  
  }

  

  return (
    <div className="App">
      {console.log('XXX', resultsToArray())
      }
    </div>
  );
}

*/