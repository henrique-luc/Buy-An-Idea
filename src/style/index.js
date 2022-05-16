import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-primary: #85E29C;
    --color-secundary: #FE8537;
    --color-support-1:#1DD3B0;
    --color-support-2: #B2FF9E;
    --yellow-1:#EEC73D;
    --gray-0:#FAFAFA;
    --gray-1:#DBDBDB;
    --gray-2:#B0B0B0;
    --gray-3:#757575;
    --gray-4:#4D4D4D;
    --gray-5:#AAAAAA;
    --gray-6:#F3F3F3;
    --gradient-green-blue: 268.02deg, #00B0FF -86.38%, rgba(92, 207, 104, 0.9) 170.14%;
}

#root{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
}

h1{
    font-size: 54px;
}

h2{
    font-size: 36px;
}

h3{
    font-size: 24px;
}

p,span{
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

li{
    list-style: none;
}

`;
