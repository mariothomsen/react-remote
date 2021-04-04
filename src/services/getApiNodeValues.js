export default function getApiStates(urlPart) {
  const url =
    process.env.REACT_APP_BE_BASE_URL +
    '/get/system.adapter.admin.0.alive' +
    urlPart
  console.log(url)
  return fetch(url)
}
