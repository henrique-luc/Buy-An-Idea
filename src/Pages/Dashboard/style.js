import styled from "styled-components"
import { BiUserCircle } from "react-icons/bi"
import { BsFillChatLeftDotsFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

export const Title = styled.h1`
    color: var(--color-secundary);
    font-size: 36px;
    padding-left: 40px;

    @media (min-width: 768px){
        font-size: 54px;
    }
`

export const MatchesUl = styled.ul`
    min-height: 450px;
    width: 100%;
    overflow-x: scroll;
    padding-left: 40px;
    margin-top: 50px;
    display: flex;
    align-items: center;

    @media (min-width: 768px){
        min-height: 600px;
        overflow-x: auto;
    }

`
export const Footer = styled.footer`
    height: 60px;
    width: 100%;
    border-top: solid 2px var(--gray-1);
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(min-width: 768px){
        display: none;
    }

    >div{
        width: 35px;
        height: 35px;
        background: linear-gradient(var(--gradient-green-blue));
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

`

export const BiUser = styled(BiUserCircle)`
    color: var(--gray-6);
    width: 30px;
    height: 30px;
`
export const BsChat = styled(BsFillChatLeftDotsFill)`
    color: var(--color-secundary);
    width: 30px;
    height: 30px;
`
export const HamburgerMenu = styled(GiHamburgerMenu)`
    width: 30px;
    height: 30px;
`

export const CustomMain = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`