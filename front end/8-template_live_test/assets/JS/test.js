/********************************************| SELECTIONS |*************************************************/
const bubbleContainer = document.querySelector('.num-quetion');
const scrollLeft = document.querySelector('.middle-content > svg:nth-child(3)');
const scrollRight = document.querySelector('.middle-content > svg:nth-child(2)');
const buttonsContainer = document.querySelector('.num-quetion');
let buttons = null;
const textQuestion = document.querySelector('.bottom-content > p');
const listOptions = document.querySelector('.bottom-content > form');
const displayTime = document.querySelector('.remaining-time');
const questionRest = document.querySelector('.middle-content p');
/* select bottom  Button*/
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
/* selection option for show popups */
// when shoold you show the Instractions 
const readInstruction = document.querySelector('.read-instruction');
const closeReadInstruction = document.querySelector('.read-instruction-popup-close');
const popupReadInstruction = document.querySelector('.read-instruction-popup');
// when end the test
const endTest = document.querySelector('.end-test');
const closeEndTest = document.querySelector('.end-test-popup-close');
const popupEndTest = document.querySelector('.end-test-popup');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');
// when broke one of rules test
const brokeRulesTest = document.querySelector('.broke-rules');
const popupBrokeRulesTest = document.querySelector('.broke-rules-popup');
const okBrokeRules = document.querySelector('#ok-broke-rules');

/********************************************| Default Values |*************************************************/
/* you can change the number of questions (but it must be the length of the questions Object) */
const numberOfQuestions = 40; 
let previousButton = null;
let nextButton = null;
let currentQuestion = null;
let ListQuestion = null;
let ListAnswer = null;
let checkboxes = null;
let points = [];

/********************************************| EVENTS |**********************************************/

/* when load page TEST.html */
window.addEventListener('DOMContentLoaded', init);

/*************************************************POPUP*******************************************/
/* event Show and hide popup "RED INSTRUCTION" */
readInstruction.addEventListener('click', () => popupReadInstruction.style.display="block");
closeReadInstruction.addEventListener('click', () => popupReadInstruction.style.display="none");

/* event Show and hide popup "END TEST" */
endTest.addEventListener('click', () => popupEndTest.style.display="block");
closeEndTest.addEventListener('click', () => popupEndTest.style.display="none");
noBtn.addEventListener('click', () => popupEndTest.style.display="none");
yesBtn.addEventListener('click', result);

/* event Show and hide popup "BROKE THE RULES" */
okBrokeRules.addEventListener('click', result);
/************************************************************************************************/

/* event Next and Previous buttons */
nextBtn.addEventListener('click', eventNext);
previousBtn.addEventListener('click', eventPrevious);

/* event buttons for scrolling the number of question */
scrollLeft.addEventListener('click', () => bubbleContainer.scrollLeft  -= 98.99);
scrollRight.addEventListener('click', () => bubbleContainer.scrollLeft += 98.99);


/*****************************************| FUNCTIONS |***************************************************/

function init(){
    // if click "right-mouse" button
    window.oncontextmenu = function () {
        popupBrokeRulesTest.style.display="block";
        return false;
    }
    /* when user focus on other window */
    window.addEventListener("blur", () => popupBrokeRulesTest.style.display="block");
    questionRest.textContent = "Question 1 out of 40";
    changeTime();
    ListQuestion = randomQuestion();
    console.log(ListQuestion);
    createBubbleBtn();
    whichButton(1,buttons[0]);
    nextButton = buttons[1];
    previousButton = buttons[0];
    buttons.forEach((button, index) =>{
        button.addEventListener('click', () => {
            whichButton(index + 1, button);
            nextButton = buttons[index + 1];
            if(index === 0)
                previousButton = buttons[0];
            else
                previousButton = buttons[index - 1];
        });
    });
}

function eventNext(){
    /* if we in the last question an click on th "END TEST" button */
    if(nextBtn.textContent === 'End Test'){
        popupEndTest.style.display="block";
    }
    /* click on "NEXT" button */
    const index = parseInt(currentQuestion.innerText) + 1;
    if(index >= numberOfQuestions){ /* if we are in last question */
        nextButton = buttons[numberOfQuestions - 1];
        whichButton(numberOfQuestions, nextButton);
    }else{
        whichButton(index, nextButton);
        nextButton = buttons[index];
    }
    /* Assignment of previousButton */
    previousButton = buttons[index - 2];
}
function eventPrevious(){
    const index = parseInt(currentQuestion.innerText) - 1;
    if(index <= 0){ /* if we are in first question */
        whichButton(1, previousButton);
        previousButton = buttons[0];
    }else{
        whichButton(index, previousButton);
        if(index === 1)
            previousButton = buttons[0];
        else
            previousButton = buttons[index - 2];
    }
    /* Assignment of nextButton */
    nextButton = buttons[index];
}

function whichButton(i, btn){
    customBtn(btn);
    funcTextQuestion(i - 1);
}

function customBtn(curBtn){
    let i = 0;
    if (currentQuestion !== curBtn){
        /* Select the list of choices */
        ListAnswer = document.querySelectorAll('input');
        /* Debut */
        if(currentQuestion === null){
            curBtn.style.backgroundColor = "#rgb(184, 231, 243)";
        }
        /* if button selected */
        else{
            if(currentQuestion.style.backgroundColor === "rgb(184, 231, 243)")
                currentQuestion.style.backgroundColor = "#fff";
            i =  parseInt(currentQuestion.innerText);
            saveChecks(i);
        }
        currentQuestion = curBtn;
        currentQuestion.style.backgroundColor = "rgb(184, 231, 243)";
        /* Change content of title "Question 1 out of ${numberOfQuestions}" */
        questionRest.textContent = `Question ${currentQuestion.innerText} out of ${numberOfQuestions}`;
    }

    /* change text of button "Next" to "End Test" if we are in the last question */
    if(parseInt(curBtn.innerText) === numberOfQuestions)
        nextBtn.textContent = 'End Test';
    else
        if(nextBtn.textContent === 'End Test')
            nextBtn.textContent = 'Next';
    
    /* Disable the button "Previous" is we are in the first question */
    if(parseInt(curBtn.innerText) === 1)
        previousBtn.disabled = true;
    else
        if(previousBtn.disabled = true)
            previousBtn.disabled = false;   
}

function funcTextQuestion(i){
    listOptions.innerHTML = '';
    let q_n = ListQuestion[i];
    textQuestion.textContent = q_n.q;
    if(!q_n.isMultipleCoice)
        creatTags(q_n, 'radio');
    else
        creatTags(q_n, 'checkbox');
}

function creatTags(q_n, str){
    q_n.choices.forEach(choice =>{
        const answer = choice[0].answer;
        const divTag = document.createElement('div');
        const inputTag = document.createElement('input');
        const labemTag = document.createElement('label');
        inputTag.setAttribute('type', str);
        if(str === 'radio'){
            inputTag.setAttribute('style', 'border-radius: 50%');
            inputTag.setAttribute('name', 'answer');
            inputTag.setAttribute('value', ''+q_n.id);
        }else{
            inputTag.setAttribute('style', 'border-radius: 2%');
            inputTag.setAttribute('name', answer);
        }
        inputTag.setAttribute('id', answer);
        labemTag.setAttribute('for', answer);
        labemTag.innerHTML = answer;
        divTag.append(inputTag, labemTag);
        listOptions.appendChild(divTag);
    });
    loadChecks();
}

function saveChecks(i){
    /* Set the color style to Red color #if move and didn't select answers */
    currentQuestion.style.backgroundColor = "rgb(236 27 27)";
    currentQuestion.style.color = "#fff";
    currentQuestion.style.border = "rgb(236 27 27)";
    let array = [];
    for (var j = 0, length = ListAnswer.length; j < length; j++) {
        /* if current question is multiple ? */ 
         if(ListQuestion[i - 1].isMultipleCoice){
            if(ListAnswer[j].checked){
                array[j] = {isChecked: 1, index: j};
                /* save the position of check list */
                points[i-1] = {radioORcheckbox: 'checkbox',radio : null, checkboxe: array};
                /* make darck background (is checked) */
                currentQuestion.style.backgroundColor = "rgb(28, 143, 172)";
                currentQuestion.style.color = "#fff";
            }
            /* if current answer didn't selected */
            else{ 
                array[j] = {isChecked: 0, index: j};
                points[i-1] = {radioORcheckbox: 'checkbox',radio: null, checkboxe: array};
            }
        }
        else{
            if (ListAnswer[j].checked){
                points[i-1] = {radioORcheckbox: 'radio', radio: {isWon: 1, indexAnswer: j}, checkboxe: null};
                /* make darck background (is checked) */
                currentQuestion.style.backgroundColor = "rgb(28, 143, 172)";
                currentQuestion.style.color = "#fff";
                break; /* because in radio list can be select just one option */
            }
            points[i-1] = {radioORcheckbox: 'radio', radio: {isWon: 0, indexAnswer: 1}, checkboxe: null};
        }
    }
}

function loadChecks(){
    /* Current Button (Question) */
    let i =  parseInt(currentQuestion.innerText) - 1;
    /* select the List of Answers */
    ListAnswer = document.querySelectorAll('input');
     /* list radio checked */
    if(points[i]?.radioORcheckbox === 'checkbox'){
        for(let j = 0; j < ListAnswer.length; j++){
            if(points[i]?.checkboxe[j]?.isChecked === 1){
                ListAnswer[j].checked = true;
            }
        }
    }
     /* list radio checked */
    else{ 
        if(points[i]?.radio?.isWon === 1){
            ListAnswer[points[i]?.radio?.indexAnswer].checked = true;
        }
    }
}

function createBubbleBtn(){
    /* we create buttons then select it */
    console.log(buttonsContainer);
    for(let i = 1; i <= numberOfQuestions; i++){
        const buttonTag = document.createElement('button');
        buttonTag.innerText = i;
        buttonsContainer.appendChild(buttonTag);
    }
    buttons = document.querySelectorAll('.num-quetion button');
}

function changeTime(){
    let timeInterval = setInterval(showTime, 1000);
    let seconds = numberOfQuestions * 60;  /* 40 Minutes = 2400 Seconds */
    function showTime() {
        //update the time as hours, minutes, and seconds 00:00:00
        seconds--;
        let hours = Math.floor(seconds / 3600);
        let mins = Math.floor(seconds / 60) - (hours * 60);
        let secs = Math.floor(seconds % 60);
        let output = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        displayTime.textContent = output;
        if(output === '00:00:00'){
            clearInterval(timeInterval);
        }
    }
}

function result(){
    saveChecks(parseInt(currentQuestion.innerText));
    localStorage.setItem("note", calculatPoint()); 
    window.location.href = 'result.html';
}

function calculatPoint(){
    let correct = 0;
    points.forEach((point, index)=>{
        /* calcilat points of single choices questions */
        if(points[index]?.radioORcheckbox === 'radio'){
            if(points[index].radio.isWon){      /* if the user choose an option ? */
                if(ListQuestion[index].choices[points[index].radio.indexAnswer][0].isCorrect){  /* if this option is correct ? */
                    correct++;
                }
            }
        }
        /* calcilat points of multiple choices questions */
        else{
            let test = 0;
            point.checkboxe.forEach((item)=>{
                if(item.isChecked == ListQuestion[index].choices[item.index][0].isCorrect){
                    test++;
                }
            });
            if(test == point.checkboxe.length){ /* if the user check all the correct options ? */
                correct++;
            }
        }
    });
    return correct;
}
