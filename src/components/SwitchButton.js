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
  background-color: var(--color-primary);
  border: 0 solid currentColor;
  border-radius: 3px;
  padding: 10px 25px;
  height: 50px;
  color: ${(props) => (props.value ? 'white' : '#424242a1')};
  width: 100%;
  text-transform: uppercase;
  transition: color 0.3s ease-out;

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
