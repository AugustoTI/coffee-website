import styled, { css } from 'styled-components'

interface HeaderContainerProps {
  backgroundActive: boolean
}

interface HeaderNavMenuProps {
  isMenuActive: boolean
}

const handleChangeBackground = (active: boolean) => {
  if (active) {
    return css`
      background: var(--body-color);
      box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);

      ${HeaderLogo}, ${HeaderButtonOpen} {
        color: var(--title-color);
      }

      ${HeaderLogo} img {
        mix-blend-mode: difference;
      }
    `
  }

  return css`
    background: #101010;
  `
}

export const Container = styled.header<HeaderContainerProps>`
  ${({ backgroundActive }) => css`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    transition: background 0.2s;
    ${handleChangeBackground(backgroundActive)}
  `}
`

export const HeaderNav = styled.nav`
  ${() => css`
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const HeaderLogo = styled.a`
  ${() => css`
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: var(--font-bold);

    img {
      width: 0.75rem;
    }
  `}
`

export const HeaderNavMenu = styled.div<HeaderNavMenuProps>`
  ${({ isMenuActive }) => css`
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 3rem;
      padding-top: 30vh;
      text-align: center;
    }

    a {
      text-transform: uppercase;
      color: var(--text-color-light);
      font-size: var(--h2-font-size);
      transition: 0.3s;

      &:hover {
        color: #fff;
      }
    }

    @media screen and (max-width: 767px) {
      position: fixed;
      background-color: var(--black-color);
      top: 0;
      right: ${isMenuActive ? 0 : '-100%'};
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
  `}
`

export const HeaderButtonClose = styled.button`
  ${() => css`
    color: #fff;
    background: transparent;
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  `}
`

export const HeaderButtonOpen = styled.button`
  ${() => css`
    color: #fff;
    background: transparent;
    display: inline-flex;
    font-size: 1.25rem;
  `}
`
