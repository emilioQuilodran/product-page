import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Kumbh Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
p {
    font-size: 16px;
}
`

export const Main = styled.div`
    max-width: 980px;
    margin: 0 auto;
`