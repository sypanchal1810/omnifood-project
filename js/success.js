///////////////////////////////////////////////////////////
// Form Submission (Only works with netlify)
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() =>
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have successfully booked your meal 😀',
      }).then(res => {
        location.reload(true);
      })
    )
    .catch(error => alert(error));
});
