import { Link, animateScroll as scroll } from 'react-scroll'
import LinkNext from 'next/link'
import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      01. About
    </Link>
    <Link
      activeClass="active"
      to="worked"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      02. Worked
    </Link>
    <Link
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      03. Contact Me
    </Link>
    <LinkNext href={href}>{children}</LinkNext>
  </S.Wrapper>
)

export default LinkWrapper
