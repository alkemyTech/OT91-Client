import React from 'react'
import { ErrorMessage, Field } from 'formik'
import {
  InputLabel,
  FormHelperText,
  FormControl,
  Input,
} from '@material-ui/core'

const GenericInput = ({ label, errors, type, name, placeholder }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Field
        component={() => (
          <Input name={name} type={type} placeholder={placeholder} />
        )}
      />
      <ErrorMessage
        name={name}
        component={() => <FormHelperText error>{errors}</FormHelperText>}
      />
    </FormControl>
  )
}

export default GenericInput
