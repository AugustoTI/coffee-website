import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    && {
      gap: 0;
    }
  `}
`

export const HomeContainer = styled.div`
  ${() => css`
    padding: 7rem 0 2.5rem;
    background: linear-gradient(
      160deg,
      hsla(206, 5%, 24%, 1) -4%,
      hsla(206, 12%, 12%, 1) 46%
    );
  `}
`

export const HomeContent = styled.div`
  ${() => css`
    > h1 {
      color: #fff;
      font-size: var(--biggest-font-size);
      margin-bottom: 1.5rem;

      span {
        color: var(--first-color);
      }
    }

    > p {
      margin-bottom: 2rem;
    }
  `}
`

export const HomeData = styled.div`
  ${() => css`
    border-top: 1px solid var(--text-color);
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  `}
`

export const HomeDataGroup = styled.div`
  ${() => css`
    h2 {
      color: var(--first-color);
      font-size: var(--h1-font-size);
      margin-bottom: 1.5rem;
    }

    h3 {
      color: #fff;
      font-size: var(--h3-font-size);
      margin-bottom: 0.5rem;
    }
  `}
`
