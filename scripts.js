document.getElementById('datosForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const primerNombre = document.getElementById('primerNombre').value;
    const segundoNombre = document.getElementById('segundoNombre').value;
    const primerApellido = document.getElementById('primerApellido').value;
    const segundoApellido = document.getElementById('segundoApellido').value;
    const dni = document.getElementById('dni').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    const nombreCompleto = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
    document.getElementById('nombreCompleto').value = nombreCompleto.trim();
    
    const ultimoDigitoDNI = dni.slice(-1);
    document.getElementById('ultimoDigitoDNI').value = ultimoDigitoDNI;
    
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    document.getElementById('edad').value = edad;
});
