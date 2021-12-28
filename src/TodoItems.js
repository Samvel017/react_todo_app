function TodoItems({ items, delTodo, onChange }) {
  return (
    <div className="todo-items">
      {items.map((item) => {
        return (
          <div key={item.id} className="todo-item">
            <label>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) => {
                  onChange({
                    ...item,
                    isCompleted: e.target.checked,
                  });
                }}
              />
              <span
                style={{
                  textDecoration: item.isCompleted ? 'line-through' : 'none',
                }}
              >
                {item.title}
              </span>
              <button
                onClick={() => {
                  delTodo(
                    items.filter((it) => {
                      return it.id !== item.id;
                    })
                  );
                }}
              >
                X
              </button>
            </label>
          </div>
        );
      })}
    </div>
  );
}
export default TodoItems;
