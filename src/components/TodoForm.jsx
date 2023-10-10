import { useState } from "react";

// Declaração do componente TodoForm, que recebe uma propriedade 'addTodo' como argumento.
const TodoForm = ({ addTodo }) => {
  // Definição de estados locais para controlar o valor do título e categoria.
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // Função para lidar com o envio do formulário.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o valor do título está vazio, e se estiver, retorna sem adicionar a tarefa.
    if (!value) return;
    // Chama a função 'addTodo' passando o título e a categoria como argumentos.
    addTodo(value, category);
    // Limpa os campos de entrada após a adição da tarefa.
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      {/* Título "Criar tarefa:" */}
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        {/* Input de texto para inserir o título da tarefa */}
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        {/* Dropdown (select) para selecionar a categoria da tarefa */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* Opção padrão para seleção de categoria */}
          <option value="">Seleciona uma categoria</option>
          {/* Opções de categorias disponíveis */}
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        {/* Botão para criar a tarefa */}
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

// Exporta o componente TodoForm para ser usado em outros lugares.
export default TodoForm;
