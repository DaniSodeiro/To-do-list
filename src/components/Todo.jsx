import { useState } from "react";

// Declaração do componente Todo, que recebe quatro propriedades como argumentos.
const Todo = ({ todo, completeTodo, editTodo, removeTodo }) => {
  // Definição locais para controle da edição do todo.
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  // Função para iniciar a edição do todo.
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Função para salvar as alterações no todo.
  const handleSave = () => {
    editTodo(todo.id, updatedText);
    setIsEditing(false);
  };

  // Função para atualizar o texto do todo enquanto estiver editando.
  const handleTextChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {isEditing ? (
          // Renderiza um input de texto durante a edição.
          <input type="text" value={updatedText} onChange={handleTextChange} />
        ) : (
          // Renderiza o texto do todo.
          <p>{todo.text}</p>
        )}
        {/* Exibe a categoria do todo entre parênteses. */}
        <p className="category">({todo.category})</p>
      </div>
      <div>
        {isEditing ? (
          // Renderiza botões de "Salvar" e "Cancelar" durante a edição.
          <>
            <button className="save" onClick={handleSave}>
              Salvar
            </button>
            <button className="cancel" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
          </>
        ) : (
          // Renderiza botões de "Concluir", "Editar" e "Excluir" quando não estiver editando.
          <>
            <button className="complete" onClick={() => completeTodo(todo.id)}>
              Concluído
            </button>
            <button className="edit" onClick={handleEdit}>
              Editar
            </button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>
              Excluir
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Exporta o componente Todo para ser usado em outros lugares.
export default Todo;
