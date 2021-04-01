export default function setApiState(node, value) {
  const url =
    process.env.REACT_APP_BE_BASE_URL + '/set/' + node + '?value=' + value
  console.log(url)
  fetch(url)
}
