### Descrição
Projeto criado em NestJs.  
### Criar um container pro banco de dados
```
#Depois de clonar o projeto
$ cd infra/docker
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
$ yarn dev

$ yarn start:dev
```

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