# MercadoLibre - BackEnd
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
[![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)

> El proyecto en mención está realizado con Express. Sirve como template para conocer el funcionamiento de un servidor BackEnd con Express, realizado de llamadas al API de MercadoLibre con Axios y mappeo de items para entregarlos según la petición realizada.

---

## Tabla de Contenido

- [Estado](#estado)
- [Prerequisitos](#prerequisitos)
- [Instalación](#installation)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [TODO](#todo)
- [Autor](#autor)


---

## Estado

- El proyecto se encuentra totalmente funcional y probado al último commit realizado.
- Para conocer los recursos y estado reciente del API de MercadoLibre consultar: https://developers.mercadolibre.com.co/es_ar/api-docs-es

---

### Prerequisitos

Para poder utilizar el proyecto se debe contar con las siguientes herramientas y permisos:

- `GIT`: Herramienta que permitirá descargar la aplicación del repositorio: https://git-scm.com/downloads, instalación: https://www.youtube.com/watch?v=Wfe4jL21iPs
- `Node`
- `Visual Studio Code` (Editor de Código recomendado)

---

### Instalación

- 👯 Clonar este repositorio en su máquina local 
```shell
$ git clone https://github.com/SAngelCuadrosV/MLBack.git
```

- A través de la línea de comandos, ir a la ruta donde se clonó el proyecto e instalar las librerías del proyecto con el comando:
```shell
$ npm install
```

- Abrir el proyecto con Visual Studio.

---

### Desarrollo

Actualmente el proyecto se encuentra con un solo archivo .js, el cual se debe inicializar ejecutando el comando:
```shell
$ node app.js
```
La ejecución del comando hace que el servidor Express se levanté y queda escuchando las peticiones por el puerto parametrizado en la constante `const port = 5000`.

Se encuentran desarrolladas dos funcionalidades:
- `GET /api/items`: Obtiene todos los items que coincidan con el QueryParam entregado.
- `GET /api/items/:id`: Obtiene el item específico entregado en el PathParam.

Adicionalmente, se cuenta con una función que se encarga de recibir la data del objeto recibido por el API de MercadoLibre y lo mapea al formato esperado para el FrontEnd.

---

### Despliegue

> Se debe verificar la documentación apropiada según el servidor donde se desee desplegar la aplicación. Aún así, siempre se debe verificar el puerto por donde va a escuchar las peticiones, el cual se encuentra parametrizado en la constante `const port = 5000`.
---

### TODO

- Al ampliar la aplicación con nuevas funcionalidades que requieran el manejo de diferentes archivos .js.
- A medida que van saliendo requisitos relacionados con el API de MercadoLibre, se recomienda actualizar el manejo de errores y códigos de error para ser entregados de manera correcta al FrontEnd.

---

### Autor

* **Sebastian Cuadros Vanegas** - *Desarrollo de la receta* - Ingeniero de Software