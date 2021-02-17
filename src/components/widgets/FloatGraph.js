import styled from 'styled-components/macro'
import { AiOutlinePoweroff } from 'react-icons/ai'

export default function FloatGraph({ url, headline }) {
  return (
    <StyledDiv>
      <span>{headline}</span>
      <iframe src={url} seamless="" width="100%" height="400">
        <p>
          Ihr Browser kann leider keine eingebetteten Frames anzeigen: Sie
          können die eingebettete Seite über den folgenden Verweis aufrufen:
          <a href="https://wiki.selfhtml.org/wiki/Startseite">SELFHTML</a>
        </p>
      </iframe>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  iframe {
    margin: 20px 0;
    border: none;
  }

  span {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 200;
  }
`
