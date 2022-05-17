import { AccordionSummary } from "@mui/material"
import { ArrowDown, CustomAccordion, CustomAccordionContent } from "./style"

const Menu = () =>{
    return (
        <>
        <CustomAccordion>
            <AccordionSummary expandIcon={<ArrowDown/>}><h1>Menu</h1> </AccordionSummary>
            <CustomAccordionContent>
                <a>Home</a>
                <a>Investidores</a>
                <a>Analytics</a>
                <a>Contato</a>
            </CustomAccordionContent>
        </CustomAccordion>
        </>
    )
}

export default Menu