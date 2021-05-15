import styled from 'styled-components/macro'

export default CardExtension

function CardExtension({ children, extended, expandedHeight }) {
  return (
    <StyledDiv expandedHeight={expandedHeight} extensionState={extended}>
      <StyledContent>{children}</StyledContent>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  overflow: hidden;
  max-height: 0px;
  max-height: ${(props) =>
    props.extensionState ? props.expandedHeight : '0px'};
  transition: max-height 0.2s ease-out;
`

const StyledContent = styled.div`
  margin: 0 0 0 0;
  & > div {
    margin: 20px 0 10px 0;
  }
`

// 40
// '˚
