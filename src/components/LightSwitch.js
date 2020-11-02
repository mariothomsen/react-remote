import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';


export default LightSwitch

LightSwitch.propTypes = {
    nodes: PropTypes.array.isRequired
}

function onChangeValue(event) {
    console.log(event.target.value);
}


function LightSwitch({states}){
    return  <RadioButtonsStyled >
                {states.map(state => {
                    return (<label htmlFor={state.node}>{state.node}<input onChange={onChangeValue} id={state.node} value={state.node} type="radio" name="tes" /></label>)
                })}
            </RadioButtonsStyled>
}

const RadioButtonsStyled = styled.div`
    background-color: green;


    input[type="radio"] {
        visibility: hidden; /* 1 */
        height: 0; /* 2 */
        width: 0; /* 2 */
      }
      
      label {
        cursor: pointer;
        background-color: grey;
        color: white;
        padding: 5px 10px;
        border-radius: 6px;
        transition: color --transition-fast ease-out, 
        background-color --transition-fast ease-in;

      }
      
      label:last-of-type {
       margin-right: 0;
      }
      
      input[type="radio"]:checked + label {
        background-color: pink;
        color: black;
      }
      
      input[type="radio"]:hover:not(:checked) + label {
       background-color: pink;
       color: black;
      }
      
      


`




