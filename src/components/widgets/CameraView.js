import styled from 'styled-components/macro'
import { BiFullscreen } from 'react-icons/bi'

export default function CameraView({ url, headline, extended }) {
  if (!extended) {
    return <StyledPlaceholder />
  }
  return (
    <StyledDiv>
      {/* <iframe src={url} title={headline} seamless="">
        <p>
          Ihr Browser kann leider keine eingebetteten Frames anzeigen: Sie
          können die eingebettete Seite über den folgenden Verweis aufrufen:
          <a href="https://wiki.selfhtml.org/wiki/Startseite">SELFHTML</a>
        </p>
      </iframe> */}
      <img src="http://192.168.178.56:8081/"></img>
      <StyledFullscreenButton>
        <BiFullscreen onClick={handleFullscreenClick} size="30"></BiFullscreen>
      </StyledFullscreenButton>
    </StyledDiv>
  )
}

function handleFullscreenClick() {
  const win = window.open('http://192.168.178.56:8081/', '_blank')
  win.focus()
}

const StyledFullscreenButton = styled.div`
  bottom: 11px;
  color: white;
  left: 0px;
  position: absolute;
`

const StyledPlaceholder = styled.div`
  height: 400px;
`

const StyledDiv = styled.div`
  width: 100px;
  height: 250px;
  padding: 0;
  position: relative;
  iframe {
    border: none;
    height: 1300px;
    width: 1600px;
    -moz-transform: scale(0.33);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.33);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.33);
    -webkit-transform-origin: 0 0;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 200;
  }
`
