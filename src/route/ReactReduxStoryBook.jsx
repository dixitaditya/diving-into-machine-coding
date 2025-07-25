import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice, increment, decrement } from '../redux/counterSlice'
import { fetchUser } from '../redux/userSlice'


const ReactReduxStoryBook = () => {
  const count = useSelector(state=>state.myCounter.count)
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch(); // generic dispatch
  
  console.log("user",user)
  return (<>
    <div>ReactReduxStoryBook {count}</div>
    <div><button onClick={()=>{dispatch(increment())}}>increment</button></div>
     <div><button onClick={()=>{dispatch(decrement())}}>decrement</button></div>
     <div><button onClick={()=>{dispatch(fetchUser())}}>fetch user</button></div>
    </>
  )
}

export default ReactReduxStoryBook