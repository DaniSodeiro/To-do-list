# To-Do List App

Este é um aplicativo de lista de tarefas (to-do list) construído com Vite e React. Permite que você crie, visualize, edite, marque como concluída e exclua tarefas e também fornece recursos de pesquisa para facilitar a localização de tarefas específicas.

## Funcionalidades

- Adicione novas tarefas com um título e uma categoria.
- Edite tarefas existentes diretamente na lista.
- Marque tarefas como concluídas para acompanhamento.
- Filtragem de tarefas por status (concluídas ou pendentes) e categoria.
- Pesquisa rápida para encontrar tarefas específicas.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [NodeJS](https://nodejs.org/pt-br/download)
- [npm](https://vitejs.dev/guide/)
- [React](https://www.npmjs.com/package/react/v/18.2.0)

## Instalação

**_Clone o projeto_**

###### com HTTPS

```bash
git clone https://github.com/https://github.com/DaniSodeiro/To-do-list
```

###### com SSH

```bash
git clone git@github.com:DaniSodeiro/To-do-list.git
```

###### \*\*\_Entre no diretório do projeto

```bash
cd to-do-list
```

###### **_Instale as dependências_**

```bash
npm install
```

```bash
npm create vite@latest
```

###### **_Inicie o servidor_**

```bash
npm run start

//ou

npm start

```

###### **_O aplicativo estará disponível em:_**

```bash
`http://localhost:5173`
```

#### 🎉🎉🎉 É isso, aproveite o projeto.

## Estrutura do Projeto

- `Filter.jsx`: Componente para criar uma interface de filtro.
- `Search.jsx`: Componente para criar uma interface de pesquisa.
- `Todo.jsx`: Componente para representar uma tarefa na lista.
- `TodoForm.jsx`: Componente para criar novas tarefas.
- `App.css`: Arquivo de estilo global.
- `App.jsx`: Componente principal que utiliza os componentes acima e gerencia o estado da lista de tarefas.
- `Main.jsx`: Arquivo de ponto de entrada que renderiza o aplicativo no DOM.

## Como Utilizar

Neste aplicativo de lista de tarefas, você pode adicionar novas tarefas informando um título e uma categoria para cada uma delas.

### Entrada

#### Na parte "Criar tarefa"

1. Digite um título para a tarefa.

   - Exemplo: "Ir ao mercado"

2. Escolha uma categoria para a tarefa.

   - Exemplo: "Casa"

3. Pressione a tecla [Enter] para adicionar a tarefa à lista.

#### Exemplo:

- **Tarefa 1:**
  - Título: Ir ao mercado
  - Categoria: Casa

### Saída

As tarefas adicionadas serão exibidas na lista com as seguintes opções:

- [Editar]: Permite editar o título da tarefa.
- [Concluir]: Marca a tarefa como concluída.
- [Excluir]: Remove a tarefa da lista.

Você também pode filtrar as tarefas por status (Todas, Concluídas, Pendentes) e pesquisar tarefas por texto.

![image](https://github.com/DaniSodeiro/To-do-list/assets/138523306/35014ad3-4a10-4c4a-9ba5-ca0a4cbdd682)

Agora você está pronto para começar a gerenciar suas tarefas!

## Referência

- [NodeJS](https://nodejs.org/pt-br/download)
- [npm](https://vitejs.dev/guide/)
- [React](https://www.npmjs.com/package/react/v/18.2.0)
- [React-dom](https://www.npmjs.com/package/react-dom/v/18.2.0)
- [Styled-components](https://styled-components.com/docs/basics#installation)

Feito por Daniela Sodeiro ♥️
