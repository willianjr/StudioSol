import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background:linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%);
  --black:#000;
  --white:#FFF;
  --success:#32BF00;
  --error:#CC3300;
  --orange:#EF6C00;

}

*{
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
}
body{
  background:var(--background);
  background-size:contain;
  margin:0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

}

[disabled]{
  opacity:0.8;
  cursor:not-allowed;
}

button{border:none}
`
