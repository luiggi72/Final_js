const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anioActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anioNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let anios = anioActual - anioNacimiento;
    if (mesActual < mesNacimiento) {
        anios--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            anios--;
        }
    }
    return anios;    
};
window.addEventListener('load', function () {
    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            anios.innerText = `La edad es: ${calcularEdad(this.value)} años`;
            meses.innerText = `La edad es: ${calcularEdad(this.value)} meses`;
            semanas.innerText = `La edad es: ${calcularEdad(this.value)} semanas`;
            dias.innerText = `La edad es: ${calcularEdad(this.value)} dias`;
        }
    });
});