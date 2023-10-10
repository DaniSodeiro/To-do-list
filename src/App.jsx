import { useState } from "react";

// Importa componentes de outros arquivos
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css"; // Importa um arquivo CSS para estilos

const App = () => {
  // Estado para armazenar a lista de tarefas (inicialmente contém algumas tarefas)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar planilha de controle",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar Resilia",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // Estados para filtragem, classificação e pesquisa de tarefas
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  // Função para adicionar uma nova tarefa à lista
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000), // Gera um ID único
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  // Função para remover uma tarefa da lista
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  // Função para marcar/desmarcar uma tarefa como concluída
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  // Função para editar o texto de uma tarefa
  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="create-todo-section">
        {/* Componente TodoForm para adicionar novas tarefas */}
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="todo-list">
        {/* Mapeia as tarefas para exibição */}
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo, index) => (
            // Componente Todo para exibir cada tarefa individualmente
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          ))}
      </div>
      <div className="search-filter-section">
        {/* Componente Search para pesquisa de tarefas */}
        <Search search={search} setSearch={setSearch} />
        {/* Componente Filter para filtrar e classificar tarefas */}
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      </div>
    </div>
  );
};

export default App;
