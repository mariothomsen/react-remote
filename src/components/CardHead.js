import styled from 'styled-components/macro'

export default CardHead

function CardHead({ headline, infos }) {
  return (
    <StyledDiv>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledInfos>{infos}</StyledInfos>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 0px 0 15px 0;
  font-size: 11px;
  font-weight: 200;
`
const StyledHeadline = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`
const StyledInfos = styled.span`
  float: right;
`
