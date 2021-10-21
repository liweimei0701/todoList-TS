import React, { FC } from 'react';
import { Itask} from '../interfaces';
import './Display.css';

interface Iprops {
  todos: Itask[],
  completeTask: (taskName: string) => void
}

export const Display: FC<Iprops> = ({ todos, completeTask}) => {
  
  return (
    <>
     {
      todos.map((item: Itask, i:number) => {
        return (
          <div className='todo' key={i}>
            <span>{item.taskName}</span>
            <span>{item.deadline}</span>
            <button onClick={() => completeTask(item.taskName)}>X</button>
          </div>
        )
      })
    }
    </>
  )
}