const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmarContrasena");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");
const formulario = document.getElementById("registroForm");

// Validaciones individuales
function validarNombre() {
  const valor = nombre.value.trim();
  const sinEspacios = valor.replace(/\s/g, "");
  const esValido = sinEspacios.length >= 3;
  actualizarEstado(nombre, esValido, "errorNombre", "Debe tener al menos 3 letras reales.");
  return esValido;
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esValido = regex.test(correo.value);
  actualizarEstado(correo, esValido, "errorCorreo", "Correo inválido.");
  return esValido;
}

function validarContrasena() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  const valor = contrasena.value;
  const esValido = valor.length >= 8 && regex.test(valor);
  actualizarEstado(contrasena, esValido, "errorContrasena", "Mínimo 8 caracteres, 1 número y 1 símbolo.");
  return esValido;
}

function validarConfirmacion() {
  const esValido = confirmarContrasena.value === contrasena.value && contrasena.value !== "";
  actualizarEstado(confirmarContrasena, esValido, "errorConfirmar", "Las contraseñas no coinciden.");
  return esValido;
}

function validarEdad() {
  const valor = parseInt(edad.value);
  const esValido = !isNaN(valor) && valor >= 18;
  actualizarEstado(edad, esValido, "errorEdad", "Debes tener al menos 18 años.");
  return esValido;
}

// Actualiza la clase del input y el mensaje de error
function actualizarEstado(input, esValido, errorId, mensaje) {
  const error = document.getElementById(errorId);
  if (esValido) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    error.textContent = "";
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    error.textContent = mensaje;
  }
}

// Revisa si todo es válido y habilita el botón
function revisarFormulario() {
  const valido =
    validarNombre() &&
    validarCorreo() &&
    validarContrasena() &&
    validarConfirmacion() &&
    validarEdad();

  btnEnviar.disabled = !valido;
}

// Agregar eventos para validaciones individuales + revisión del formulario
nombre.addEventListener("input", () => {
  validarNombre();
  revisarFormulario();
});
correo.addEventListener("input", () => {
  validarCorreo();
  revisarFormulario();
});
contrasena.addEventListener("input", () => {
  validarContrasena();
  validarConfirmacion(); // también revisar coincidencia
  revisarFormulario();
});
confirmarContrasena.addEventListener("input", () => {
  validarConfirmacion();
  revisarFormulario();
});
edad.addEventListener("input", () => {
  validarEdad();
  revisarFormulario();
});

// Enviar formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Formulario enviado correctamente");
});

// Resetear formulario
formulario.addEventListener("reset", () => {
  [nombre, correo, contrasena, confirmarContrasena, edad].forEach((campo) => {
    campo.classList.remove("valid", "invalid");
  });
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
  btnEnviar.disabled = true;
});
