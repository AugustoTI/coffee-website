import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${() => css`
    background: var(--black-color);
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 576px) {
      ${FooterNewsletter} {
        width: 350px;
      }
    }

    @media screen and (min-width: 767px) {
      ${FooterContent} {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
      }
    }

    @media screen and (min-width: 1072px) {
      ${FooterContent} {
        grid-template-columns: repeat(4, max-content);
        column-gap: 4rem;
        padding-bottom: 5.5rem;
      }

      ${FooterGroup} {
        margin-top: 3rem;
        justify-content: space-between;
        flex-direction: row;

        ul {
          column-gap: 2rem;

          a {
            font-size: 1.5rem;
          }
        }
      }

      ${FooterContainer} {
        h1 {
          font-size: var(--h2-font-size);
        }
      }
    }
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
