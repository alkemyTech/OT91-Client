import axios from "axios";
import Swal from 'sweetalert2'
const CreateSlide = (initialSlides) => {
    axios({
      method: "POST",
      url: "http://ongapi.alkemy.org/api/slides",
      data: {
        name: initialSlides.name,
        description: initialSlides.description,
        image: initialSlides.image,
      },
    })
    .then((res) => {
          Swal.fire(
            'Slide Creado!'
          )
      })
      .catch((err) => (err));
   }
   const EditSlide = () => {
       axios({
        method: "PUT",
        url: `http://ongapi.alkemy.org/api/slides/${slides.id}`,
        data: {
          name: initialSlides.name,
          description: initialSlides.description,
          image: initialSlides.image,
        },
       })
   }
export {CreateSlide, EditSlide}
