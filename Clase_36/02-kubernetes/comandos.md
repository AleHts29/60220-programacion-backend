# MOP

    1. generar una nueva imagen (ya que no usamos mongo)
        ❯ docker build -t clase36-users-creator .

    2. generamos el un nuevo tag y hacemos un push a dockerHub
        ❯ docker tag clase36-users-creator alehts29/clase36-users-creator:1.0.1-test
        ❯ docker push alehts29/clase36-users-creator:1.0.1-test
        
        ❯ docker pull alehts29/clase36-users-creator:1.0.1-test

    3. comandos minikube

    4. Analisis del manifiesto "kube-users-creator.yaml"

    5. ejecutamos el .yaml
        ❯ kubectl apply -f kube-users-creator.yaml

    6. comandos minikube
        ❯ kubectl get deployments
        ❯ kubectl get pods

    7. Visualizamos el servicio para ver si esta funcionando nuestro Load-Balancer (me va mostrar los puertos)
        hasta este punto tenemos toda la infra montada
        ❯ kubectl get services

    8. ponemos a trabajar el minikube
        ❯ minikube service list
        ❯ minikube service clase36-users-creator-service

    9. pruebas en Postman

    10. Para saber cual de los 5 pods que creamos esta respondiendo
        ❯ kubectl logs -f clase36-users-creator-deploy-65dcbb7746-vkmwk

# minikube
    - Iniciamos el ambiente
        ❯ minikube start

    - me dice el contexto en el que estoy   
        ❯ kubectl config current-context 

        - si tuviera mas entornos
            ❯ kubectl config use-context "NOMBRE-DEL-CONTEXTO"

    - me muestra los pods activos 
        ❯ kubectl get pods

    - Me muestra los deploy activos
        ❯ kubectl get deployments

    - Me muestra los servicios activos en el ambiente de kubernetes
        ❯ kubectl get services

    - Elimino un determinado deploy(proceso padre/orquestador) y los pods
        ❯ kubectl delete deployments clase36-users-creator-deploy

    - Vemos el listado de servicios
        ❯ minikube service list
            |-------------|-------------------------------|--------------|-----|
            |  NAMESPACE  |             NAME              | TARGET PORT  | URL |
            |-------------|-------------------------------|--------------|-----|
            | default     | clase36-users-creator-service |         8080 |     |
            | default     | kubernetes                    | No node port |     |
            | kube-system | kube-dns                      | No node port |     |
            |-------------|-------------------------------|--------------|-----|

    - Ejecutamos el service en minikube
        ❯ minikube service clase36-users-creator-service

            |-----------|-------------------------------|-------------|------------------------|
            | NAMESPACE | NAME | TARGET PORT | URL |
            |-----------|-------------------------------|-------------|------------------------|
            | default | clase36-users-creator-service | 8080 | http://192.168.49.2:32595 |
            |-----------|-------------------------------|-------------|------------------------|
            🏃 Starting tunnel for service clase36-users-creator-service.
            |-----------|-------------------------------|-------------|------------------------|
            | NAMESPACE | NAME | TARGET PORT | URL |
            |-----------|-------------------------------|-------------|------------------------|
            | default | clase36-users-creator-service | | http://127.0.0.1:59931 |
            |-----------|-------------------------------|-------------|------------------------|
            🎉 Opening service default/clase36-users-creator-service in default browser...
            ❗ Because you are using a Docker driver on darwin, the terminal needs to be
            open to run it.

    - Para ver los logs
        ❯ kubectl logs -f clase36-users-creator-deploy-65dcbb7746-vkmwk
