import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    /* Primary Palette */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
/* Grey Scale Palette */
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    /* Feedback Palette */
    --sucess: #3FE864;
    --negative: #E83F5B;

}

body{
    width: 100vw;
    height: 100vh;
    background-color: var(--grey-4)
}

button{
    cursor: pointer;

}

h1 h2 h3 h4{
    color: #FFFFFF
}


`;
