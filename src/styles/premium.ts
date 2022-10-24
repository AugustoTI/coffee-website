import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    @media screen and (max-width: 320px) {
      ${PremiumImages} .image_small {
        transform: translateX(-6rem);
      }

      ${PremiumButtons} {
        flex-direction: column;
        row-gap: 1rem;
      }
    }

    @media screen and (min-width: 767px) {
      ${PremiumContent} {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
      }
    }

    @media screen and (min-width: 1072px) {
      ${PremiumContent} {
        column-gap: 6rem;
      }

      ${PremiumImages} {
        margin-top: 2rem;

        .image_big {
          width: 428px;
        }

        .image_small {
          width: 153px;
          transform: translateX(-7rem);
        }
      }

      ${PremiumData} {
        h1 {
          margin-bottom: 1.5rem;
        }

        span {
          margin-bottom: 1rem;
        }
      }
    }
  `}
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
