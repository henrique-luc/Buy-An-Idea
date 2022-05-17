import { Box, LinearProgress } from "@mui/material"
import { style } from "@mui/system"
import styled from "styled-components"

export const CustomDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    margin-top: 45px;

    h2{
        margin-bottom: 60px;
        width: 100%;
        color: var(--color-secundary);
    }

    @media (min-width: 768px) {
        margin-top: 32px;
    }
`
export const DivEndereco = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 324px;
    height: 200px;
    margin-bottom: 15px;
    border: solid 1px var(--color-secundary);

    input,select{
        height: 40px;
        width: 40%;
        border: none;
        border-bottom: 1px solid var(--gray-2);
    }

    @media (min-width: 768px){
        width: 100%;
        margin: 0;
    }
`

export const CustomText = styled.div`
    p{
        display: none;
    }
    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
        padding-top: 45px;
        align-items: center;
        padding-bottom: 250px;
        width: 40%;
        background: linear-gradient(var(--gradient-green-blue)) ;

        p{  
            margin-top: 25%;
            display: flex;
            width: 80%;
            color: var(--gray-6);
            font-size: 36px;
        }
    }
    
`

export const FormBox = styled.div`
    width: 100%;

    @media (min-width: 768px){
        width: 60%;
        padding-left: 3%;
    }
`

export const CustomLinearProgress = styled(LinearProgress)`
    width: 95%;
`
export const CustomBox = styled(Box)`
    div{
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        width: 100%;
        padding-left: 42px;
    }
    div>p{
        width: 75px;
        margin-right: 45px;
        font-size: 12px;
    }

    div>p:nth-of-type(3){
        margin-right: 0;
    }

    @media (min-width: 768px){
        div{
            justify-content: space-evenly;
        }
        div>p{
            font-size: 20px;
            width: 150px;
        }
    }
`

export const CustomMain = styled.main`
    padding-top: 19px;
    width: 100%;
    min-height: 100vh;

    @media (min-width: 768px) {
        padding-top: 0;
        display: flex;
    }
`

export const DivButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;

    button{
        background-color: transparent;
        border: none;
        color: var(--color-secundary);
        font-weight: 500;
        font-size: 17px;
        display: flex;
        align-items: center;
        width: 135px;
        justify-content: space-between;
    }
    
    @media (min-width: 768px) {
        margin-top: 110px;
        padding-right: 50px;
        justify-content: flex-end;
    }
`

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 266px;
    }

    h3{
        text-align: center;
        color: var(--gray-2);
        margin: 20px 0;
    }

    @media (min-width: 768px) {
        img{
            width: 406px;
        }
        h3{
            margin: 40px 0;
        }
    }

`

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    >section>p{
        color: var(--gray-3);
        font-size: 14px;
        margin: 0;
        margin-bottom: 9px;
        font-weight: 500;
        width: 100%;
    }

    button{
        margin-top: ${props => props.progress >= 99&& "20px"};
    }

    @media (min-width: 768px){
        flex-direction: ${props => props.progress >= 99? "column" : "row" };
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 91px;
        width: 100%;

        button{
            margin-top: ${props => props.progress >= 99&& "40px"};
            margin-bottom: ${props => props.progress >= 99&& "40px"};
        }

        >section{
        width: 93%;
        }

        >section>p{
            display: flex;
            justify-content: flex-start;
            font-size: 20px;
            margin-top: 20px;
        }
    }
`

export const Logo = styled.div`
    width: 174px;
    display: flex;
    justify-content: space-between;
    margin-left: 32px;

    h1{
        background: -webkit-linear-gradient(var(--gradient-green-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Open Sans', sans-serif;
        font-size: 26px;
    }

    img{
        width: 26px;
    }

    span{
        font-size: 26px;
        font-weight: 300;
    }

    @media (min-width: 768px) {
        margin-left: 0;
        width: 276px;
        h1{
            width: 276px;
            height: 55px;
            font-size: 36px;
            background: var(--gray-6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        img{
            width: 36px;
        }
        span{
            font-size: 36px;
        }
    }
`