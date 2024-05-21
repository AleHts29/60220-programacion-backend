## Artillery

    artillery quick --count 20 --num 30 "http://localhost:9090/api/performance/operation/complex" -o resultadosComplex.json

## CREAR IMAGEN

    - docker build -t clase35-clusters-docker .

## listar imagenes

    - docker images

## Levantar el Contenedor

    - docker run -p 8080:9090 clase35-clusters-docker
