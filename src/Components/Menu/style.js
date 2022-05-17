import { Accordion,AccordionDetails } from "@mui/material"
import { BsArrowUpSquare } from "react-icons/bs"
import styled from "styled-components"

export const ArrowDown = styled(BsArrowUpSquare)`
    color: var(--color-secundary);
    width: 20px;
    height: 20px;
`

export const CustomAccordion = styled(Accordion)`
    display: none;
    height: 100px;
    min-width: 300px;
    height: 90%;

    h1{
        font-size: 32px;
        color: var(--color-secundary);
    }

    @media (min-width: 768px){
        display: flex;
        flex-direction: column;
    }
`
export const CustomAccordionContent = styled(AccordionDetails)`
    height: 640px;
    display: flex;
    flex-direction: column;

    a{
        font-size: 32px;
        color: var(--gray-3);
        margin-bottom: 36px;
        padding-left: 4px;
        cursor: pointer;
    }

    a:hover{
        border-left: 4px solid var(--color-secundary);

        color: var(--color-secundary);
    }
`