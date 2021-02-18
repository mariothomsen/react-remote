import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Overlay.propTypes = {
  className: PropTypes.string,
  status: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function Overlay({ className, status, children, onClick }) {
  return (
    <StyledOverlay status={status} className={className} onClick={onClick}>
      {children}
    </StyledOverlay>
  )
}
const StyledOverlay = styled.div`
  box-sizing: border-box;
  width: 100%;

  height: 100%;
  color: white;
  background-color: #000000e3;
  top: 0;
  position: fixed;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  font-size: 35px;
  z-index: 1000;
  opacity: ${(props) => (props.status ? '100' : '0')};
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  display: grid;
  transition: opacity 0.2s ease-in;
  padding: 30px;
`
