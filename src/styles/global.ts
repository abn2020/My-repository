import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
      --highlight: #e20e8d;
      --background: #060715;
      --white: #eeeeee;
      --container: 100rem;
      --small: 1.5rem;
      --medium: 3rem;
      --large: 5rem;
      --green: #64ffda;
      --grey: #ccd6f6;
      --slate: #8892b0;
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box; 
    }

    html, body, #__next {
        height: 100%;
        background: var(--background);
        color: var(--white)
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    p{
        font-size: 2rem;
        line-height: var(--medium);
    }

    a{
        color: var(--highlight)
    }
`
export default GlobalStyles
