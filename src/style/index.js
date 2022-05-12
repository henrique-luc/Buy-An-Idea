import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-primary: #AEF449;
    --color-secundary: #086375;
    --color-support-1:#3C1642;
    --color-support-2:#1DD3B0;
    --color-support-3: #B2FF9E;
    --yellow-1:#EEC73D;
    --gray-0:#FAFAFA;
    --gray-1:#DBDBDB;
    --gray-2:#B0B0B0;
    --gray-3:#757575;
    --gray-4:#4D4D4D;
}

#root{
    background-color: var(--gray-5);
    width: 100vw;
    height: 100vh;
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

img{
    width: 200px;
    animation: identifier 10s linear infinite;
}

@keyframes identifier {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
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

`