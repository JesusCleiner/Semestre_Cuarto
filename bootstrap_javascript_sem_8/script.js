// Función para mostrar una alerta personalizada
function mostrarAlerta() {
    alert("¡Gracias por visitar Ventas de Botellas PET! Contáctanos para más información.");
}

// Validación del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío por defecto

    let valido = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    // Limpiar clases anteriores
    [nombre, correo, mensaje].forEach(input => {
        input.classList.remove('is-invalid');
    });

    // Validación de campos vacíos
    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        valido = false;
    }
    if (correo.value.trim() === '' || !correo.value.includes('@')) {
        correo.classList.add('is-invalid');
        valido = false;
    }
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        valido = false;
    }

    // Si todo está bien, mostrar alerta y limpiar formulario
    if (valido) {
        alert("¡Formulario enviado correctamente! Nos pondremos en contacto contigo.");
        this.reset();
    }
});
