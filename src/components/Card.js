import styled from 'styled-components/macro'

export default Card

function Card({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}

const StyledDiv = styled.div`
  background-color: #242424;
  border-radius: 10px;
  padding: 15px;
  margin: 0px 0px 15px 15px;
  @media only screen and (min-width: 800px) {
    width: 400px;
    box-sizing: border-box;
  }
`
/*
    

*/
