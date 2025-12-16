🍽️ Restaurant API - Sistema de Gestão de Pedidos e Mesas
Esta é uma API REST desenvolvida para gerenciar o fluxo de atendimento de um restaurante. O projeto permite o controle de produtos, abertura e fechamento de sessões em mesas e o gerenciamento de pedidos, garantindo que regras de negócio sejam respeitadas — como impedir a abertura de uma mesa que já está ocupada.

🚀 Tecnologias e Ferramentas
O projeto foi construído com as melhores práticas de desenvolvimento back-end:

Node.js & Express - Base da aplicação e gerenciamento de rotas.

TypeScript - Tipagem estática para maior segurança e produtividade.

Knex.js - Query Builder para manipulação eficiente do banco de dados SQL.

SQLite - Banco de dados relacional (armazenado no arquivo tables).

Zod - Validação rigorosa de esquemas e dados de entrada.

Insomnia - Ferramenta utilizada para testes e documentação das requisições.

📂 Estrutura do Projeto
A organização segue uma estrutura modular para facilitar a manutenção:

src/controllers/: Contém a lógica de negócio (ex: TablesSessionsController).

src/database/: Configurações do Knex e migrações do banco de dados.

src/middlewares/: Interceptadores globais, como o sistema de Tratamento de Erros.

src/routes/: Definição centralizada de todos os endpoints da API.

src/utils/: Classes utilitárias, como o AppError para padronização de exceções.

src/server.ts: Ponto de entrada que inicializa o servidor.

⚙️ Como Executar
Clone o repositório:

Bash
https://github.com/FranciscoCosta31/API-RESTAURANT.git
Instale as dependências:

Bash

npm install
Execute as Migrations: Crie as tabelas no banco de dados SQLite utilizando o Knex:

Bash

npx knex migrate:latest
Inicie o servidor:

Bash

npm run dev
O servidor iniciará por padrão na porta 3333.

📌 Exemplos de Endpoints
🟢 Sessões de Mesa (/tables-sessions)
POST /: Inicia uma nova sessão (abre a mesa e valida se já não está ocupada).

PATCH /:id: Encerra uma sessão ativa (registra o horário de fechamento).

GET /: Lista o histórico de todas as sessões.

🔵 Produtos (/products)
GET /: Lista todos os produtos disponíveis no cardápio.

📋 Documentação (Insomnia)
Para facilitar os testes, este repositório já inclui um arquivo de exportação das rotas.

📁 Arquivo: Insomnia_2025-12-15.yaml (Basta importar no seu Insomnia para começar a usar).

💡 Aprendizados
Neste projeto, pude consolidar conhecimentos em:

Estruturação de APIs REST escaláveis.

Validação de dados com Zod.

Tratamento global de erros customizado com middlewares.

Uso de Path Aliases (@/) para importações mais limpas.

Persistência de dados e controle de estado de recursos no banco de dados.

👨‍💻 Autor
Desenvolvido por [Francisco Costa]. Conecte-se comigo no LinkedIn!
