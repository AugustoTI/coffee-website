import styled, { css } from 'styled-components'
import {
  Container as ProductCard,
  Shape as ProductCardShape,
  Data as ProductCardData,
} from '../components/ProductCard/styles'

export const Wrapper = styled.section`
  ${() => css`
    @media screen and (min-width: 576px) {
      ${ProductsContentGrid} {
        grid-template-columns: repeat(2, 200px);
        padding-bottom: 3rem;
      }
    }

    @media screen and (min-width: 767px) {
      ${ProductsFilters} {
        grid-template-columns: repeat(3, 200px);
      }
    }

    @media screen and (min-width: 1072px) {
      ${ProductsFilters} {
        margin: 4rem 0 5.5rem;
        column-gap: 4rem;
      }

      ${ProductsContentGrid} {
        grid-template-columns: repeat(3, 262px);
        justify-content: initial;
        column-gap: 5rem;
      }

      ${ProductCard} {
        border-radius: 0.75rem;

        ${ProductCardShape} {
          padding: 2rem 0;
          border-radius: 0.75rem 0.75rem 0 0;

          img {
            width: 200px;
          }
        }

        ${ProductCardData} {
          padding: 1rem 0 1.5rem 1.5rem;

          h3 {
            font-size: var(--h3-font-size);
          }

          button {
            font-size: 1.5rem;
            padding: 0.75rem;
            right: 1.5rem;
            top: -1.5rem;
          }
        }
      }
    }
  `}
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

      &.active h3 {
        color: var(--title-color);
      }

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
