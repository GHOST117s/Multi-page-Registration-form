

const upload = document.getElementById('upload')
const form3 = document.getElementById('form3');


form3.addEventListener('submit', (e) => {
    let messages = [];

    if (upload.value === '' || upload.value == null) {
        messages.push('Upload is required');
    }
       


    if(messages.length > 0) {
        e.preventDefault()
        errorElement2.innerText = messages.join(', ')
    }

    localStorage.setItem('upload',upload)
})


