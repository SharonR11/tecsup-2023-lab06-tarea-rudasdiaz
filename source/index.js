const express = require('express')
const port = 3500
const app = express()

__dirname ='./source/'

app.get('/', async(req, res, next) =>{
        res.sendFile('login.html',{root: __dirname+ 'public/'});
    //res.send(__dirname+ 'public/')
    })

function validarFormulario() {
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value;

    if (!nombre) return alert('El campo Nombre es obligatorio.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
    return alert('El correo electrónico no tiene un formato válido.');
    if (!password) return alert('El campo Contraseña es obligatorio.');
    if (!fechaNacimiento) return alert('El campo Fecha de Nacimiento es obligatorio.');

    alert('Formulario enviado correctamente.');
    return true;
}

app.listen(port)
console.log(`Server on port ${port}`)