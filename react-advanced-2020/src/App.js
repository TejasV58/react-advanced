import React from 'react'
import Setup from './tutorial/12-memo-useMemo-useCallback/setup'

function App() {
  console.log("Outer componenet");
  return (
    <div className='container'>
      <Setup/>
    </div>
  )
}

export default App
