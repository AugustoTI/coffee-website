import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    background-color: #fff;

    @media screen and (min-width: 1072px) {
      ${LogosContainer} {
        grid-template-columns: repeat(5, 1fr);
        padding: 3.5rem 0;

        img {
          width: 110px;
        }
      }
    }
  `}
`

export const LogosContainer = styled.div`
  ${() => css`
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: 2.5rem 2rem;
    border-top: 1px solid var(--text-color-light);
    padding-top: 2.5rem;

    img {
      width: 80px;
      mix-blend-mode: luminosity;
      opacity: 0.4;
      transition: 0.4s;

      &:hover {
        opacity: 1;
        mix-blend-mode: normal;
      }
    }
  `}
`
