import styled from "@emotion/styled"

const _button = (props)=>({
    backgroundColor: props.color
})

export const StyledButton = styled.button(_button)