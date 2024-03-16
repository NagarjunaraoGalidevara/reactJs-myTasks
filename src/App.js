// import React, {Component} from 'react'

// import {v4 as uuid} from 'uuid'

// import Task from './components/Task'

// import './App.css'

// const InitialTagsList = [
//   {optionId: 'HEALTH', displayText: 'Health'},
//   {optionId: 'EDUCATION', displayText: 'Education'},
//   {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
//   {optionId: 'SPORTS', displayText: 'Sports'},
//   {optionId: 'TRAVEL', displayText: 'Travel'},
//   {optionId: 'OTHERS', displayText: 'Others'},
// ]

// class App extends Component {
//   state = {
//     inputTask: '',
//     myTaskList: [],
//     selectTag: InitialTagsList[0].optionId,
//     activeTag: 'INITIAL',
//   }

//   onClickAddButton = () => {
//     const {inputTask, selectTag} = this.state
//     const taskName = inputTask
//     const taskCategory = selectTag
//     const id = uuid()
//     const bgcolor = false

//     if (taskName.length !== 0) {
//       this.setState(prevState => ({
//         myTaskList: [
//           ...prevState.myTaskList,
//           {id, taskName, taskCategory, bgcolor},
//         ],
//         inputTask: '',
//         selectTag: InitialTagsList[0].optionId,
//       }))
//     }
//   }

//   onChangeInputTask = event => {
//     this.setState({inputTask: event.target.value})
//   }

//   onChangeSelectTag = event => {
//     this.setState({selectTag: event.target.value})
//   }

//   onClickTag = event => {
//     this.setState(prevState => ({
//       activeTag:
//         prevState.activeTag === event.target.value
//           ? 'INITIAL'
//           : event.target.value,
//     }))
//   }

//   render() {
//     const {myTaskList, inputTask, selectTag, activeTag} = this.state
//     const filterTaskList =
//       activeTag === 'INITIAL'
//         ? myTaskList
//         : myTaskList.filter(each => each.taskCategory === activeTag)

//     return (
//       <div className="main-container">
//         <form className="task-input-container">
//           <h1 className="head"> Create a Task! </h1>
//           <div className="input-container">
//             <label htmlFor="textInput" className="label">
//               {' '}
//               Task{' '}
//             </label>
//             <input
//               id="textInput"
//               className="input"
//               type="text"
//               placeholder="Enter the task here"
//               value={inputTask}
//               onChange={this.onChangeInputTask}
//             />
//             <label htmlFor="optionInput" className="label">
//               {' '}
//               Tags{' '}
//             </label>
//             <select
//               id="optionInput"
//               className="select"
//               value={selectTag}
//               onChange={this.onChangeSelectTag}
//             >
//               {InitialTagsList.map(each => (
//                 <option value={each.optionId} key={each.optionId}>
//                   {' '}
//                   {each.displayText}{' '}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             className="button"
//             onClick={this.onClickAddButton}
//           >
//             {' '}
//             Add Task{' '}
//           </button>
//         </form>
//         <div className="task-display-container">
//           <h1 className="head1"> Tags </h1>
//           <ul className="tags-container">
//             {InitialTagsList.map(each => {
//               const isActive = activeTag === each.optionId
//               return (
//                 <li key={each.optionId} className="listItem">
//                   <button
//                     type="button"
//                     className="tagButton"
//                     value={each.optionId}
//                     onClick={this.onClickTag}
//                     isActive={isActive}
//                   >
//                     {each.displayText}
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//           <h1 className="head1"> Tasks </h1>
//           <ul className="task-container">
//             {filterTaskList.length === 0 ? (
//               <p className="para"> No Tasks Added Yet </p>
//             ) : (
//               filterTaskList.map(each => (
//                 <Task key={each.optionId} taskDetails={each} />
//               ))
//             )}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default App

import React, {Component} from 'react'

import {v4 as uuid} from 'uuid'

import Task from './components/Task'

import './App.css'

const tagsList = [
  {optionId: 'HEALTH', displayText: 'Health'},
  {optionId: 'EDUCATION', displayText: 'Education'},
  {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
  {optionId: 'SPORTS', displayText: 'Sports'},
  {optionId: 'TRAVEL', displayText: 'Travel'},
  {optionId: 'OTHERS', displayText: 'Others'},
]

class App extends Component {
  state = {
    inputTask: '',
    myTaskList: [],
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgcolor = false

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [
          ...prevState.myTaskList,
          {id, taskName, taskCategory, bgcolor},
        ],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)

    return (
      <div className="main-container">
        <form className="task-input-container">
          <h1 className="head"> Create a Task! </h1>
          <div className="input-container">
            <label htmlFor="textInput" className="label">
              {' '}
              Task{' '}
            </label>
            <input
              id="textInput"
              className="input"
              type="text"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onChangeInputTask}
            />
            <label htmlFor="optionInput" className="label">
              {' '}
              Tags{' '}
            </label>
            <select
              id="optionInput"
              className="select"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {' '}
                  {each.displayText}{' '}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onClickAddButton}
          >
            {' '}
            Add Task{' '}
          </button>
        </form>
        <div className="task-display-container">
          <h1 className="head1"> Tags </h1>
          <ul className="tags-container">
            {tagsList.map(each => {
              const isActive = activeTag === each.optionId
              return (
                <li key={each.optionId} className="listItem">
                  <button
                    type="button"
                    className="tagButton"
                    value={each.optionId}
                    onClick={this.onClickTag}
                    isActive={isActive}
                  >
                    {each.displayText}
                  </button>
                </li>
              )
            })}
          </ul>
          <h1 className="head1"> Tasks </h1>
          <ul className="task-container">
            {filterTaskList.length === 0 ? (
              <p className="para"> No Tasks Added Yet </p>
            ) : (
              filterTaskList.map(each => (
                <Task key={each.optionId} taskDetails={each} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
