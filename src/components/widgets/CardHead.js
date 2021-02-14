import styled from 'styled-components/macro'

export default CardHead

function CardHead({ roomData }) {
  //
  function generateInfos(info, roomData) {
    // console.log('output', output)
    // console.log(roomData.name + ' : ', info)
    var output = info.value
    // if (output.length > 0) {
    if (info.type === 'temp') {
      output = parseFloat(output).toFixed(1)
    }
    if (info.type === 'humidity') {
      output = parseFloat(output).toFixed(0)
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
      output = output.replace('Deutschlandfunk Nova', 'DLF Nova')
      output = `${output}   `
    }
    return `${info.prepand}${output}${info.append}`
    // } else {
    //   return null
    // }
  }

  return (
    <StyledDiv>
      <StyledHeadline>{roomData.name}</StyledHeadline>
      <StyledInfos>
        {roomData &&
          roomData.infos.map((info, index) => generateInfos(info, roomData))}
      </StyledInfos>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0px 0 15px 0;
`
const StyledHeadline = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 300;
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
// const StyledInfoText = styled.span`
//   margin-left: 5px;
//   text-transform: capitalize;
//   font-size: 10px;

//   > *:not(:last-child):after {
//     content: ' | ';
//   }
// `
