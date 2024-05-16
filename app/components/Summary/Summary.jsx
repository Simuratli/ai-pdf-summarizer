import React from 'react'
import './Summary.css'
function Summary({current,summary}) {
  return (
    <div className='summary'>
        <div className="summary_current">
            <h1>Preview of PDF</h1>
            <p>
                {current}
            </p>
        </div>
        <div className="summary_sum">
            <h1>Summary of PDF</h1>
            <p>{!summary && current ? "Connecting with ai..." : summary}</p>
        </div>
    </div>
  )
}

export default Summary