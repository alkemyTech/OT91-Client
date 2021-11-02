const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const isEmailInvalid = (email) => {
  return !emailFormat.test(email)
}
export const isRequired = (value, errors, inputName) => {
  if (!value) {
    errors[inputName] = 'Este campo es obligatorio'
  }
}
export const isShort = (length, min) => {
  length < min ? true : false
}
export const isBetween = (length, min, max) =>
  length < min || length > max ? false : true
