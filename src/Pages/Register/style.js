import { Box, LinearProgress } from "@mui/material"
import styled from "styled-components"

export const CustomDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    margin-top: 45px;
    margin-bottom: 32px;

    h2{
        margin-bottom: 60px;
        width: 100%;
        color: var(--color-secundary);
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
            color: var(--gray-0);
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

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 91px;
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
            background: var(--gray-0);
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