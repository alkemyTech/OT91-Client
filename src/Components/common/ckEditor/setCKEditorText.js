export const setCKEditorText = (values,field)=>{
    values[field]=values[field].replace(/'<p>'|['</p>']/gi,'');
    return values
};

export const replaceCKEditorText = (text)=>{
    return text.replace(/'<p>'|['</p>']|<strong>|['</strong>']/gi,'');
};
