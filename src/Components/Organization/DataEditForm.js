import { ShowFormControl } from './ShowFormControl';
import { ShowFileInput } from './ShowFileInput';
import { useState } from 'react';
import '../FormStyles.css';
import { ShowCKEditorInput } from './ShowCKEditorInput';

const DataEditForm = () => {
    const [value, setValue] = useState('');

    return (
        <form className="form-container">
            <ShowFormControl name="name" label="Organization name" type="text" value="" placeholder="Ingrese el nombre de la organización"/>
            <ShowCKEditorInput label="Short description"/>
            <ShowFileInput btnText="Subir logo" name="logo" value={value} onChange={(e) => setValue(e.target.files[0])} color="primary" accept=".png, .jpg"/>
            <ShowFormControl name="longDescription" label="Descripcion larga" type="text" value="" placeholder="Escriba la descripción larga" />
            <ShowFormControl name="facebook" label="Facebook" type="text" value="" placeholder="Ingrese la url"/>
            <ShowFormControl name="instagram" label="Instagram" type="text" value="" placeholder="Ingrese la url"/>
            <button className="submit-btn" type="submit">Guardar cambios</button>
        </form>
    )
}

export default DataEditForm;
