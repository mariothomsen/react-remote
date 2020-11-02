export default function switchApiState(node) {
    //return fetch('https://rickandmortyapi.com/api/character/')
    console.log('SWITCH (2/2): ', 'http://192.168.178.60:8087/toggle/'+node)
    fetch('http://192.168.178.60:8087/toggle/'+node)
  }
  