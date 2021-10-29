export const validateFormTestimonials = (values) => {
    let errors={}

    if(!values.image) errors.image='You need to add a image';

    if(!values.name) errors.name='You need to enter a name';
    if(values.name.length<4) errors.name='The name must have more than 4 letters';
    
    if(!values.description) errors.description='You need to add a description';
    
    return errors

}

export const replaceCKeditor = (values)=>{
    values.description=values.description.replace(/'<p>'|['</p>']/gi,'');
    return values
}
