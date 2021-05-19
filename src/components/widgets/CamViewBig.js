import styled from 'styled-components/macro'
import { CgCloseR } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

export default function CamViewBig({ url, headline, extended }) {
  const history = useHistory()

  return (
    <StyledVideoWrapper>
      <StyledVideoImg src="http://192.168.178.56:8081/"></StyledVideoImg>
      <StyledFullscreenButton>
        <CgCloseR
          onClick={() => handleFullscreenClick(history)}
          size="30"
        ></CgCloseR>
      </StyledFullscreenButton>
    </StyledVideoWrapper>
  )
}

/*

      <StyledFullscreenButton>
        <BiFullscreen onClick={handleFullscreenClick} size="30"></BiFullscreen>
      </StyledFullscreenButton>
*/

function handleFullscreenClick(history) {
  history.push('/')
}

const StyledVideoImg = styled.img`
  width: 100%;
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  border-radius: 3px;
  flex-grow: 1;
`

const StyledFullscreenButton = styled.div`
  top: 10px;
  right: 10px;
  color: var(--color-primary);
  position: absolute;
`

const StyledPlaceholder = styled.div`
  height: 400px;
`

const StyledVideoWrapper = styled.div`
  position: relative;

  @media only screen and (min-width: 1000px) {
    margin: 30px;
  }
`

/* 

const StyledVideoImg = styled.img`
  width: 100%;
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  border-radius: 3px;
`

const StyledFullscreenButton = styled.div`
  bottom: 5px;
  color: var(--color-primary);
  left: 5px;
  position: absolute;
`

const StyledPlaceholder = styled.div`
  height: 400px;
`

const StyledVideoWrapper = styled.div`
  position: relative;
  margin: 5% 5% 20px 5%;
  height: 100%;
`

*/
