# Mini Projeto (M4): Aplicação Web Back End para Gerenciamento de ANM
```(A - Animes, N - Novels, M - Mangas );```

## Base de Construção:
Este mini projeto visa desenvolver uma aplicação web Back End utilizando ferramentas do Node.js, seguindo o padrão MVC (Model-View-Controller) para organizar as responsabilidades na aplicação. A aplicação permite criar, listar, filtrar, atualizar e deletar dados de ANM (animes, novels, mangas) por meio de algumas rotas.
## Descrição do Projeto:
Pensando em criar uma lista de ANM (animes, novels, mangas), esta aplicação foi desenvolvida para criar novos dados usando a rota POST "/addCategoryAnm". Através desta rota, novos dados podem ser adicionados e manipulados de diferentes formas, como descrito logo a seguir...

#### 1. Adicionar Categoria ANM
- **Rota**: `/anm/addCategoryAnm`
- **Método**: POST
- **Descrição**: Permite adicionar novos dados de ANM à aplicação.

#### 2. Listar Todos os Dados
- **Rota**: `/anm/listComplet`
- **Método**: GET
- **Descrição**: Lista todos os dados criados, que foram adicionados pela rota `/addCategoryAnm`.

#### 3. Atualiza um Dado
- **Rota**: `/anm/anmUpdate/:id`
- **Método**: PATCH
- **Descrição**: Atualiza um dado que possuem o ID correspondente passado na URL.

#### 4. Filtragem de Dados
- **Rota**: `/anm/animes`, `/anm/novels`, `/anm/mangas`
- **Método**: GET
- **Descrição**: Filtra e retorna dados específicos de acordo com o tipo (`animes`, `novels` ou `mangas`).

#### 5. Deletar Categoria ANM
- **Rota**: `/anm/anmDelet/:id`
- **Método**: DELETE
- **Descrição**: Deleta dados que possuem o ID correspondente passado na URL.


## Estrutura de Diretórios
- `controllers/`: Contém os controladores da aplicação.
- `models/`: Contém os modelos de dados.
- `routes/`: Contém as definições das rotas.
- `db/`: Contém arquivos JSON para testes.

## Base de Criação da Aplicação
A base da criação desta aplicação surgiu de dois projetos já criados neste repositório: **[Anime.Net Curioso!](https://web-development-ser.github.io/AnimeList/)** e **[Projeto M2 - Cadastro de Animes](https://web-development-ser.github.io/Pda---MiniProjeto-_M2_2024_r/)**. No futuro, há a possibilidade de juntar os três projetos em um único.

## Instruções para Teste
Para testes, há um arquivo no diretório `./db` que armazena alguns dados JSON já construídos. Estes dados podem ser adicionados utilizando ferramentas de gerenciamento de rotas, como Postman e Insomnia.
- **Node.js**: Plataforma para desenvolvimento da aplicação.
- **Express.js**: Framework para construção de APIs REST.
- **Postman / Insomnia**: Ferramentas para testar as rotas da aplicação.

[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/pt-br/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/pt)
>[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)](https://www.postman.com/)
[![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=flat&logo=insomnia&logoColor=white)](https://insomnia.rest/download)

## Como Executar
1. Clone o repositório:
   ```sh
   git clone https://github.com/web-development-ser/M4_API_Project.git