const Todos = (props) => {
  //properties == props
  // parent => child , top => buttom
  const todos = props.todos;
  return (
    <div className="todos-container">
      <div className="title">{props.title}</div>
      {todos.map((todo) => {
        return (
          <li className="todos-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
      <hr />
    </div>
  );
};
export default Todos;
