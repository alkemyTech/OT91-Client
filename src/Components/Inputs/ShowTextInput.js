import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../../Styles/inputs.css';

const ShowTextInput = ({name, label, type, placeholder, value, errorMessage, className, ...inputEvents}) => {
    return (
        <FormControl className={className}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input type={type} name={name} value={value} placeholder={placeholder} {...inputEvents}/>
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </FormControl>
    )
}

export { ShowTextInput };
