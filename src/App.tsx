import React, { FC, useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Display } from './components/Display';
import { Itask } from './interfaces';

const App: FC = () => {
  const [todos, setTodos] = useState<Itask[]>([]);
  const handleAdd = (todoItem:Itask):void => {
    setTodos([...todos,todoItem]);
  }
  const completeTask = ( taskName: string ):void => {
    setTodos(todos.filter(task => task.taskName !== taskName))
  }
  return (
    <div className="App">
      <AddTodo addTodo={handleAdd}/>
      <Display todos={todos} completeTask={completeTask}/>
    </div>
  );
}

export default App;
