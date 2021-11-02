import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core'
import '../FormStyles.css'

const GenericInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  errorMessage,
  onChange,
  onBlur,
  isTouched,
}) => {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isTouched && !value && (
        <FormHelperText error>Este campo es Requerido</FormHelperText>
      )}
      {value && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  )
}

export default GenericInput
