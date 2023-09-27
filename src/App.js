import React from 'react';
var todoList = [{id: 1, title:'Complete asignment'},{id:2, title:'take an exam'},{id:3, title:'learn R langage'}];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo,i)=>{
          return <div className='todo' style={{backgroundColor:'yellow',height:'40px',marginBottom:'10px'}}>
            <h3>{todo.title}</h3>
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;
