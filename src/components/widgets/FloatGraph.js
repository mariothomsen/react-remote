import styled from 'styled-components/macro'

export default function FloatGraph({ url, headline }) {
  return (
    <StyledDiv>
      <span>{headline}</span>
      <iframe src={url} title={headline} seamless="" width="100%" height="400">
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
  background-color: #242424;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 15px 0px 15px;
  box-sizing: border-box;

  @media only screen and (min-width: 1000px) {
    margin: 16px 6px 5px 6px;
    width: 900px;
    box-sizing: border-box;
  }

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
