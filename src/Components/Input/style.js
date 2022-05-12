import styled from "styled-components"

export const CustomLabel = styled.label`
    width: 414px;
    margin-bottom: 28px;
    margin-right: 34px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    p{
        font-size: 20px;
        color: var(--gray-4);
        margin-bottom: 12px;
    }
`

export const CustomInput = styled.input`
    width: 100%;
    height: 60px;
    padding-left: 15px;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.errors? "#B22222" : "#B2FF9E")};

`