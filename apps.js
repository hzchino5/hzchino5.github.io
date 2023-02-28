const abrir = document.getElementById("abrir");
const datos_personales = document.getElementById('datos_personales');


const cerrar = document.getElementById("cerrar");

abrir.addEventListener('click', () => {
  datos_personales.classList.add('show');  
});
cerrar.addEventListener('click', () => {
  datos_personales.classList.remove('show');
});

abrir_formacion.addEventListener('click', () => {
  formacion_profesional.classList.add('show');  
});
cerrar_formacion.addEventListener('click', () => {
  formacion_profesional.classList.remove('show');
});
abrir_experiencia.addEventListener('click', () => {
  experiencia_laboral.classList.add('show');  
});
cerrar_experiencia.addEventListener('click', () => {
  experiencia_laboral.classList.remove('show');
});

abrir_aptitudes.addEventListener('click', () => {
  aptitudes.classList.add('show');  
});
cerrar_aptitudes.addEventListener('click', () => {
  aptitudes.classList.remove('show');
});
