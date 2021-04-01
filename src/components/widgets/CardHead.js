import styled from 'styled-components/macro'
import { FaUnlockAlt } from 'react-icons/fa'
import { MdExpandMore } from 'react-icons/md'

export default CardHead

function CardHead({ roomData, onClick }) {
  function generateInfos(info, roomData) {
    var output = info.value

    if (info.type === 'temp') {
      output = parseFloat(output).toFixed(1)
    }

    if (info.type === 'humidity') {
      output = parseFloat(output).toFixed(0)
    }

    if (info.type === 'window') {
      if (info.value) {
        return (
          <>
            <FaUnlockAlt color="red" size="8" /> <span>Fenster offen</span>{' '}
            {info.append}
          </>
        )
      } else {
        return null
      }
    }

    if (info.type === 'currentPlaying') {
      if (!roomData.radioValue) {
        return null
      }
      output = output.replace(
        'Mehr Musik - Das Beste aus vier Jahrzehnten',
        'HH ZWEI'
      )
      output = output.replace('HAMBURG ZWEI', 'HH ZWEI')

      output = output.replace(
        'DLF Nova: Es ist kompliziert. Dazu guter Pop.',
        'DLF Nova'
      )
      output = output.replace('Deutschlandfunk Nova', 'DLF Nova')
      output = `${output}   `
    }

    return `${info.prepand}${output}${info.append}`
  }

  function isClickable() {
    if (onClick) {
      return true
    } else {
      return false
    }
  }

  return (
    <StyledDiv onClick={onClick}>
      <StyledHeadline>
        {roomData.name}
        <StyledSettingsIcon hasonclick={isClickable().toString()} size="18" />
      </StyledHeadline>
      <StyledInfos>
        {roomData &&
          roomData.infos.map((info, index) => generateInfos(info, roomData))}
      </StyledInfos>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0 0 15px 0;
  cursor: pointer;
  overflow: hidden;
`
const StyledHeadline = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 300;
`
const StyledSettingsIcon = styled(MdExpandMore)`
  opacity: 0;
  margin: 0 0 2px 2px;
  vertical-align: middle;
  ${StyledDiv}:hover & {
    opacity: ${(props) => (props.hasonclick === 'true' ? '1' : '0')};
  }
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
`

const StyledInfos = styled.span`
  font-weight: 300;
  float: right;
  font-size: 10px;
  vertical-align: bottom;
  margin-top: 3px;
  > *:not(:last-child):after {
    content: ' | ';
  }
`
/*
    opacity: ${(props) => (props.hasonclick ? '1' : '0')};
*/
