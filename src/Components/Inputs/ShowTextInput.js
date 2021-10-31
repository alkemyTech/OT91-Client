import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import '../../Styles/inputs.css';

const ShowTextInput = (props) => {
    const {name, label, type, placeholder, value, errorMessage, className, ...inputEvents} = props;
    return (
        <FormControl className={className}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input type={type} name={name} value={value} placeholder={placeholder} {...inputEvents}/>
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </FormControl>
    )
}

export { ShowTextInput };
