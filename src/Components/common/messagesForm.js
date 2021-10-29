
import {ErrorMessage} from 'formik';

export const ErrorsForm = (name,errors) =>{
  return (
    <ErrorMessage 
      name={name} 
      component={()=><p>{errors}</p>}
    />
  )
}