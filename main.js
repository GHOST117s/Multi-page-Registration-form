
////personl details
    const name = document.getElementById('first-name');
    const dob = document.getElementById('DOB');
    const email = document.getElementById('email');
    const CountryCode = document.getElementById('countryCode')
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    const mobile = document.getElementById('phone');
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

        if (name.value === '' || name.value == null) {
            messages.push('Name is required');
        }
        if(dob.value === '' || dob.value == null) {
            messages.push('Date of Birth is required');
        }
        if(email.value === '' || email.value == null) {
            messages.push('Email is required');
        }
        if(mobile.value.length < 10) {
            
            messages.push('Mobile number is not valid/check your country code');
            
            
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
        if (CountryCode.value === '' || CountryCode.value == null) {
            messages.push('Country Code is required');
        }

localStorage.setItem('name', JSON.stringify(name.value));
localStorage.setItem('dob', JSON.stringify(dob.value));
localStorage.setItem('email', JSON.stringify(email.value));
localStorage.setItem('name', JSON.stringify(CountryCode.value));
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







    

   
  


  
   

