na pasta TCC executar o comando:
docker compose up

na pasta back executar os comandos:
npm i
npx prisma generate
npx prisma migrate
npm start

na pasta front executar os comandos:
docker build -t tcc-front .
docker run -p 4200:4200 tcc-front

acessar o site em http://localhost:4200/
antes de adicionar livros é necessário adicionar editoras e autores!