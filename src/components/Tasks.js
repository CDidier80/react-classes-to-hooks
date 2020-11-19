// import React, { Component, useState} from 'react'

// class Tasks extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     )
//   }
// }

// export default Tasks


import React from 'react'

export default function Tasks(props) {
  // const [task, setTask] = useState("")
  return (
    <ul>
    {props.tasks.map((task, index) => (
      <div>
        <li key={index}>{task}</li>
        <button key={`button${index}`} onClick={()=> props.delListItem(index)}  >X</button>
      </div>
    ))}
  </ul>
  )
}
