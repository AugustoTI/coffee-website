import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css``}
`

export const ProductsContainer = styled.div`
  ${() => css``}
`

export const ProductsFilters = styled.ul`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 2rem;
    margin-bottom: 3.5rem;

    li {
      position: relative;
      cursor: pointer;

      h3 {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        margin-bottom: 0.5rem;
      }

      span {
        font-size: var(--small-font-size);
      }

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 40px;
        background: var(--text-color-light);
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }

      &:nth-child(3) {
        position: initial;

        &::before {
          display: none;
        }
      }
    }
  `}
`

export const ProductsContentGrid = styled.div`
  ${() => css`
    grid-template-columns: 200px;
    justify-content: center;
  `}
`
