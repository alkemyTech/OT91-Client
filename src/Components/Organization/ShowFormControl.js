import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

const ShowFormControl = ({name, label, type, placeholder, value, helperText}) => {
    return (
        <FormControl>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input type={type} name={name} value={value} placeholder={placeholder}/>
            {helperText && <FormHelperText id="name">{helperText}</FormHelperText>}
        </FormControl>
    )
}

export { ShowFormControl };
