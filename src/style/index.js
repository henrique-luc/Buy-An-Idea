import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --green-1: #5CCF6890;
    --green-2: #5CCF6880;
    --green-3:#2A8F3490;
    --blue-1:#C0DECD;
    --blue-2: #7753CF;
    --yellow-1:#EEC73D;
    --white-1:#E5E5E5;
    --white-2:#FFFFFF;
    --gray-1:#5E5E5E;
    --gray-2:#AAAAAA;
    --gray-3:#B5B5B5;
    --gray-4:#F3F3F3;
    --gray-5:#F6F6F6;
    --gray-6:#EFEFEF;
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