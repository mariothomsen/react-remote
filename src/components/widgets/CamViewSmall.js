import styled from 'styled-components/macro'
import { BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

export default function CamViewSmall({ setExtensionState, extended }) {
  const history = useHistory()

  if (!extended) {
    return <StyledPlaceholder />
  }
  return (
    <StyledVideoWrapper>
      <StyledVideoImg src="http://192.168.178.56:8081/"></StyledVideoImg>
      <StyledFullscreenButton>
        <BiFullscreen
          onClick={() => handleFullscreenClick(history)}
          size="30"
        ></BiFullscreen>
        <BiLinkExternal
          onClick={() => handleOpenScreenClick(setExtensionState)}
          size="30"
        ></BiLinkExternal>
      </StyledFullscreenButton>
    </StyledVideoWrapper>
  )
}

function handleFullscreenClick(history) {
  history.push('/antstv')
}

function handleOpenScreenClick(setExtensionState) {
  setExtensionState('büro')
  const win = window.open('/#/antstv', '_blank')
  win.focus()
}

const StyledVideoImg = styled.img`
  width: 100%;
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  border-radius: 3px;
`

const StyledFullscreenButton = styled.div`
  top: 10px;
  right: 10px;
  color: var(--color-primary);
  position: absolute;

  svg {
    margin-left: 8px;
  }
`

const StyledPlaceholder = styled.div`
  height: 400px;
`

const StyledVideoWrapper = styled.div`
  position: relative;
`

/*



import styled from 'styled-components/macro'
import { BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

export default function CamViewSmall({ setExtensionState, extended }) {
  const history = useHistory()

  if (!extended) {
    return <StyledPlaceholder />
  }
  return (
    <StyledVideoWrapper>
      <StyledVideoImg src="http://192.168.178.56:8081/"></StyledVideoImg>
      <StyledFullscreenButton>
        <BiFullscreen
          onClick={() => handleFullscreenClick(history)}
          size="30"
        ></BiFullscreen>
        <BiLinkExternal
          onClick={() => handleOpenScreenClick(setExtensionState)}
          size="30"
        ></BiLinkExternal>
      </StyledFullscreenButton>
    </StyledVideoWrapper>
  )
}

function handleFullscreenClick(history) {
  history.push('/antstv')
}

function handleOpenScreenClick(setExtensionState) {
  setExtensionState('büro')
  const win = window.open('/#/antstv', '_blank')
  win.focus()
}

const StyledVideoImg = styled.img`
  width: 100%;
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  border-radius: 3px;
`

const StyledFullscreenButton = styled.div`
  top: 10px;
  right: 10px;
  color: var(--color-primary);
  position: absolute;

  svg {
    margin-left: 8px;
  }
`

const StyledPlaceholder = styled.div`
  height: 400px;
`

const StyledVideoWrapper = styled.div`
  position: relative;
`



*/
