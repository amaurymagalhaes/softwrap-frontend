import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: 0;
}

body{
  background: #F3F4F6;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font: 16px Roboto, sans-serif;
  background: none;
  border: none;
}

#root{
  width: 100%;
  height: 100%;
  background-color: #F3F4F6;
}
`;
