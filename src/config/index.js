import { toast } from 'react-toastify'

const API_URL = 'https://jsonplaceholder.typicode.com/'

const errorMessage = () => {
  toast('Problem occurred, sorry!', {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export { API_URL, errorMessage }
