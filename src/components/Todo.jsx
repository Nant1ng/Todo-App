import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liCompleted: `flex justify-between bg-[#37233B] p-4 my-2 capitalize`,
  row: `flex`,
  inputColor: `accent-[#6b0a7f]`,
  text: `ml-2 cursor-pointer`,
  textCompleted: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const { text, completed, id } = todo;

  return (
    <li
      onClick={() => toggleComplete(todo)}
      className={completed ? style.liCompleted : style.li}
    >
      <div className={style.row}>
        <input
          className={style.inputColor}
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={completed ? style.textCompleted : style.text}
        >
          {text}
        </p>
      </div>
      <button onClick={() => deleteTodo(id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
