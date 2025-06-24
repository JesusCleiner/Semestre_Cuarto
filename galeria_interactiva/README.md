# Galería Interactiva

Aplicación web simple que permite agregar, seleccionar y eliminar imágenes de una galería usando JavaScript y manipulación del DOM.

## Características
- Muestra automáticamente imágenes predefinidas guardadas en la carpeta `assets/img/` al iniciar.
- Permite agregar nuevas imágenes a partir de una URL mediante un campo de texto.
- Las imágenes agregadas por el usuario NO se guardan de forma permanente (se pierden al cerrar la página).
- Selecciona imágenes con clic.
- Elimina la imagen seleccionada con botón o tecla Delete.

## Estructura del proyecto
```
galeria-interactiva/
├── index.html               # Página principal HTML
├── styles.css               # Estilos de la galería
├── script.js                # Lógica de interacción en JavaScript
├── assets/
│   └── img/                 # Carpeta con imágenes cargadas al iniciar
│       ├── imagen1.jpg
│       ├── imagen2.jpg
│       └── imagen3.jpg
├── README.md                # Documentación del proyecto
```

## Tecnologías utilizadas
- HTML5
- CSS3 (con Flex/Grid)
- JavaScript (DOM y eventos)

## Instrucciones de uso
1. Abre el archivo `index.html` en un navegador.
2. Verás una galería con imágenes predefinidas.
3. Puedes pegar una URL de imagen válida y hacer clic en "Agregar Imagen" para añadirla a la galería.
4. Haz clic sobre cualquier imagen para seleccionarla.
5. Usa el botón "Eliminar Imagen Seleccionada" o la tecla `Delete` para borrarla.

## Notas
- Las imágenes precargadas en la carpeta `assets/img/` se cargan automáticamente al iniciar.
- Las imágenes agregadas por el usuario no se almacenan de forma persistente.