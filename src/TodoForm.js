import { useState } from 'react';

function TodoForm({ addTodo, items }) {
  const [text, setText] = useState('');
  let submitFunc = (e) => {
    e.preventDefault();
    if (text !== '') {
      addTodo([
        ...items,
        { title: text, isCompleted: false, id: Math.random() },
      ]);
    }
    setText('');
  };
  return (
    <form onSubmit={submitFunc} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(ev) => {
          setText(ev.target.value);
        }}
      />
      <button onClick={submitFunc}>Add</button>
    </form>
  );
}

export default TodoForm;
