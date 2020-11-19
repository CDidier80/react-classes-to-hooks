// import React, { Component } from 'react'
// import Tasks from './Tasks'
// import Input from './Input'

// class Todolist extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: []
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <Input />
//         <Tasks tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// export default Todolist


import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([
    'Wow Much Do',
    'Much Do Wow',
    'Walk the doge',
    'Pet the doge'
  ])

  const [value, setValue] = useState("")

  const addTask = (newTask) => {
    let myNewList = [...tasks, newTask]
    manageTasks(myNewList)
    console.log(tasks)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const delListItem = (listItemIndex) => {
    let taskArray = [...tasks]
    taskArray.splice(listItemIndex, 1)
    manageTasks(taskArray)
  }
  
  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask} value={value}/>
      <Tasks tasks={tasks} delListItem={delListItem}/>
    </div>
  )
}

export default TodoList