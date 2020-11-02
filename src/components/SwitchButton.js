import styled from 'styled-components/macro';
import PropTypes from 'prop-types'

export default SwitchButton





function SwitchButton({node, onClick, value, color}){
    return  <StyledButton  onClick={onClick} className={value} >
                {node}
            </StyledButton>
       
}

const StyledButton = styled.button`
    background-color: ${props => props.className ? "palevioletred" : "blue"};
    color: ${props => props.color};
    `

/*

className={value ? 'active': 'inactive'}
*/



/*

    return  <StyledButton  onClick={onClick} className={value} >
                {node}
            </StyledButton>
        } else {
            return  <StyledButton2  onClick={onClick} className={value} >
            {node}
        </StyledButton2>   
        }
*/