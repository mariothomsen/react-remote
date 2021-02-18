import styled from 'styled-components/macro'

export default Header

function Header() {
  return <StyledDiv></StyledDiv>
}

const StyledDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    max-width: 930px;
    width: 100%;
  }
  text-align: left;

  span {
    font-size: 29px;
    font-weight: 200;
    font-family: monospace, sans-serif;
    color: var(--color-primary);
    float: right;
  }

  svg {
    margin-left: 10px;
  }
`
