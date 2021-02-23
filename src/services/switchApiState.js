export default function switchApiState(node) {
  const url = process.env.REACT_APP_BE_BASE_URL + '/toggle/' + node
  fetch(url)
}
