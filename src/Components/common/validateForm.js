export const validateForm = (values) => {
    let errors={}

    if(!values.image) errors.image='You need to add a image';

    if(!values.title) errors.title='You need to enter a title';
    if(values.title.length<4) errors.title='The title must have more than 4 letters';
    
    if(!values.description) errors.description='You need to add a description';
    
    return errors

}

export const replaceCKeditor = (values)=>{
    values.description=values.description.replace(/'<p>'|['</p>']/gi,'');
    return values
}
