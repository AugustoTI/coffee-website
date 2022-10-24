import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    @media screen and (min-width: 576px) {
      ${SpecialtyCategory} {
        grid-template-columns: repeat(2, 200px);
        column-gap: 3rem;
      }
    }

    @media screen and (min-width: 1072px) {
      ${SpecialtyBox} {
        display: grid;
        grid-template-columns: 2fr 0.5fr;
      }

      ${SpecialtyCategoryGroup} {
        text-align: initial;

        img {
          width: 80px;
          margin-bottom: 1.5rem;
        }

        &:not(&:last-child) {
          position: relative;

          &::before {
            content: '';
            width: 1px;
            height: 120px;
            position: absolute;
            background: var(--text-color-light);
            right: -5rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
          }
        }
      }

      ${SpecialtyCategory} {
        grid-template-columns: repeat(3, 250px);
        column-gap: 8rem;
      }
    }
  `}
`

export const SpecialtyContainer = styled.div`
  ${() => css``}
`

export const SpecialtyBox = styled.div`
  ${() => css`
    a.button {
      margin-left: 1.25rem;
    }
  `}
`

export const SpecialtyCategory = styled.div`
  ${() => css`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 200px;
    justify-content: center;
    row-gap: 2.5rem;
  `}
`

export const SpecialtyCategoryGroup = styled.div`
  ${() => css`
    text-align: center;

    &:hover img {
      transform: translateY(-0.25rem);
    }

    h3 {
      font-size: var(--h2-font-size);
      margin-bottom: 0.25rem;
    }

    img {
      width: 60px;
      margin-bottom: 1rem;
      transition: 0.4s;
    }
  `}
`
