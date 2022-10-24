import Link from 'next/link'
import * as S from './styles'
import { withRouter, NextRouter } from 'next/router'

interface LinkActiveProps {
  href: string
  router: NextRouter
  children: string
}

export const LinkActive = withRouter<LinkActiveProps>(({ href, router, children }) => {
  const isActive = router.asPath === href

  return (
    <Link href={href} passHref>
      <S.LinkElement isActive={isActive}>{children}</S.LinkElement>
    </Link>
  )
})
