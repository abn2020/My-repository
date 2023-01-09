import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import Person from 'components/Person'

export default function HomeTemplate() {
  return (
    <>
      <NextSeo
        title="My Portfolio"
        description="A simple project to show me, show my skills, show my person and you see about me."
        canonical="https://my-trips.abnermartins.com.br"
        openGraph={{
          url: 'https://my-trips.abnermartins.com.br',
          title: 'My Trips',
          description:
            'A simple project to show me, show my skills, show my person and you see about me.',
          images: [
            {
              url: 'https://my-trips.abnermartins.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Portfolio'
            }
          ],
          site_name: 'My Portfolio'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Person />
    </>
  )
}
