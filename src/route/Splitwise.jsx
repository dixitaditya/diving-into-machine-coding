import React, { useState } from 'react'


const AddExpense = () => {

    return (
        <>hello</>
    )
}

const Splitwise = () => {
    const [transaction, setTransaction] = useState([])
    const [balance, setBalance] = useState([])
  return (<>
        <div className='page-center'>Splitwise

        <div className="card">
            <AddExpense/>
        </div>
        </div>
       
    </>
  )
}

export default Splitwise