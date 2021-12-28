
function TodoFooter({items, delAllCompleted}) {
  let completedItems = items.filter((e)=>e.isCompleted).length
  return (
    <div className="todo-footer">
      <span>{completedItems}/{items.length} Completed</span>
      <button onClick={delAllCompleted}>Clear All Completed</button>
    </div>
  )
}

export default TodoFooter