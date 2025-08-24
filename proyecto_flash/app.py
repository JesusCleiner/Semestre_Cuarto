from flask import Flask, render_template

app = Flask(__name__)

# Página de inicio -> usa templates/templates/index.html
@app.route('/')
def index():
    return render_template('index.html')

# Página "Acerca de" -> usa templates/about.html
@app.route('/about')
def about():
    return render_template('about.html')

# Ruta dinámica (saludo por nombre)
@app.route('/usuario/<nombre>')
def usuario(nombre):
    return f'Bienvenido, {nombre}!'

# Ruta por defecto (si no se pone nombre)
@app.route('/usuario/')
def usuario_default():
    return "Bienvenido, Cleiner!"

if __name__ == '__main__':
    app.run(debug=True)
