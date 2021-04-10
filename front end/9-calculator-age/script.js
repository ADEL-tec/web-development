const today = document.querySelector('.today');
const birthDay = document.querySelector('#birth-day');
const calculate = document.querySelector('.calculate');
const displayResult = document.querySelector('.display-result');

const now = new Date();
let age;
let nextBirthDay;

// Display the current day
today.textContent = dateFns.format(now, 'D MMMM YYYY');


let executOnce = 0;

birthDay.addEventListener('change', enableButton);

function enableButton(e){
    const birth = e.target.value;
    let nextBirth;

    if(dateFns.setYear(birth, now.getFullYear()).getTime() > now.getTime()){
        console.log('normal');
        nextBirth = dateFns.setYear(birth, now.getFullYear());
        console.log('if 1', nextBirth);
    }else {
        console.log('anormal');
        nextBirth = dateFns.setYear(birth, now.getFullYear() + 1);
        console.log('if 2', nextBirth);
    }

    age = dateFns.differenceInCalendarYears(
        new Date(now),
        new Date(birth)
    );

    nextBirthDay = dateFns.differenceInCalendarDays(
        new Date(nextBirth),
        new Date(now)
    );

    console.log('Age : ', age);
    console.log('next Birth Day : ', nextBirthDay);

      if(birth !== '' && executOnce++ === 0 && age >= 0){
        calculate.classList.remove('disabled');
    }
}

calculate.addEventListener('click', () =>{
    let htmlTemp = `
        <div class="text-center display-6">you are 
            <span class="h1">${age}</span> 
            years old
        </div>
        <div class="display-6">you have 
            <span class="h1">${nextBirthDay}</span> 
            days left on your birthday
        </div>
    `;

    displayResult.innerHTML = htmlTemp;
    displayResult.style.display = 'block'
    console.dir(displayResult);
})

