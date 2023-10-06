function Edad(fechaNacimiento) {
    //obtener fecha actual
    const actual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    //restar año nacimiento - actual
    //obtener edad
    const edad = actual.getFullYear() - fechaNac.getFullYear();
    //obtener mes actual y de nacimiento
    const mesact = actual.getMonth();
    const diaAct = actual.getDate();
    const mesNac = fechaNac.getMonth();
    const diaNac = fechaNac.getDate();
    //verificar si aun no es su fecha de nacimiento 
    //seria cumpleaños
    if (mesact < mesNac || (mesact === mesNac && diaAct < diaNac)) {
        //si aun no cumple edad, se restara 1
        return edad -1; 
    }
    return edad;
}
//ingresar fecha 'año-mes-dia'
const fechaNacimiento = '2000-05-15'
const edad= Edad(fechaNacimiento);
console.log(`La Edad es : ${edad} años` );

