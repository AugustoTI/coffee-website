import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiX, BiGridAlt } from 'react-icons/bi'
import { LinkActive } from '../LinkActive'
import * as S from './styles'

export const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false)
  const [backgroundActive, setBackgroundActive] = useState(false)

  const routes = useRouter()

  useEffect(() => {
    setMenuActive(false)
  }, [routes.asPath])

  useEffect(() => {
    const scrollHeader = () => {
      if (scrollY >= 50) {
        setBackgroundActive(true)
      } else {
        setBackgroundActive(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <S.Container backgroundActive={backgroundActive}>
      <S.HeaderNav className="container">
        <Link href="/" passHref>
          <S.HeaderLogo>
            <img src="/logo.png" alt="" />
            Coffee
          </S.HeaderLogo>
        </Link>

        <S.HeaderNavMenu isMenuActive={isMenuActive}>
          <ul>
            <li>
              <LinkActive href="/">Home</LinkActive>
            </li>
            <li>
              <LinkActive href="/products">Products</LinkActive>
            </li>
            <li>
              <LinkActive href="/premium">Premium</LinkActive>
            </li>
            <li>
              <LinkActive href="/blog">Blog</LinkActive>
            </li>
          </ul>

          <S.HeaderButtonClose onClick={() => setMenuActive(false)}>
            <BiX />
          </S.HeaderButtonClose>
        </S.HeaderNavMenu>
        <S.HeaderButtonOpen onClick={() => setMenuActive(true)}>
          <BiGridAlt />
        </S.HeaderButtonOpen>
      </S.HeaderNav>
    </S.Container>
  )
}
