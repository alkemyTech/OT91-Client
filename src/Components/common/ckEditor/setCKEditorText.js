export const setCKEditorText = (values,field)=>{
    values[field]=values[field].replace(/'<p>'|['</p>']/gi,'');
    return values
};

