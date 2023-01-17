import { useState } from "react";
import "../css/todo.css";

export default function Memo() {
  const [todo, setTodo] = useState([
    "電話をする",
    "お片づけをする",
    "お料理をする",
    "お洗濯をする"
  ]);
  const [inputText, setInputElement] = useState("");
  const addTodo = () => {
    const newTodo = [...todo, inputText];
    setTodo(newTodo);
    setInputElement("");
  };
  const listItems = todo.map((todo: string) => (
    <p key={todo}>
      <button onClick={() => deleteTodo(todo)}>-</button>
      {todo}
    </p>
  ));
  const deleteTodo = (deletetodo: string) => {
    const newTodo = todo.filter((e: string) => e !== deletetodo);
    setTodo(newTodo);
  };
  return (
    <div className="memo">
      <h2>Memo</h2>
      <div className="contentflex">
        <div>
          <textarea
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            className="textbox"
          ></textarea>
          <div>
            <button onClick={addTodo} className="addTotoButton">
              追加
            </button>
          </div>
        </div>
        <div className="todoList">{listItems}</div>
      </div>
    </div>
  );
}
