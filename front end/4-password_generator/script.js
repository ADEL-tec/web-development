/* --- Selection --- */
const selectPassword = document.querySelector('#password');
const selectLangth = document.querySelector('#length');
const selectUppercase = document.querySelector('#uppercase');
const selectLowercase = document.querySelector('#lowercase');
const selectNumbers = document.querySelector('#numbers');
const selectSymbols = document.querySelector('#symbols');
const generatePassword = document.querySelector('button');
const copyBtn = document.querySelector('.copie-icon');

/* --- Default Values --- */
let length = 7;

/* --- EVENTS ---*/
generatePassword.addEventListener('click', () => reset());

selectLangth.addEventListener('input', () => length = selectLangth.value);

copyBtn.addEventListener('click', () => copyPassword());


/* --- Functions --- */

function reset(){
    selectPassword.innerText = fillPassword();
    copyBtn.style.backgroundColor = "#3d344d";
}

function copyPassword() {
    /* Select the text field */
    selectPassword.select();
    /* For mobile devices */
    selectPassword.setSelectionRange(0, 99999);
    /* Copy the text inside the text field */
    document.execCommand("copy");
    alert("Password is being copied in clipboard.");
    copyBtn.style.backgroundColor = "rgb(170 116 116)";
  }

function fillPassword(){
    let str = optionSelected();
    let password = str.obligate;

    for(let i = 0; i < length-(str.obligate.length); i++){
        password += str.totalString[Math.floor(Math.random() * str.totalString.length)];
    }
    console.log('3', password);

    let password2 = '';

    for(let i = 0; i < length; i++){
        let j = Math.floor(Math.random() * password.length);
        password2 += password[j];
        console.log(i, '4', password[j]);
        password = password.replace(password[j],'');
        console.log(i, '5', password2, password);
    }
    return password2;
}

function optionSelected(){
    let str = {totalString: '',obligate: ''};
    let obligateStr = '';

    console.log('testLength' , length);
    if(length < 5 || length > 20){
        selectLangth.value = 7;
        length = 7;
    }
    
    /* if Include Uppercase letters is checked */
    if(selectUppercase.checked){
        obligateStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        str.obligate += obligateStr[Math.floor(Math.random() * obligateStr.length)];
        str.totalString += obligateStr;
    }

    /* if Include Lowercase letters is checked */
    if(selectLowercase.checked){
        obligateStr = "abcdefghijklmnopqrstuvwxyz";
        str.obligate += obligateStr[Math.floor(Math.random() * obligateStr.length)];
        str.totalString += obligateStr;
    }

    /* if Include Numbers is checked */
    if(selectNumbers.checked){
        obligateStr = "0123456789";
        str.obligate += obligateStr[Math.floor(Math.random() * obligateStr.length)];
        str.totalString += obligateStr;
    }

    /* if Include Symbils is checked */
    if(selectSymbols.checked){
        obligateStr = "@=/+*^{}[]-&!()#<>,;$€%?";
        str.obligate += obligateStr[Math.floor(Math.random() * obligateStr.length)];
        str.totalString += obligateStr;
    }
    console.log('str1', str);
    return str;
}
