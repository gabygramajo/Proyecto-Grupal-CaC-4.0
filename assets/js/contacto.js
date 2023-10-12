const formContact = document.getElementById("form-contact")
const nameUser = document.getElementById("name")
const lastnameUser = document.getElementById("lastname")
const asunto = document.getElementById("asunto")
const emailUser = document.getElementById("emailUser")
const textarea = document.querySelector("textarea")
const btnReset = document.getElementById("reset__form")
const contador = document.getElementById('contador')

// Contador de caracteres
const contadorDeCaracteres = () => {

  let caracteresEntrantes = textarea.value
  let caracteresRestantes = 500 - caracteresEntrantes.length

  contador.textContent = caracteresRestantes
}

textarea.addEventListener('input', contadorDeCaracteres)

// formatear inputs
function formatText(text) {
  text = text.replace(/\s+/g, ' ').trim()

  return text.toLocaleLowerCase()
}
// Enviar Formulario Al Servidor
function EnviarFormularioAlServidor() {
  const {nameUser: {contenido:nameUser},
        lastnameUser: {contenido:lastnameUser},
        asunto: {contenido:asunto},
        emailUser: {contenido:emailUser},
        textarea: {contenido:textarea},} = campos;

  const datosDelFormulario = `##ENVIADO AL BACKEND##\n 
  - nombre completo: ${nameUser} ${lastnameUser}\n
  - asunto: ${asunto}\n
  - emailUser: ${emailUser}\n
  - textarea: ${textarea}\n`

  resetearFormulario()

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

// validar campos
const validarCampos = () => {
  let todosValidos = 0;

  for (let key in campos) {
    if(campos[key].contenido.length > 0) {
      esValido(campos[key].elemento)
      ++todosValidos;
    }
    else
      esInvalido(campos[key].elemento)
  }

  if(todosValidos == 5)
    alert(EnviarFormularioAlServidor())

}

// obtener datos del form
let campos = {}
formContact.onsubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()

  campos = {
    nameUser: {
      elemento: nameUser,
      contenido: formatText(nameUser.value)
    }, 
    lastnameUser: {
      elemento: lastnameUser,
      contenido: formatText(lastnameUser.value)
    }, 
    asunto: {
      elemento: asunto,
      contenido: formatText(asunto.value)
    }, 
    emailUser: {
      elemento: emailUser,
      contenido: formatText(emailUser.value)
    }, 
    textarea: {
      elemento: textarea,
      contenido: formatText(textarea.value)
    }
  }
  validarCampos()
}

// boton reset
const resetearFormulario = ()=> {
  const campo = Object.keys(campos).length
  
  if(campo > 0) {
    for (const key in campos) {
      const campo = campos[key].elemento
      if (campo.classList.contains("is-invalid") || campo.classList.contains("is-valid")){
        campo.classList.remove("is-invalid")
        campo.classList.remove("is-valid")
      }
    }
  }

  formContact.reset();
}
btnReset.addEventListener("click", resetearFormulario)
