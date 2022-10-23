import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css``}
`

export const PremiumContainer = styled.div`
  ${() => css``}
`

export const PremiumContent = styled.div`
  ${() => css`
    row-gap: 2.5rem;
  `}
`

export const PremiumImages = styled.div`
  ${() => css`
    position: relative;
    justify-self: center;

    .image_big,
    .image_small {
      border-radius: 0.5rem;
    }

    .image_big {
      width: 280px;
    }

    .image_small {
      width: 100px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      transform: translateX(-5rem);
    }
  `}
`

export const PremiumData = styled.div`
  ${() => css`
    h1,
    h2 {
      font-size: var(--h1-font-size);
    }

    h1 {
      margin-bottom: 0.75rem;
    }

    h2 {
      margin-bottom: 0.25rem;
    }

    span {
      display: block;
      font-size: var(--small-font-size);
      margin-bottom: 0.75rem;
    }

    p {
      margin-bottom: 2.5rem;
    }
  `}
`

const animeArrow = keyframes`
  0% {
    transform: translateX(0)
  }

  50%{
    transform: translateX(0.25rem)
  }

  100%{
    transform: translateX(0);
  }
`

export const PremiumButtons = styled.div`
  ${() => css`
    display: flex;
    column-gap: 2rem;
    align-items: center;

    a {
      display: inline-flex;
      align-items: center;
      text-transform: uppercase;
      gap: 0.75rem;
      font-size: var(--normal-font-size);
      color: var(--title-color);

      &:hover > svg {
        animation: ${animeArrow} 0.7s infinite;
      }

      > svg {
        font-size: 1.25rem;
        transition: 0.4s;
      }
    }
  `}
`
