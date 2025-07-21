import styled from "@emotion/styled"

type IGrid = {
    row: number,
    col: number
}

const _styledGAmeWrap = (props: IGrid)=>({
    display: "grid",
    gridTemplateRows: `repeat(${props.row}, 1fr)`,
    gridTemplateColumns: `repeat(${props.col}, 1fr)`,
})

 const _styledCell = {
    width: 50,
    height: 50,
    background: "pink",
    border: "1px solid #333",
    display: "flex",
    alignItems: "center",
    justifyContent : "center",
    cursor: "pointer",
 }

export const StyledGameWrap = styled.div(_styledGAmeWrap);
export const StyledCell = styled.div(_styledCell);
