import React from "react";

// Declaração do componente Search, que recebe duas propriedades como argumentos.
const Search = ({ search, setSearch }) => (
  <div className="search">
    {/* Título "Pesquisar:" */}
    <h2>Pesquisar:</h2>
    {/* Input de texto com valor controlado por 'search' */}
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..." // Placeholder para exibir dica no input
    />
  </div>
);

// Exporta o componente Search para ser usado em outros lugares.
export default Search;
