import Swal from "sweetalert2";

const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

const showSuccessAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
  });
};

export { showErrorAlert, showSuccessAlert };
