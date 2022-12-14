import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 3.5rem;
    /*========== Colors ==========*/
    --first-color: hsl(36, 72%, 48%);
    --first-color-alt: hsl(36, 72%, 44%);
    --black-color: hsl(206, 12%, 12%);
    --card-color: hsl(0, 0%, 90%);
    --title-color: hsl(206, 12%, 12%);
    --text-color: hsl(206, 4%, 42%);
    --text-color-light: hsl(206, 4%, 75%);
    --body-color: hsl(206, 4%, 97%);
    --container-color: #fff;
    /*========== Font and typography ==========*/
    --body-font: 'Lato', sans-serif;
    --biggest-font-size: 2.25rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;
    /*========== Font weight ==========*/
    --font-bold: 700;
    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    @media screen and (min-width: 968px) {
      --biggest-font-size: 3.5rem;
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: 0.875rem;
      --smaller-font-size: 0.813rem;
    }
  }

  ::-webkit-scrollbar{
    width: 0.6rem;
    background-color: hsl(206,4%,80%);
  }

  ::-webkit-scrollbar-thumb{
    background-color: hsl(206,4%,64%);

    &:hover {
      background-color: hsl(206,4%,48%);
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
  }

  h1,
  h2,
  h3 {
    color: var(--title-color);
    font-weight: var(--font-bold);
  }

  h1,
  h2,
  h3,
  p {
    line-height: 140%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  /*=============== REUSABLE CSS CLASSES ===============*/
  .container {
    max-width: 1024px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .section {
    padding: 4.5rem 0 2rem;
  }

  .section_title {
    position: relative;
    font-size: var(--h1-font-size);
    padding-left: 1.25rem;
    margin-bottom: 2.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
      width: 3px;
      height: 20px;
      background-color: var(--first-color);
    }
  }


  .button {
    display: inline-block;
    background: var(--black-color);
    color: #fff;
    padding: 1rem 1.75rem;
    border-radius: 0.25rem;
    font-size: var(--normal-font-size);
    text-transform: uppercase;
  }

  @media screen and (min-width: 767px) {
    .section {
      padding: 7rem 0 4rem;
    }
  }

  @media screen and (min-width: 1072px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    .section_title {
      padding-right: 15rem;
      padding-left: 1.75rem;

      &::before {
        height: 28px;
        width: 4px;
        top: 12px;
      }
    }
  }
`
