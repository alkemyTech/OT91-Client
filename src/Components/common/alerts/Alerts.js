import Swal from "sweetalert2"
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
export const AlertError = (body,status) => {
    return Toast.fire({
        icon:'error',
        text:`${body}- status: ${status}`
    })
};
