var input = document.querySelector("#mobile");
    window.intlTelInput(input, {
        separateDialCode: true,
       
        preferredCountries: ["in", "jp",  "no"]
    });
////personl details
    const Fname = document.getElementById('first-name');
    const Lname = document.getElementById('Last-name');
    const dob = document.getElementById('DOB');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const gender = document.getElementById('Gender');
    const Father = document.getElementById('father-name');
    const Mother = document.getElementById('Mother-name');
    const collageId = document.getElementById('CollageID');

///// education details
// const  HInstitute = document.getElementById('HSCInstName');
// const  HBoard = document.getElementById('HSCBO');
// const  Hmarks  = document.getElementById('HSCMarks');

// const  SInstitute = document.getElementById('SCCName');
// const  SBoard  = document.getElementById('SCCBO');
// const  Smarks  = document.getElementById('SCCMarks');





    const form = document.getElementById('form');
    // const form2 = document.getElementById('form2');
    const errorElement = document.getElementById('error');
    // const errorElement2 = document.getElementById('error2');

    var goodColor = "#0C6";
    var badColor = "#FF9B37";

    form.addEventListener('submit', (e) => {
        let messages = [];

        if (Fname.value === '' || Fname.value == null) {
            messages.push('First Name is required');
        }
        if (Lname.value === '' || Lname.value == null) {
            messages.push('Last Name is required');
        }
        if(dob.value === '' || dob.value == null) {
            messages.push('Date of Birth is required');
        }
        if(email.value === '' || email.value == null) {
            messages.push('Email is required');
        }
        if(mobile.value.length < 10) {
            
            messages.push('Mobile number is not valid');
            
            
        }
        if(gender.value !='Male' && gender.value !='Female' && gender.value !='Other') {
            messages.push('Gender must be Male/Female/Other');
        }
      if(collageId.value.length < 6) {
            messages.push('Collage ID is required');
        }
        if(Father.value === '' || Father.value == null) {
            messages.push('Father name is required');
        }

        if(Mother.value === '' || Mother.value == null) {
            messages.push('Mother name is required');
        }

localStorage.setItem('name', JSON.stringify(Fname.value));

localStorage.setItem('name', JSON.stringify(Lname.value));
localStorage.setItem('dob', JSON.stringify(dob.value));
localStorage.setItem('email', JSON.stringify(email.value));
localStorage.setItem('mobile', JSON.stringify(mobile.value));

localStorage.setItem('gender', JSON.stringify(gender.value));
localStorage.setItem('collageId', JSON.stringify(collageId.value));
localStorage.setItem('Father', JSON.stringify(Father.value));
localStorage.setItem('Mother', JSON.stringify(Mother.value)); 
     

        if(messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
}


})







    

   
  


  
   

