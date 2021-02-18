export default function setApiState(node, value) {
  fetch('http://192.168.178.60:8087/set/' + node + '?value=' + value)
}
