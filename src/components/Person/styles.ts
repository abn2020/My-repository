import styled from 'styled-components'

export const Div = styled.div`
  font-size: 20px;
  top: var(--medium);
  right: var(--medium);
  color: var(--green);
  padding: 10px 0;
`

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: var(--container);
  height: 50vh;
  margin: auto;
`

export const Section = styled.section`
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-size: 80px;
  color: var(--grey);
`

export const H2 = styled.h2`
  font-size: 60px;
  color: var(--slate);
`

export const Paragraph = styled.p`
  font-size: 20px;
  color: var(--slate);
  text-align: left;
  max-width: 40vw;
  line-height: 35px;
`
