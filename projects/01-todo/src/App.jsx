import { useEffect, useState } from "react"
import { TodoBanner } from "./TodoBanner";
import { TodoRow } from "./TodoRow";
import { TodoCreator } from "./TodoCreator";
import { VisibilityControl } from "./VisibilityControl";

function App() {

  const [userName, setUserName] = useState("Adam");
  const [todoItems, setTodoItems] = useState([{ action: "Buy Flowers", done: false },
                                              { action: "Get Shoes", done: false },
                                              { action: "Collect Tickets", done: true },
                                              { action: "Call Joe", done: false }]);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTodo = (task) => {
    if(!todoItems.find(item => item.action === task)) {
      setTodoItems((prev) => {
        let next = [...todoItems, {action: task, done: false}];
        window.localStorage.setItem("todos", JSON.stringify(next));
        return next;
      });
    }
  };

  const toggleTodo = (todo) => {
    setTodoItems(todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item));
  };

  const todoTableRows = (doneValue) => {
    return todoItems.filter(item => item.done === doneValue).map(item => 
      <TodoRow key={item.action} item={item} callback={toggleTodo} />
    );
  };

  useEffect(() => {
    let data = window.localStorage.getItem("todos");
    if(data != null) {
      setTodoItems(JSON.parse(data));
    }
    else {
      setTodoItems([{ action: "Buy Flowers", done: false },
                    { action: "Get Shoes", done: false },
                    { action: "Collect Tickets", done: true },
                    { action: "Call Joe", done: false }]);
    }
  }, []);

  return (
    <div>
      <TodoBanner name={userName} task={todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={createNewTodo} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {todoTableRows(false)}
          </tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl description={"Completed Task"}
                             isChecked={showCompleted}
                             callback={(checked) => setShowCompleted(checked)} />
        </div>
        {
          showCompleted && <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {todoTableRows(true)}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default App
