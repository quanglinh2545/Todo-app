function TodoItem({ item, handleCheck }) {
  return (
    <label className="panel-block">
function TodoItem({ item, handleCheck }) {
    </label>
  );
}
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span className={item.done ? 'has-text-grey-light' : ''}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;