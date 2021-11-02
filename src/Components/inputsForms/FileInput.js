import { InputLabel, FormHelperText } from '@material-ui/core'
import '../FormStyles.css'

const FileInput = ({
  name,
  value,
  accept,
  errorMessage,
  onChange,
  onBlur,
  isTouched,
}) => {
  return (
    <div>
      <input
        type='file'
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        accept={accept}
        className='hide'
      />
      {isTouched && !value && (
        <FormHelperText error>Este campo es Requerido</FormHelperText>
      )}
      {value && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </div>
  )
}

export default FileInput
