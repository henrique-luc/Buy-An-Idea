import styled from "styled-components"
import { CustomForm } from "../Register/style"

export const CustomFormInvest = styled(CustomForm)`
    button{
        margin-top: 20px;
        margin-bottom: 40px;
    }
    @media (min-width: 768px){
        margin-top: 20px;
        button{
            margin-top: 40px;
            margin-bottom: 0;
        }
    }
`