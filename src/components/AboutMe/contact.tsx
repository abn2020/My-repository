import React from 'react'
import Button from '@mui/material/Button'

import * as S from './styles'

const contact = () => {
  return (
    <>
      <S.FlexCenter style={{ marginTop: '300px' }} id="contact">
        <S.Color>03.</S.Color>
        <S.Title>Contact Me</S.Title>
        <S.Horizontal />
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <div>
          If you are interested, you can contact me directly through my email by
          clicking the button below.
        </div>
      </S.FlexCenter>
      <S.FlexCenter
        style={{
          marginTop: '30px',
          paddingBottom: '30px',
          justifyContent: 'center'
        }}
      >
        <Button
          variant="outlined"
          size="large"
          href="mailto:abner.09.martins@gmail.com"
        >
          Contactar Me
        </Button>
      </S.FlexCenter>
    </>
  )
}

export default contact
