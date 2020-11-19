// import React, { Component } from 'react'

// class Input extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <label>Input Task: </label>
//         <input type="text" name="task" />
//         <button>Add</button>
//       </div>
//     )
//   }
// }

// export default Input


import React, {useState} from 'react'
const Input = (props) => {
  return (
    <div className="tasks">
      <label>Input Task: </label>
      <input type="text" name="task" value={props.value} onChange={(e) => props.handleChange(e)}/>
      <button onClick={() => props.addTask(props.value)}>Add</button>
    </div>
  )
}

export default Input