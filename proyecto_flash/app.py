from flask import Flask

app = Flask(__name__)

# Ruta principal
@app.route('/')
def home():
    return "¡Hola, Flask está funcionando! 🚀"

# Ruta dinámica (con tu nombre)
@app.route('/usuario/<nombre>')
def usuario(nombre):
    return f'Bienvenido, {nombre}!'

# Ruta por defecto (si no se pone nombre)
@app.route('/usuario/')
def usuario_default():
    return "Bienvenido, Cleiner!"

if __name__ == '__main__':
    app.run(debug=True)
