import { useState } from "react";
import "./App.css";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

export default function App() {
  const [items, setItem] = useState([
    { title: "Eat", isCompleted: false, id: 0 },
    { title: "Code", isCompleted: false, id: 1 },
    { title: "Sleep", isCompleted: false, id: 2 }
  ]);
  return (
    <div className="App">
      <TodoForm addTodo={setItem} items={items} />
      <TodoItems
        delTodo={setItem}
        items={items}
        onChange={(newItem) => {
          setItem(
            items.map((item) => {
              if (item.id === newItem.id) {
                return newItem;
              }
              return item;
            })
          );
        }}
      />
      <TodoFooter
        items={items}
        delAllCompleted={() => {
          setItem(items.filter((item) => !item.isCompleted));
        }}
      />
    </div>
  );
}
