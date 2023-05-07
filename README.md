# pinia-basics

Este proyecto consiste en una app en la que puedes crear tareas, eliminarlas, asignarlas a tus favoritos y ver el listado filtrado entre todas las tareas y ver sólo las que son colocadas como favoritas.

Está hecho con Vue3, CSS, TypeScript, Json-Server (API) y Pinia. Este último es un manejador de estados globales que te permite crear "stores", "getters" y "actions" de una forma muy simple.

## Instalación de dependencias

```sh
npm install
```

### Habilitar entorno de desarrollo

Vite

```sh
npm run dev
```

Json-Server

```sh
json-server -w ./data/db.json
```

### Generar compilación para producción

```sh
npm run build
```
