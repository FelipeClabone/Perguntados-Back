# Utilizar a imagem Node.js
FROM node:20-alpine
RUN apk add --no-cache bash

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Copiar o restante dos arquivos do projeto
COPY . .

RUN yarn

RUN yarn global add sequelize-cli

# Copiar o script wait-for-it.sh para dentro do contêiner
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Expor a porta 8800 para o serviço backend
EXPOSE 8800


CMD ["sh", "-c", "/usr/local/bin/wait-for-it.sh db:3306 -- yarn sequelize-cli db:migrate && yarn start"]
