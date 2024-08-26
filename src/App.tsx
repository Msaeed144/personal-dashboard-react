import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CryptoPage from './pages/CryptoPage';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import { useState } from 'react';
import { Todo } from './tools/interfaces';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const toggleChecked = (id: string) => {
    const updatedTodos = allTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setAllTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = allTodos.filter(todo => todo.id !== id);
    setAllTodos(filteredTodos);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/crypto' element={<CryptoPage />} />
        <Route path='/todo-page' element={<TodoPage todo={todo} setTodo={setTodo} allTodos={allTodos} setAllTodos={setAllTodos} toggleChecked={toggleChecked} deleteTodo={deleteTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
