import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const theme = {
  breakpoints: {
    md: '660px',
    lg: '1024px',
  },
  color: {
    blue: '#40739e',
    white: '#f5f6fa',
    mustard: '#fbc531',
    navy: '#2f3640',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --protoss-pylon: ${theme.color.blue};
    --rise-n-shine: ${theme.color.mustard};
    --lynx-white: ${theme.color.white};
    --blue-nights: ${theme.color.navy};
    --layout-max-width: 120rem;
    --content-max-width: 48rem;
    --h-spacing: 1.5rem;
    --v-spacing: 1rem;
    --heading: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif;
    --body: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, sans-serif;
    font-size: 62.5%;
    @media screen and (min-width: ${theme.breakpoints.md})  {
      --h-spacing: 3rem;
      --v-spacing: 2rem;
    }
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--body);
    background-color: var(--lynx-white);
    color: var(--blue-nights);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-family: var(--heading);
    font-weight: 400;
    line-height: 1;
    span {
      background-image: linear-gradient(to bottom, transparent 0%, var(--rise-n-shine) 0.1%, var(--rise-n-shine));
      background-repeat: repeat-x;
    }
  }

  h1 {
    font-size: 6rem;
    margin: 0;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 12rem;
    }
    span {
      background-position: 100% calc(100% - 1.2rem);
      background-size: 0.12rem .8rem;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        background-position: 100% calc(100% - 2rem);
        background-size: 0.12rem 2rem;
      }
    }
  }

  h2 {
    font-size: 4rem;
    margin: 0 0 calc(var(--v-spacing) * 2);
    span {
      background-position: 100% calc(100% - 0.9rem);
      background-size: 0.12rem 0.7rem;
      @media screen and (min-width: ${theme.breakpoints.lg}) {
        background-position: 100% calc(100% - 0.8rem);
        background-size: 0.12rem 0.8rem;
      }
    }
  }

  h3 {
    font-size: 2.8rem;
    margin: 0 0 var(--v-spacing);
    span {
      background-position: 100% calc(100% - 0.6rem);
      background-size: 0.12rem 0.4rem;
    }
  }

  h4 {
    font-size: 1.8rem;
    margin: 0 0 var(--v-spacing);
  }

  main {
    max-width: var(--layout-max-width);
    margin: auto;
    padding: calc(var(--v-spacing) * 3) var(--h-spacing) var(--v-spacing);
    display: grid;
    grid-gap: calc(var(--v-spacing) * 3) var(--h-spacing);
    grid-template-columns: 1fr;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
    > section,
    > div {
      padding: calc(var(--v-spacing) * 2) 0;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        padding: 0;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
