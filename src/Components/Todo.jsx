import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import { useRef } from "react";
import Line from "./Line";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  //   Adds the current value of input text and stores in todolist with the newTodo object
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  // Delete the todo list of the selected id only using filter
  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  // Checks the todo list is complete or not and changes the completed into in complete and vice-versa on a click
  const checkTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-green-300 flex flex-col w-[600px] h-[650px] rounded-lg p-4 py-8 border-2 border-black shadow-2xl">
      {/* Title */}
      <div className="flex gap-2  items-center ml-6">
        <h1 className=" text-5xl font-bold">To-do List</h1>
      </div>

      {/* Input Box */}
      <div className="w-11/12 mx-auto bg-orange-400 flex rounded-2xl border-2 border-black  mt-8 h-[64px]  ">
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          placeholder="Add your List"
          className="w-11/12  outline-none items-center bg-transparent pr-2 border-0 placeholder:text-slate-100 pl-8 "
        />
        <button
          onClick={add}
          className=" z-1 w-2/12 text-[36px] text-slate-50  rounded-xl border-l-0 border-black bg-black"
        >
          +
        </button>
      </div>

      <Line />

      {/* To-do Items */}
      <div className="mt-5  w-11/12 mx-auto  space-y-4 ">
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
