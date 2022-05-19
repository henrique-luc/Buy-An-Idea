
import { CircularProgress } from "@mui/material"
import { CustomDiv } from "./style"
import { CircularLoading } from "./style"

const Loading = () =>{
    return(
        <>
        <CustomDiv>
            <CircularProgress size={100} color={"success"}/>
        </CustomDiv>
        </>
    )
}

export default Loading