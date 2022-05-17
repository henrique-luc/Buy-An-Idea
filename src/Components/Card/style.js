import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"

export const LiCard = styled.li`
    min-width: 251px;
    height: 306px;
    background-color: var(--white-1);
    box-shadow: 0px 3.07975px 3.07975px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 26px;

    >img{
        width: 105px;
        height: 105px;
        border-radius: 100%;
        position: relative;
        bottom: 60px;
        border: solid 1px var(--color-primary);
    }

    h3{
        color: var(--green-1);
        font-size: 24px;
        position: relative;
        bottom: 50px;
    }

    p{
        color: var(--gray-3);
        font-size: 18px;
        position: relative;
        bottom: 40px;
        width: 80%;
        text-align: center;
        height: 90px;
        
    }

    div{
        position: relative;
        top: 50px;
        display: flex;
        width: 90%;
        justify-content: space-around;
    }

    button:nth-of-type(1){
        border: 3px solid var(--color-secundary);
        color:var(--color-secundary);
        font-size: 28px;
    }

    button:nth-of-type(2){
        border: 3px solid var(--gray-6);
        color:var(--gray-1);
        font-size: 28px;
    }

    button:nth-of-type(3){
        border: 3px solid var(--color-primary);
        color:var(--color-primary);
        font-size: 28px;
    }

    button{
        width: 61px;
        height: 61px;
        border-radius: 100%;
        background-color: var(--gray-6);
        box-shadow: 0px 3.07975px 8.46933px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 768px){
        width: 326px;
        height: 398px;

        >img{
            width: 137px;
            height: 137px;
        }

        h3{
            font-size: 32px;
        }

        p{
            height: 130px;
            font-size: 20px;
        }

        button{
            width: 79px;
            height: 79px;
        }
    }

`
export const HamburgerMenu = styled(GiHamburgerMenu)`
    color: var(--gray-3);

`

