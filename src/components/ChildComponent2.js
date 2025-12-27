import React from 'react'

const ChildComponent2 = ({SelectOption}) => {
    const handleClick = () => {
        SelectOption('Option 2')
    }
  return (
    <div className='child-2'>
      <h2 className='heading'>Child Component 2</h2>
      <button onClick={handleClick} className='btn'>Option2</button>
    </div>
  )
}

export default ChildComponent2
