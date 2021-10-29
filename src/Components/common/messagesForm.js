
import {ErrorMessage} from 'formik';

export const ErrorsForm = (name,errors) =>{
  console.log(errors,name)
  return (
    <ErrorMessage 
      name={name} 
      component={()=><p>{errors}</p>}
    />
  )
}