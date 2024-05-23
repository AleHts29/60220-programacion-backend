#La imagen base:
FROM node:16.20.0

#Carpeta interna de trabajo donde se guarda el proyecto.
WORKDIR /app

#Se copia el archivo package.json al directorio raiz.
COPY package*.json ./

#Ejecutamos el comando npm install para generar las dependencias.
RUN npm install

#Procedemos a copiar todo el código del aplicativo.
COPY . .

#El puerto a exponer en nuestro contenedor.
EXPOSE 9090

ENV MONGO_URL=mongodb://172.17.0.2:27017/clase36-containers-docker-kubernetes?retryWrites=true&w=majority

#Ejecutar el comando para arrancar la app. (validar que exista el script en el package.json)
CMD [ "npm", "start"]