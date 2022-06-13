## api_pratica02
O back-end desenvolvido em nodejs com typescript com funcionalidades bem simples, do CRUD para registros, equipamentos e usuarios.
Para rodar ele, basta rodar os sequintes comandos:
instalar os pacotes do node_modules
docker-compose up -d
yarn typeorm migration:run

## apo_pratica02
O front-end bem simples de se entender, encontra-se 4 paginas, 1 de (usuario, cadastro ou login), outra lista todos equipamentos, e quando clica em algum verifica seus registros, e a ultima que lista todos registros.
Em cada uma delas e possivel ver suas informações mas apenas usuarios logados podem cadastrar algo.
Para rodas basta rodar:
instalar os pacotes do node_modules
yarn dev