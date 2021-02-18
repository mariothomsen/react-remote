export default function switchApiState(node) {
  fetch('http://192.168.178.60:8087/toggle/' + node)
}
