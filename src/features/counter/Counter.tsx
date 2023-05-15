//@ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markCompleted,
  selectTodos,
  addWithMessage,
  removeWithMessage
} from "./counterSlice";
import { Toaster } from "react-hot-toast";
import "./Counter.module.css";

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  console.log(todos);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#02A724",
            color: "white"
          }
        }}
      />
      <div className="mt-4 max-w-[90%] w-[500px] m-auto">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!value) return;
            dispatch(addWithMessage(value));
          }}
        >
          <label>
            <h1 className="font-extrabold text-2xl">Enter todo:</h1>
            <div className="flex gap-5 justify-center mt-4">
              <input
                id="todo-input"
                value={value}
                placeholder="Description"
                onChange={(e) => setValue(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-96 p-2.5 min-w-0 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add
              </button>
            </div>
          </label>
        </form>
        <div className="flex justify-center mt-10">
          <ul className="w-full">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex pb-1 mb-1 border-b gray-500 items-center font-extrabold text-2xl ${
                  todo.isCompleted ? "text-gray-300" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => {
                    dispatch(markCompleted(todo.id));
                  }}
                  className="custom-checkbox"
                />
                <p className="relative w-full ml-5 mr-3 text-left">
                  {todo.isCompleted && (
                    <div className="border-b-2 border-gray-300 absolute top-1/2 w-full"></div>
                  )}
                  {todo.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeWithMessage(todo.id));
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// import React, { useState } from "react";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount
// } from "./counterSlice";
// import styles from "./Counter.module.css";
// export function Counter() {
//   const count = useAppSelector(selectCount);
//   const dispatch = useAppDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//       </div>
//       <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={(e) => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementByAmount(incrementValue))}
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(incrementValue))}
//         >
//           Add Async
//         </button>
//         <button
//           className={styles.button}
//           onClick={() => dispatch(incrementIfOdd(incrementValue))}
//         >
//           Add If Odd
//         </button>
//       </div>
//     </div>
//   );
// }
