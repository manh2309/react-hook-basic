import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todos from "./views/Todos";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("Manh");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Manh di code dao", type: "Manh1" },
    { id: 2, title: "Manhmom", type: "Manh1" },
    { id: 2, title: "Manhmom1", type: "Manh2" },
    { id: 2, title: "Manhmom2", type: "Manh2" },
  ]);
  const handleChangeName = (event) => {
    setAddress(event.target.value);
  };
  const handleClick = (event) => {
    //Hook not auto merge state
    // student = { ...student, setStudent };
    // console.log(">>>Check student", setStudent);
    if (!address) {
      alert("This not wrongs");
      return;
    }
    let newTodos = { id: Math.floor(Math.random() * 1000), title: address };
    // todos = [...todos, newTodos];
    setTodos([...todos, newTodos]);
    setAddress("");
    alert("well done");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World!</h1>
          <div>
            <Todos todos={todos} title="All todos" />
            <Todos
              todos={todos.filter((item) => item.type === "Manh1")}
              title="todos Manh1"
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleChangeName(event)}
            />
            <br />
            <button onClick={(event) => handleClick(event)}>Click me</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
