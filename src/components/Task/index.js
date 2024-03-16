import './index.css'

const Task = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <li className="list">
      <p className="taskname"> {taskName} </p>
      <p className="taskcategory"> {taskCategory} </p>
    </li>
  )
}

export default Task
