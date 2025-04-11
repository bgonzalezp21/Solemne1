# Imagen base
FROM nginx:alpine

# Copia del sitio web al directorio de nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
