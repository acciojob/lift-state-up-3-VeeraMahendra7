import React from 'react'

const ChildComponent1 = ({SelectOption}) => {
    const handleClick = () => {
        SelectOption('Option 1');
    }
  return (
    <div className='child-1'>
      <h2 className='heading'>Child Component 1</h2>
      <button onClick={handleClick} className='btn'>Option1</button>
    </div>
  )
}

export default ChildComponent1
