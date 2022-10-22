import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css``}
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
