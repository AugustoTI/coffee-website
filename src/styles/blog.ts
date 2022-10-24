import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    @media screen and (min-width: 576px) {
      ${BlogContent} {
        grid-template-columns: 450px;
        justify-content: center;
      }
    }

    @media screen and (min-width: 1072px) {
      ${BlogContainer} {
        padding-bottom: 5rem;
      }

      ${BlogContent} {
        grid-template-columns: repeat(2, 450px);
        padding-top: 2rem;
        column-gap: 5rem;
      }
    }
  `}
`

export const BlogContainer = styled.div`
  ${() => css`
    padding-bottom: 2rem;
  `}
`

export const BlogContent = styled.div`
  ${() => css`
    row-gap: 3rem;
  `}
`

export const BlogCard = styled.article`
  ${() => css`
    .blog_image {
      position: relative;
      margin-bottom: 1.5rem;

      img {
        border-radius: 0.5rem;
      }

      a {
        display: inline-flex;
        padding: 1.15rem;
        background: #fff;
        border-radius: 0.5rem 0 0.5rem 0;
        font-size: 2rem;
        color: var(--title-color);
        position: absolute;
        right: 0;
        bottom: 0;

        &:hover svg {
          transform: rotate(-30deg) translateX(0.25rem);
        }

        svg {
          transform: rotate(-30deg);
          transition: 0.4s;
        }
      }
    }
  `}
`

export const BlogData = styled.div`
  ${() => css`
    h2 {
      font-size: var(--h2-font-size);
      margin-bottom: 0.75rem;
    }

    p {
      margin-bottom: 1.5rem;
    }
  `}
`

export const BlogFooter = styled.div`
  ${() => css`
    &,
    .blog_reaction {
      display: flex;
      align-items: center;
    }

    column-gap: 1.5rem;

    .blog_reaction {
      column-gap: 0.25rem;

      svg {
        font-size: 1.25rem;
      }

      span {
        font-size: var(--small-font-size);
      }
    }
  `}
`
