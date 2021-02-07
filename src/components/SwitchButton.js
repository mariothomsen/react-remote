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
  color: ${(props) => (props.value ? 'white' : '#424242a1')};
  width: 100%;
  text-transform: uppercase;
  transition: color 0.3s ease-out;
  padding-top: 15px;
  vertical-align: 'baseline';

  &:hover {
  }

  &:focus {
  }

  &:focus {
    outline: 0px solid #fff;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.3s ease-out;
  }

  &:focus {
  }
`

/*
 transform: scale(0.9);
    transition: transform 0.3s ease-out;
      background-color: #a16e28;
    transition: background-color 0.3s ease-out;
    transform: scale(0.9);
    transition: transform 0.1s ease-out;

    background-color: ${props => props.value ? "palevioletred" : "blue"};

*/
