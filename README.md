# SD 2021.1 - Atividade 1 - Chat com Pub/Sub

INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA PARAÍBA - CAMPUS CAJAZEIRAS.

CURSO DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS.

DISCIPLINA: SISTEMAS DISTRIBUÍDOS 

### Equipe:

#### [Antoniel Damião Henriques da Silva](https://github.com/Antonieldamiao)

#### [Francisco Iarlyson Santana de Andrade](https://github.com/Iarlyson)

#### [James Pereira dos Santos Amarante](https://github.com/JAcademico)

## Descrição

Chat criado com Nodejs e Redis, utilizando o mecanismo de Publisher/Subscriber.

## Como executar

### Utilizando [Docker](https://www.docker.com/), inicialize uma instância do Redis.

```
docker run -d -p 6379:6379 -i redis
```

### Clone este repositório
```
git clone <https://github.com/Iarlyson/chat-pub-sub-redis-sd.git>
```
### Acesse a pasta da atividade no terminal/cmd
```
cd chat-pub-sub-redis-sd
```
### Instale as dependências
```
npm install
```
### Abra mais uma janela no terminal ou cmd.

### Na janela 1, execute a primeira parte aplicação

```
node index.js
```
### Na janela 2, execute a segunda parte aplicação

```
node index.js 8081
```

### Links
O primeiro client estará nesse link http://localhost:8080.

O segundo client estará nesse link http://localhost:8081.

