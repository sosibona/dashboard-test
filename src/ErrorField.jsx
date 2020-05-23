import React from 'react';


const ErrorField = (props) => {
  return (
    <div className="error">
      {props.children}
    </div>
  )
}

export default ErrorField;