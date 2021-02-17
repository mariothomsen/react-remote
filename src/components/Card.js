import styled from 'styled-components/macro'

export default Card

function Card({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}

const StyledDiv = styled.div`
  background-color: #242424;
  border-radius: 10px;
  padding: 15px;
  margin: 16px 7px 5px 7px;
  width: 450px;
  box-sizing: border-box;
`
/*


*/
