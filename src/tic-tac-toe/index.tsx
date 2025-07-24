import React, { useState } from 'react'
import {StyledGameWrap, StyledCell} from './style'

const PLAYER = {
    x: "X",
    o:"O"
}

const TicTacToe = (props: TTicTacToe) => {
    const {row, col} = props
    const [cells, setCells] = useState<string[]>(Array(row*col).fill(""))
    const [player, setPlayer] = useState(PLAYER.x)


    const handleClick = (index: number) =>{
        console.log("clicked", index)
    if(!cells[index]){
        setCells(state=>{
        const newCell = [...state]
        newCell[index] = player
        return newCell
       })
       setPlayer(player => player === PLAYER.x ? PLAYER.o : PLAYER.x)
       console.log("clicked and set", index, cells)
    }
       
    }

    return (
        <div className='full-page-center'>
            
            <StyledGameWrap row={row} col={col}>
                {cells.map((cell, index)=>{
                    return <StyledCell onClick={()=>handleClick(index)}>{cell}{index+1}</StyledCell>
                })}
            </StyledGameWrap>
        </div>
    )
}





const demo = () => {
    return (
        <TicTacToe 
        row={3} 
        col={3}/>
    )
}

export default demo