import React from 'react'

const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        削除
      </button>
    </div>
  )
}

export default Task
