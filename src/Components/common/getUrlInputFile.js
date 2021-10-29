
export const UrlInput = (e,setUrl) =>{

  const imageFile = e.target.files[0];
  const imageUrl = new FileReader();
  imageUrl.readAsDataURL(imageFile)
  imageUrl.onload=(e)=>{
    setUrl(e.target?.result)
  }

}