export const validations = (values) => {
  const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  let errors = {}
  if (!values.username) {
    errors.username = 'Debes poner tu nombre'
  }
  if (!values.email) {
    errors.email = 'Debes poner tu email'
  } else if (!emailFormat.test(values.email)) {
    errors.email = 'La dirección de Email no es valida'
  }
  if (!values.phone) {
    errors.phone = 'Debes poner tu número de telefono'
  }
  if (values.phone.length > 0 && values.phone.length < 8) {
    errors.phone = 'El numero de teléfono no es válido'
  }
  if (!values.message) {
    errors.message = 'Debes escribir un mensaje'
  }
  return errors
}
