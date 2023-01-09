import Link from 'next/link'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
  telephoneWhatsapp: string
  email: string
  linkedin: string
}

const PageTemplate = ({
  heading,
  body,
  telephoneWhatsapp,
  email,
  linkedin
}: PageTemplateProps) => (
  <S.Content>
    <S.ContainerLink>
      <Link href="/">
        <CloseOutline size={32} aria-label="Home" />
      </Link>
    </S.ContainerLink>

    <S.Heading>More info</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div
        dangerouslySetInnerHTML={{ __html: telephoneWhatsapp }}
        style={{ fontSize: '20px', margin: '10px 0' }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: email }}
        style={{ fontSize: '20px', margin: '10px 0' }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: linkedin }}
        style={{ fontSize: '20px', margin: '10px 0' }}
      />
    </S.Body>
  </S.Content>
)
export default PageTemplate
