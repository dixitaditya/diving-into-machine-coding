import styled from "styled-components"

type IGrid = {
    row: number,
    col: number
}

export const StyledGameWrap = styled.div<IGrid>`
    display: grid;
    grid-template-rows: repeat(${props=>props.row}, 1fr);
    grid-template-columns: repeat(${props=>props.col}, 1fr);
`

export const StyledCell = styled.div`
    width: 50px;
    height: 50px;
    background: #ccc;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content : center;
    cursor: pointer;
`
