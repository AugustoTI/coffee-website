import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiX, BiGridAlt } from 'react-icons/bi'
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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/premium">
                <a>Premium</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
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
