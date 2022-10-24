import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${() => css`
    background: var(--black-color);
    padding: 4.5rem 0 2.5rem;
  `}
`

export const FooterContainer = styled.div`
  ${() => css`
    h1 {
      color: #fff;
      margin-bottom: 2rem;
      font-size: var(--h1-font-size);
    }
  `}
`

export const FooterContent = styled.div`
  ${() => css`
    row-gap: 2.5rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--text-color);
  `}
`

export const FooterData = styled.div`
  ${() => css`
    &:nth-child(1) p {
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: var(--h2-font-size);
      color: #fff;
      margin-bottom: 0.75rem;
    }

    p img {
      width: 1rem;
    }
  `}
`

export const FooterNewsletter = styled.div`
  ${() => css`
    display: flex;
    column-gap: 0.5rem;

    input {
      border: none;
      outline: none;
      padding: 1.25rem 1rem;
      border-radius: 0.25rem;
      width: 70%;
      color: var(--text-color);
    }

    button {
      display: inline-flex;
      padding: 0.75rem;
      font-size: 2rem;
      border-radius: 0.25rem;
      background: var(--first-color);

      &:hover svg {
        transform: rotate(-30deg) translateX(0.25rem);
      }

      svg {
        transform: rotate(-30deg);
        transition: 0.4s;
      }
    }
  `}
`

export const FooterGroup = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1.5rem;

    ul {
      display: flex;
      justify-content: center;
      column-gap: 1.5rem;
      margin-bottom: 2rem;
      font-size: 1.25rem;

      a {
        color: #fff;
        transition: 0.4s;

        &:hover {
          color: var(--first-color);
        }
      }
    }

    span {
      font-size: var(--small-font-size);
    }
  `}
`
