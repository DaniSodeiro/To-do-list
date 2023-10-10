import React from "react";

// Declaração do componente Filter, que recebe três propriedades como argumentos.
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    // Renderiza uma div com a classe CSS "filter".
    <div className="filter">
      {/* Título "Filtrar:" */}
      <h2>Filtrar:</h2>
      {/* Div para as opções de filtro */}
      <div className="filter-options">
        <div>
          {/* Parágrafo com o texto "Status:" */}
          <p>Status:</p>
          {/* Dropdown (select) para escolher o filtro com valor controlado por 'filter' */}
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {/* Opções do dropdown */}
            <option value="All">Todas</option>
            <option value="Completed">Concluídas</option>
            <option value="Incomplete">Pendentes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente Filter para ser usado em outros lugares.
export default Filter;
