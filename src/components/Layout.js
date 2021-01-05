import styled from 'styled-components/macro'

export default Layout

function Layout({ children, layout }) {
  return <StyledDiv layout={layout}>{children}</StyledDiv>
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.layout};
`
