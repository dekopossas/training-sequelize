# training-sequelize
Repositório criado com o objetivo de treinar sequelize.

Vídeo referente a revisão de sequelize do Thiago.

efetuei esse passo a passo logo no inicio do projeto.

``` bash
## npm init.
npm init -y

## instalando estrutura backend classica.
npm i express nodemon sequelize mysql2

## instalando sequelize cli função DEV.
npm i -D sequelize-cli

## iniciando sequelize no projeto, esse é irado.
npx sequelize-cli init

## Criando o banco.
npx sequelize db:create

## Criando migrations e models de posts
npx sequelize model:generate --name Post --attributes title:STRING,content:TEXT

## Criando migrations e models de Tags
npx sequelize model:generate --name Tag --attributes title:STRING
```
