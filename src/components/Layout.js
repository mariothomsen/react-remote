import styled from 'styled-components/macro'

export default Layout

function Layout({ children, layout, desktopLayout }) {
  return (
    <StyledDiv desktopLayout={desktopLayout} layout={layout}>
      {children}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.layout};

  @media only screen and (max-width: 800px) {
    grid-template-columns: ${(props) =>
      props.desktopLayout ? props.desktopLayout : props.layout};
  }
`
