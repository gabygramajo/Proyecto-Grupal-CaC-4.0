const formDonaciones = document.getElementById("form-donaciones")
const btnReset = document.getElementById("reset__form")
const btnDonar = document.getElementById("btn-submit")

const campos = document.querySelectorAll("input, select")

// Enviar Formulario Al Servidor
function enviarFormularioAlServidor() {

  const datosDelFormulario = `##ENVIADO AL BACKEND##\n 
  - nombre completo: ${campos[0].value} \n
  - email: ${campos[1].value}\n
  - Tipo de Donacion: ${campos[2].value}\n
  - monto: ${campos[3].value}\n
  - donacion anónima: ${campos[4].value}\n`

  return datosDelFormulario
}
// is-invalid is-valid
const esValido = campo => {
  const contieneIsValid = campo.classList.contains("is-valid")
  if(!contieneIsValid) {
    campo.classList.remove("is-invalid")
    campo.classList.toggle("is-valid")
  }
}
const esInvalido = campo => {
  const contieneIsInvalid = campo.classList.contains("is-invalid")
  if(!contieneIsInvalid) {
    campo.classList.remove("is-valid")
    campo.classList.toggle("is-invalid")
  }
}
// Validar campos
const validarCampos = () => {
  let todosValidos = 0;

  for (const campo of campos) {
    switch (campo.type) {
      case "select-one":  
        esValido(campo)
        break;

      case "text":
      case "email":  
        if(campo.value.length > 3) {
          esValido(campo)
          ++todosValidos
        }
        else
          esInvalido(campo)
        break;

      case "number":
        if(campo.value > 0){
          esValido(campo)
          ++todosValidos
        }
        else
          esInvalido(campo)
        break;  

      default:
        break;
    }
  }
  
  if(todosValidos == 3)
    alert(enviarFormularioAlServidor())
}
// reset form
const resetearFormulario = ()=> {

  for (const campo of campos) {
    if (campo.classList.contains("is-invalid") || campo.classList.contains("is-valid")){
      campo.classList.remove("is-invalid")
      campo.classList.remove("is-valid")
    }
  }

  formDonaciones.reset();
}
btnReset.addEventListener("click", resetearFormulario)
//
formDonaciones.onsubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()

  validarCampos()
}