import styled from 'styled-components/macro'

export default SwitchButton

function SwitchButton({ node, onClick, value, children }) {
  return (
    <StyledButton value={value} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: #ffa101;
  border: 0 solid currentColor;
  border-radius: 3px;
  padding: 10px 25px;
  min-height: 50px;
  color: ${(props) => (props.value ? 'white' : '#424242a1')};
  width: 100%;
  text-transform: uppercase;

  &:hover {
  }

  &:focus {
  }

  &:focus {
    outline: 0px solid #fff;
  }

  &:active {
  }
`

/*
    background-color: ${props => props.value ? "palevioletred" : "blue"};

*/
