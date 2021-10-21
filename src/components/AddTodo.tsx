import React, { ChangeEvent, FC, useState } from 'react';
import './AddTodo.css';
import { Itask } from '../interfaces';
interface Iprops {
  addTodo: (todoItem: Itask) => void
}

export const AddTodo: FC<Iprops> = ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState<Itask>({
    taskName: '',
    deadline: 0
  })
 

  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setTodoItem({...todoItem,[name]: value})
  }
  const handleAddItem = (): void => {
    addTodo(todoItem);
    setTodoItem({taskName: '',deadline: 0})
  }
 
  return (
    <div className='add'>
      <div className='content'>
        <input type="text" placeholder="Add your todos..." name='taskName' value={todoItem.taskName} onChange={handleChange} />
        <input type="number" placeholder="Deadline in days..." name='deadline' value={todoItem.deadline} onChange={handleChange}  />
      </div>
      <button onClick={handleAddItem}>Add</button>
    </div>
  )
}