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
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

  background-color: var(--color-primary);
  border: 0 solid currentColor;
  border-radius: 3px;
  color: ${(props) => (props.value ? 'white' : '#424242cc')};
  width: 100%;
  text-transform: uppercase;
  transition: color 0.3s ease-out;
  vertical-align: 'baseline';
  height: 50px;
  font-size: 8px;

  &:focus {
    outline: 0px solid #fff;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.3s ease-out;
  }

  span {
    margin-top: 2px;
    letter-spacing: 0.5px;
  }

  svg {
    padding-bottom: 2px;
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
