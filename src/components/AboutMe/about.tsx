import React from 'react'
import Svg from './svgs'

import * as S from './styles'

const About = () => {
  return (
    <>
      <S.FlexCenter
        style={{
          marginTop: '-60px',
          justifyContent: 'center',
          borderRadius: '50%'
        }}
        id="about"
      >
        <img
          src="img/me.jpeg"
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: '50%' }}
        />
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <S.Color>01.</S.Color>
        <S.Title>About Me</S.Title>
        <S.Horizontal />
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <div>
          Hello! My name is Abner and I enjoy creating things that live on the
          internet. My interest in web development started back in 2019 when I
          decided to curses computer science.
        </div>
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <div>
          From then on I`m in a constant search for knowledge in software and
          programming, always learning new languages in search of growth in
          knowledge and to be a better programmer every day.
        </div>
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <div>
          currently working in a startup focused on the frontend, sometimes
          taking risks on the backend as well
        </div>
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px' }}>
        <div>Here are a few technologies I`ve been working with recently:</div>
      </S.FlexCenter>
      <S.FlexCenter style={{ marginTop: '20px', columnGap: '30px' }}>
        <Svg />
      </S.FlexCenter>
    </>
  )
}

export default About
