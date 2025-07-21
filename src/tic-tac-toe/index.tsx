import React, { useState } from 'react'
import {StyledGameWrap, StyledCell} from './style'

const TicTacToe = (props: TTicTacToe) => {
    const {row, col} = props
    const [cells, setCells] = useState(Array(row*col).fill(""))
    return (
        <div className='full-page-center'>
            
            <StyledGameWrap row={row} col={col}>
                {cells.map((cell, index)=>{
                    return <StyledCell>{index+1}</StyledCell>
                })}
            </StyledGameWrap>
        </div>
    )
}





const demo = () => {
    return (
        <TicTacToe row={3} col={3}/>
    )
}

export default demo