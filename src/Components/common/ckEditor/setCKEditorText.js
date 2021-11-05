export const setCKEditorText = (values,field)=>{
    values[field]=values[field].replace(/'<p>'|['</p>']|<strong>|['</strong>']/gi,'');
    return values
};
