import styled from 'styled-components/macro'

export default function RadioSwitch({
  node,
  options,
  currentValue,
  onChange,
  mykey,
  buttonstyle,
}) {
  return (
    <StyledForm data-js={'x' + buttonstyle} buttonstyle={buttonstyle}>
      {options.map((option, index) => (
        <StyledDiv key={'input' + node + index}>
          <input
            id={mykey + '-' + index}
            onChange={onChange}
            type="radio"
            value={option.value}
            checked={option.value === currentValue}
          />
          <label htmlFor={mykey + '-' + index}>{option.icon}</label>
        </StyledDiv>
      ))}
    </StyledForm>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`

const StyledForm = styled.div`
  background: ${(props) =>
    props.buttonstyle === 'flat' ? 'none' : 'var(--color-primary)'};

  font-weight: ${(props) => (props.buttonstyle === 'flat' ? '600' : '200')};
  color: ${(props) => (props.buttonstyle === 'flat' ? 'green' : 'red')};
  width: 100%;
  display: flex;
  border-radius: 3px;
  height: ${(props) => (props.buttonstyle === 'flat' ? '30px' : '50px')};

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + label {
    color: ${(props) =>
      props.buttonstyle === 'flat' ? 'var(--color-primary)' : 'white'};
    transition: color 0.3s ease-out;
  }

  label {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    color: white;
    color: #424242cc;
  }
`
