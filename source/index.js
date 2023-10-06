function Navidad() {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 25);
    //los meses son contados desde 0
    //11 seria diciembre

    const diferencia = navidad - hoy;
    const diasrestantes = Math.ceil(diferencia / (24 * 60 * 60 * 1000));
    return diasrestantes;
}
console.log(`Cantidad de dias que falta para Navidad: ${Navidad()}`);


