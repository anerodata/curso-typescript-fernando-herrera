# TypeScript: Tu completa guía y manual de mano.

Notas del curso de Udemy [TypeScript: Tu completa guía y manual de mano](https://nalanda.udemy.com/course/typescript-guia-completa/learn/lecture/27831606#overview)

## Introducción

Comandos básicos de terminal

- `npm install -g typescript`: instala Typescript con `npm` de manera global
- `tsc --version`: Después de instalar Typescript, te dice la versión
- `tsc app.ts`: Transpila `app.ts` a `app.js`
- `tsc`: Transpila todos los ficheros a `js`
- `tsc --init`: Crea el fichero de configuración de Typescript `tsconfig.json`
- `tsc --watch` o `tsc -w`: Activa el modo _watch_, es decir, cada vez que cambie un fichero `.ts`, lo compila

## Tipos de datos

- Primitivos: string, number, boolean, symbol
- Compuestos: objetos literales, funciones, clases, arreglos y otros

Los Symbol se usan cuando quieres tener dentro de un objeto una propiedad garantizada única

Typescript va a tratar de inferir los datos de manera automática

- `const a = 10`, Typescript infiere el tipo 10. No se puede reasignar
- `let b = 10`, Typescript infiere el tipo number, porque se puede reasignar a 3, por ejemplo. Se puede reasignar.
- `let b;`: Esto último sería de tipo `any`, podría ser cualquier cosa

Es mejor no inferir el tipo:

```
const a:number = 10
let b:number
```

Es buena práctica poner `"noImplicitAny": true` en la configuración, para que los argumentos en las funciones haya que tiparlos.

## `tsconfig`

Algunas propiedades interesantes en `compilerOptions` son:

- En el fichero `tsconfig.json`. La propiedad `sourceMap` si la seteamos a true nos ayuda a depurar, porque se ven los `console.log` con la línea del fichero Typescript
- `removeComments`: Elimina los comentarios del JS
- `outFile`: Establece el fichero donde se exporta el transpilado a JS. Desde el punto de vista del rendimiento del servidor, es mejor cargar un solo fichero JS

Si definimos un `outFile` y no tenemos `amd` predefinido como tipo de módulo por defecto. Typescript nos dará el siguiente error:

```
tsconfig.json:28:5 - error TS6082: Only 'amd' and 'system' modules are supported alongside --outFile.
```

Fuera de `compilerOptions` tenemos:

```
exclude: [
    "objetos"
]
```

Sirve para no compilar todos los ficheros contenidos en la carpeta "objetos".

```
include: [
    "node_modules"
]
```

Compilaría todo lo que hay dentro de `node_modules`. SOLAMENTE. Que no se compila por defecto porque no está recomendado.

## Decorador

Una funcion que se ejecuta al transpilar el codigo de TS a JS
