import styled from 'styled-components'

export const WrapperNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  float: left;
  position: fixed;
  font-size: 0;
  z-index: 1;
  left: 10px;
  right: 10px;
  bottom: 10px;
  max-width: 30px;

  a {
    margin: 10px 0;
    cursor: pointer;
  }
`

export const Vertical = styled.div`
  height: 150px;
  border-left: 1px solid #fff;
`
