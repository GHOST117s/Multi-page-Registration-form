
const  HInstitute = document.getElementById('HSCInstName');
const  HBoard = document.getElementById('HSCBO');
const  Hmarks  = document.getElementById('HSCMarks');

const  SInstitute = document.getElementById('SCCName');
const  SBoard  = document.getElementById('SCCBO');
const  Smarks  = document.getElementById('SCCMarks');

const  CurrentInstitute = document.getElementById('CName');
const  CurrentBoard  = document.getElementById('Cun');
const  Currentmarks  = document.getElementById('Cmarks');


const form2 = document.getElementById('form2');
const errorElement2 = document.getElementById('error2');


form2.addEventListener('submit', (e) => {
    let messages = [];

    if (HInstitute.value === '' || HInstitute.value == null) {
        messages.push('Institute name is required');
    }
    if(HBoard.value != 'CBSE' && HBoard.value != 'ICSE' && HBoard.value != 'STATE') {
        messages.push('HSC Board name is NOT valid');
    }
    if(Hmarks.value.length < 0) {
        messages.push('Marks is not valid');
    }
    if(SInstitute.value === '' || SInstitute.value == null) {
        messages.push('Institute name is required');
    }
    if(SBoard.value != 'CBSE' && SBoard.value != 'ICSE' && SBoard.value != 'STATE'){
         messages.push("SSC Board name is NOT valid")
    }
    if(Smarks.value.length < 0){
        messages.push('Marks is not valid')
    }
    if(CurrentInstitute.value === '' || CurrentInstitute.value == null) {
        messages.push('Cource name is required');
    }
    if(CurrentBoard.value === '' || CurrentBoard.value == null){
            messages.push("Institution name is required")
    }
    if(Currentmarks.value.length < 0){
        messages.push('Marks is not valid')
    }
    

    localStorage.setItem('HInstitute', HInstitute.value);
    localStorage.setItem('HBoard', HBoard.value);
    localStorage.setItem('Hmarks', Hmarks.value);
    localStorage.setItem('SInstitute', SInstitute.value);
    localStorage.setItem('SBoard', SBoard.value);
    localStorage.setItem('Smarks', Smarks.value);
    localStorage.setItem('CurrentInstitute', CurrentInstitute.value);
    localStorage.setItem('CurrentBoard', CurrentBoard.value);
    localStorage.setItem('Currentmarks', Currentmarks.value);
    

    if(messages.length > 0) {
        e.preventDefault()
        errorElement2.innerText = messages.join(', ')
    }


})