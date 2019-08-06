# ST0263-P1
Proyecto 1 Tópicos especiales en telemática

# Uso
* Clonar el repositorio
    * ```$ git clone https://github.com/fighur/ST0263-P1.git```
* Ir al directorio del proyecto
    * ```$ cd ST0263-P1```
* (Opcional) https
    * ```$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout FakeTwitter/ssl/nginx.key -out FakeTwitter/ssl/nginx.crt```
* Ir al directorio base y construir el proyecto
    * ```$ docker-compose build```
* Desplegar el proyecto
    * ```$ docker-compose up```
* Crear una cuenta dando click en sign up
* Si la creación fué exitosa debería aparecer un botón debajo del formulario de filtro con la etiqueta ```Compose``` para crear un comentario.
* Para editar o eliminar un comentario, primero se debe ingresar con una cuenta. Y si la cuenta tiene comentarios asociados a ella, apareceran dos botones, ```Edit``` y ```Delete``` en la parte de abajo de estos comentarios.
* Para ver cambios en comentarios dar click al botón ```Refresh```.
