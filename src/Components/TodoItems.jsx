import React from "react";
import { GoCircle } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TodoItems = ({ text, id, isComplete, deleteTodo, checkTodo }) => {
  return (
    <div className="h-[64px] rounded-2xl flex justify-between items-center px-2 pl-4 pr-4  border-2 border-black font-bold shadow-lg">
        
        <p>{text}</p>
      <div
        onClick={() => {
          checkTodo(id);
        }}
        className="flex  items-center  gap-3"
      >
        {isComplete ? (
          <IoIosCheckmarkCircleOutline
            className="border text-black border-black p-1 bg-green-300 rounded-md cursor-pointer"
         size={36}
          />
        ) : (
          <GoCircle
          className="p-[5.5px] border border-black rounded-md  bg-green-300"
          size={36}
    
          />
        )}
    <RiDeleteBin6Line 
        onClick={() => {
          deleteTodo(id);
        }}
        className="cursor-pointer border border-black text-[36px] p-2 rounded-md bg-red-500"
      />
      </div>
  
    </div>
  );
};

export default TodoItems;
