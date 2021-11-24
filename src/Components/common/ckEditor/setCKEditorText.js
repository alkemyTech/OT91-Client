export const setCKEditorText = (values,field)=>{
    return values[field].replace(/'<p>'|['</p>']|<strong>|['</strong>']/gi,'');
};
