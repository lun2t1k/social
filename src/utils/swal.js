import Swal from 'sweetalert2'

export const swalError = error => {
    Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        buttonsStyling: false,
        confirmButtonText: 'Ok',
        customClass: {
            confirmButton:
                'px-6 py-3 rounded-xl text-xl text-white bg-violet-400 transition-all ease-in hover:bg-violet-500 disabled:bg-gray-400 disabled:hover:bg-gray-400'
        }
    })
}
