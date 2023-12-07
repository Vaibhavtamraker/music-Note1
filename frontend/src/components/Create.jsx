import React, { useState } from 'react';


function Create() {
  const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');

  const focusItem = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => ({
        ...todo,
        focused: i === index,
        open: false,
      }))
    );
  };

  const openItem = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => ({
        ...todo,
        focused: false,
        open: i === index,
      }))
    );
    setTimeout(() => {
      document.getElementById(`titleField${index}`).focus();
    }, 10);
  };

  const defocusItems = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        focused: false,
        open: false,
      }))
    );
  };

  const removeItem = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    setTimeout(() => defocusItems(), 10);
  };

  const addItem = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: '',
        notes: '',
        checked: false,
        focused: false,
        open: true,
      },
    ]);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300" style={{ maxWidth: '800px' }}>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            <i className="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom"></i> Todos
          </h1>
        </div>
        
        <div className="mb-10">
          {todos.length ? (
            <ul onClick={defocusItems} className="-mx-1">
              {todos.map((item, index) => (
                <li
                  key={index}
                  onClick={() => focusItem(index)}
                  onDoubleClick={() => openItem(index)}
                  className={`px-2 py-2 rounded transition-all flex text-md ${
                    item.focused ? 'bg-indigo-800' : ''
                  } ${item.open ? 'bg-gray-700 shadow-lg px-4 py-4 my-10 -mx-2' : 'mb-1 cursor-pointer'}`}
                >
                  <div className="flex-none w-10 leading-none">
                    <input type="checkbox" checked={item.checked} onChange={() => {}} />
                  </div>
                  <div className="flex-grow max-w-full">
                    <div className="w-full leading-none">
                      <h3
                        className={`text-md leading-none truncate w-full pr-10 ${
                          item.title.length ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {item.title || 'New todo...'}
                      </h3>
                      <input
                        type="text"
                        className="text-md w-full bg-transparent text-gray-300 leading-none focus:outline-none mb-2"
                        style={{ display: item.open ? 'block' : 'none' }}
                        value={item.title}
                        onChange={(e) => setTodos((prevTodos) => [...prevTodos.slice(0, index), { ...item, title: e.target.value }, ...prevTodos.slice(index + 1)])}
                        id={`titleField${index}`}
                        placeholder="New todo..."
                      />
                    </div>
                    <div className="w-full" style={{ display: item.open ? 'block' : 'none' }}>
                      <textarea
                        className="text-md w-full bg-transparent text-gray-300 leading-tight focus:outline-none"
                        rows="10"
                        value={item.notes}
                        onChange={(e) => setTodos((prevTodos) => [...prevTodos.slice(0, index), { ...item, notes: e.target.value }, ...prevTodos.slice(index + 1)])}
                        placeholder="Notes"
                      ></textarea>
                    </div>
                    <div className="w-full flex justify-end" style={{ display: item.open ? 'block' : 'none' }}>
                      <button className="p-1 -mr-1 focus:outline-none hover:text-red-300" onClick={() => removeItem(index)}>
                        <i className="mdi mdi-trash-can-outline"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos</p>
          )}
        </div>
        <div className="flex justify-center">
          <button className="py-1 px-10 border border-gray-800 hover:border-gray-700 rounded leading-none focus:outline-none text-xl" onClick={addItem}>
            <i className="mdi mdi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
