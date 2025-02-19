El objetivo de este ejercicio es instalar el archivo de definición de tipos de Express para poder inferir los tipos del objeto devuelto en una peticion HTTP

Para transpilar el TS a JS, ejecutar en este directorio:

```
tsc -w
```

Para levantar el proyecto, ejecutar en este directorio:

```
node dist/index.js
```

Al cambiar algo del texto de la respuesta de Express, si queremos ver los cambios, es necesario matar el proceso del servidor y volver a iniciarlo con el comando anterior.
