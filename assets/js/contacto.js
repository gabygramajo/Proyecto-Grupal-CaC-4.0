const formContact = document.getElementById("form-contact")
const nameUser = document.getElementById("name")
const lastnameUser = document.getElementById("lastname")
const asunto = document.getElementById("asunto")
const emailUser = document.getElementById("emailUser")
const textarea = document.querySelector("textarea")
const btn = document.getElementById("submit__form")
const contador = document.getElementById('contador')

// Contador de caracteres
const contadorDeCaracteres = () => {

  var caracteresEntrantes = textarea.value
  var caracteresRestantes = 500 - caracteresEntrantes.length

  contador.textContent = caracteresRestantes
}

textarea.addEventListener('input', contadorDeCaracteres)

// formatear inputs
function formatText(text) {
  text = text.replace(/\s+/g, ' ').trim()

  return text.toLocaleLowerCase()
}

// obtener datos del form
formContact.onsubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()

  // alert(`nombre completo: ${formatText(nameUser.value)} ${formatText(lastnameUser.value)}\nasunto: ${formatText(asunto.value)}\nemail: ${formatText(emailUser.value)}\nmensaje: ${formatText(textarea.value)}`)
  alert(`nombre completo: ${formatText(nameUser.value)} ${formatText(lastnameUser.value)}`)
}