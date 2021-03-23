import styled from 'styled-components/macro'
import { useState } from 'react'

export default CardExtension

function CardExtension({ children, initialState }) {
  return (
    <StyledDiv extensionState={initialState}>
      <StyledContent>{children}</StyledContent>
    </StyledDiv>
  )
}

/* accordion */
const StyledDiv = styled.div`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  display: ${(props) => (props.extensionState ? 'block' : 'none')};
`

const StyledContent = styled.div`
  padding: 0 18px;

  overflow: hidden;
  background-color: #f1f1f1;
`
