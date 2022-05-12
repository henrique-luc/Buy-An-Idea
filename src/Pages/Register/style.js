import styled from "styled-components"

export const CustomMain = styled.main`
    padding-top: 19px;
    width: 100%;
    height: 100%;
`
export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo= styled.div`
    width: 184px;
    display: flex;
    justify-content: space-between;

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
        width: 276px;
        height: 55px;
        font-size: 36px;
        background: var(--gray-0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        img{
            width: 36px;
        }
        span{
            font-size: 36px;
        }
    }
`