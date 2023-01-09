import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`

export const Body = styled.div`
  // serve para estilos do body
  // p, a, ul, li, blockquote
  p {
    font-size: 30px;
    line-height: var(--medium);
  }
`

export const ContainerLink = styled.div`
  position: fixed;
  z-index: 1100; //bigger than leaflet
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;
`
