import React from 'react'

function CallBackIssueComponent(props) {
    console.log('CallBackIssueComponent..............')
  return (
    <div>
      <button onClick={()=>props.resetValue()}>Reset</button>
    </div>
  )
}

export default React.memo(CallBackIssueComponent)
