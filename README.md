# Desafio back-end AMARO

## Sobre o desafio

### Criação de API para cadastro e consulta de produtos

Features:

#### End-point para inserção de dados

- [x] O cliente pode enviá-los em arquivos json ou xml e a API
      insere no banco de dados.

#### End-point para consulta destes produtos

- [x] Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome,
      deve listar todos os produtos com aquela respectiva busca, pode ser feito em um ou mais end-points.

#### Outros pontos

- Ter uma cobertura de teste relativamente boa, a maior que você conseguir.
- Colocar uma autenticação JWT.
- Pensar em escalabilidade.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/>

# Acesse a pasta do projeto

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3003 - acesse <http://localhost:3003>
```
