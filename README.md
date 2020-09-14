# Proceso de publicación y venta de consolas de Tienda Friki

El proyecto incluye una aplicación web basada en Next.js y React que sirve como entrada al público general que quiera ofrecernos sus consolas para vender en la tienda.

En la página se muestran las consolas que estén a la venta, se puede publicar ofertas para la tienda y registrarse y recibir detalles de los procesos iniciados. Además de los documentos generados.

## Tecnología

- React
- Next.js
- Firebase
- Bonita
- PostgreSQL
- Docker y docker-compose
 
## Requisitos

Docker y docker-compose instalados.

## Intrucciones

1. Clonar el repositorio.
2. Crear un archivo `.env.local` en la raíz y completar las variables de entorno. Utilice el archivo `.env.local.example` como guía de las variables requeridas.
3. Colocar el archivo de servidor de firebase en la raíz.
4. Ejecutar 
```bash
docker-compose up -d
```
5. Visitar [http://localhost:3000](http://localhost:3000) para la página web y [http://localhost:8080](http://localhost:8080) para el portal de Bonita.

## Configuración

Instalar el modelo de datos, la organización y los procesos utilizando el portal de Bonita. Los archivos se encuentran en releases.

## Autor

Elaborado por **Ricardo Baquero** utlizando contenidos de **Tienda Friki** para la clase de **Diseño y Gestión de Procesos Organizacionales**. 

Carrera de Ingeniería Informática. 

Universidad Central del Ecuador 2020.
