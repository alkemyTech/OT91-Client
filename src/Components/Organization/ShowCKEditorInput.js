import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormHelperText, FormLabel, InputLabel } from '@material-ui/core';

const ShowCKEditorInput = ({label, helperText}) => {
    return (
        <FormControl style={{margin: '5px 0'}}>
            <FormLabel htmlFor="shortDescription" style={{marginBottom: '5px'}}>{label}</FormLabel>
            <CKEditor
                editor={ClassicEditor}
                type="text"
                name="shortDescription"
                placeholder="Write here"
            />
            {helperText && <FormHelperText error>{helperText}</FormHelperText>}
        </FormControl>
    )
}

export { ShowCKEditorInput };
