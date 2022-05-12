import styled from "styled-components";

export const CustomSelect = styled.label`
    width: 324px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    select{
        width: 100%;
        height: 42px;
        padding-left: 15px;
        border-radius: 5px;
        border: 1px solid  var(--color-secundary);
    }
    
    p{
        font-size: 14px;
        color: var(--gray-3);
        margin-bottom: 9px;
        font-weight: 500;
    }

    span{
        font-size: 14px;
        color: #B22222 ;
    }

    @media (min-width: 768px){
        width: 414px;
        select{
            height: 60px;
            border: 2px solid  var(--color-secundary);
            border-radius: 10px;
        }
        p{
            font-size: 20px;
        }
    }
`