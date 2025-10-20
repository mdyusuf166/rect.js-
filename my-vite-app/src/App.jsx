

// function App() {
//   return (
//     <div>
//       <center>
//         <h1>Todo App</h1>
//       </center>

//       <div className="row">
//         <div className="col-md-8">.col-md-8</div>
//         <div className="col-6 col-md-4">.col-6 .col-md-4</div>
//       </div>
//     </div>
//   )
// }

// export default App

// function App() {
//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Todo App</h1>

//       <div className="row">
//         <div className="col-md-8 border p-3">.col-md-8</div>
//         <div className="col-6 col-md-4 border p-3">.col-6 .col-md-4</div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim() === '') return;
    setTasks([...tasks, text]);
    setText('');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Todo App</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
