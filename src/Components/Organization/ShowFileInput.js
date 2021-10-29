import { Button, InputLabel } from '@material-ui/core';
const isUploadedFile = value => typeof(value) === 'object' && value.name;

const ShowFileInput = ({onChange, ...props}) => {
    const {btnText, name, value, color, accept} = props;
    return (
        <div style={{ maxWidth: 'fit-content' }}>
            <input type="file" name={name} id={name} onChange={onChange} accept={accept} style={{ display: 'none' }}/>
            <label htmlFor={name}>
                <Button variant="contained" color={color} component="span">
                    {btnText}
                </Button>
            </label>
            {isUploadedFile(value) && <InputLabel style={{display: 'inline-block', marginLeft: '10px'}}>Archivo subido: {value.name}</InputLabel>}
        </div>
    )
}

export { ShowFileInput };
