### Descrição
Projeto criado em NestJs.  

### Clonar o Repositório
```
$ git clone https://github.com/williammoreschi/first-project-with-nestjs.git
```
### Criar um container para o banco de dados (mongo)
```
#Depois de clonar o projeto
$ cd first-project-with-nestjs/infra/docker
$ docker-compose up -d
$ cd ../../
```
### Popular o banco com dados fictícios 
depois de rodar o comando de popular o banco vai ser criado um usuário 

user: admin.devapi.com

pass: 123456
```
# Excluir a base
$ yarn schema:drop

# Recriar a base com dados
$ yarn seed:run
```
### Rodar o projeto
```
$ yarn start:dev

# O servidor iniciara na porta:3000
# acesse <http://localhost:3000>

#ROTAS
# -- Autenticação -- #
# GET: http://localhost:3000/auth/login 

# -- CRUD (autenticada)  -- #
# GET: http://localhost:3000/connectors
# GET: http://localhost:3000/connectors/xxxxxx
# GET: http://localhost:3000/connectors/findByFilter?name=Teste&category=Category&type=BD&privacy=PUBLIC
# POST: http://localhost:3000/connectors
# PUT: http://localhost:3000/connectors/xxxxxx
# DELETE: http://localhost:3000/connectors/xxxxxx
```
<img src="https://user-images.githubusercontent.com/2512512/113729668-9a880680-96cd-11eb-9d18-85e1bbf8416a.gif" alt="Demonstração das rotas" width="100%" />

### Qualidade do código
```
# eslint
$ yarn lint

# prettier
$ yarn format
```

### Teste
Statements 23.36% | Branches 15.38% | Functions 18.18% | Lines 22.07%
```
$ yarn test

$ yarn test:cov
```

### Arquivo com as rotas
O arquivo contendo as rotas se chama **Insomnia.json** é so importar.
