import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${() => css`
    background: var(--container-color);
    border-radius: 0.5rem;

    &:hover ${Shape} img {
      transform: translateY(-0.25rem);
    }
  `}
`

export const Shape = styled.div`
  ${() => css`
    background-color: var(--card-color);
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    padding: 0.25rem 0;

    img {
      width: 150px;
      transition: 0.4s;
    }
  `}
`

export const Data = styled.div`
  ${() => css`
    padding: 1rem 0 1.25rem 1rem;
    position: relative;

    h2 {
      font-size: var(--normal-font-size);
    }

    button {
      border-radius: 50%;
      padding: 0.625rem;
      display: inline-flex;
      font-size: 1.25rem;
      position: absolute;
      top: -1.25rem;
      right: 1rem;
      box-shadow: 0 4px 12px hsla(206, 4%, 4%, 0.2);
    }
  `}
`
