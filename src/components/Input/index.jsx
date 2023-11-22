import { forwardRef } from "react";
import { StyledInputDiv } from "./style"

export const Input = forwardRef(({error, ...rest}, ref) => {
    return (
        <>
            <StyledInputDiv>
                <input ref={ref} {...rest}/>
                {error ? <p>{error.message}</p> : null}
            </StyledInputDiv>
        </>
    )
})