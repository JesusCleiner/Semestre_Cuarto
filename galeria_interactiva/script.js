const gallery = document.getElementById('gallery');
const imageUrlInput = document.getElementById('image-url');
const addImageButton = document.getElementById('add-image');
const deleteImageButton = document.getElementById('delete-image');

let selectedImage = null;

// Función para crear una imagen en la galería
function crearImagen(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Imagen de galería';

  img.addEventListener('click', () => {
    if (selectedImage) selectedImage.classList.remove('selected');
    img.classList.add('selected');
    selectedImage = img;
  });

  gallery.appendChild(img);
}

// Cargar imágenes locales desde carpeta /assets/img/
const imagenesLocales = [
  'assets/img/imagen1.png',
  'assets/img/imagen2.png',
  'assets/img/imagen3.png',
  'assets/img/imagen4.png',
];

window.addEventListener('DOMContentLoaded', () => {
  imagenesLocales.forEach(crearImagen);
});

// Agregar imagen desde URL
addImageButton.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (!url) return;

  crearImagen(url);
  imageUrlInput.value = '';
});

// Eliminar imagen seleccionada
deleteImageButton.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// Tecla Delete para eliminar imagen
document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete' && selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});
