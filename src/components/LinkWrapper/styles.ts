import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; //bigger than leaflet
  top: var(--medium);
  right: var(--medium);
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 15px;

  svg {
    color: var(--white);
    transition: color 0.3s ease-in-out;
  }

  svg:hover {
    color: var(--highlight);
  }

  a {
    color: var(--white);
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--highlight);
  }
`
