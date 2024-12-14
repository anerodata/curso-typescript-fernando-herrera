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
