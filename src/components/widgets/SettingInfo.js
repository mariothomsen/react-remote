import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { BiTimer } from 'react-icons/bi'

//BiTimer
export default function SettingInfo({ data }) {
  const [value, setValue] = useState()

  useEffect(() => {
    function timeDifference(date1, date2) {
      let difference = date1.getTime() - date2.getTime()
      let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24)
      difference -= daysDifference * 1000 * 60 * 60 * 24
      let hoursDifference = Math.floor(difference / 1000 / 60 / 60)
      difference -= hoursDifference * 1000 * 60 * 60
      let minutesDifference = Math.floor(difference / 1000 / 60)
      difference -= minutesDifference * 1000 * 60
      let secondsDifference = Math.floor(difference / 1000)

      return (
        hoursDifference.toLocaleString('de-DE', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        ':' +
        minutesDifference.toLocaleString('de-DE', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        ':' +
        secondsDifference.toLocaleString('de-DE', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      )
    }

    let now = new Date()
    let target = new Date(data.value)
    let difference = timeDifference(target, now)

    if (data.value !== 0) {
      setValue(difference)
    } else {
      setValue('No Timer.')
    }
  }, [data])

  return (
    <StyledDiv>
      <StyledName>{data.text}</StyledName>
      <div></div>
      <StyledValueArea cvalue={value}>{value}</StyledValueArea>
    </StyledDiv>
  )
}

/*
 <BiTimer />
*/

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 15px 1fr;
  align-items: center;
  font-weight: 600;
  height: 15px;
`
const StyledValueArea = styled.div`
  text-align: center;

  color: ${(props) =>
    props.cvalue !== 'No Timer.' ? 'var(--color-primary)' : '#424242cc'};
  letter-spacing: 2px;
`

const StyledName = styled.div`
  font-size: 12px;
  font-weight: 200;
  padding-left: 5px;
`
