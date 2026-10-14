import {useState} from "react";

export function ToDos() {
    const [todos, setTodos] = useState([
      {id: 1, text: "Buy milk"},
        {id: 2, text: "Go to the gym"},
        {id: 3, text: "Make something"},
        {id: 4, text: "Do something else"},
    ])

    return (
        <div>
          <ol>
            {todos.map(todo =>
                <li key={todo.id}>{todo.text}</li>)
            }
          </ol>
        </div>
    )
}