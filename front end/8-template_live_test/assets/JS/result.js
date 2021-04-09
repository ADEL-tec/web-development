const note = localStorage.getItem("note"); 
const description = document.querySelector('#description');
const resultBar = document.querySelector("#result-bar");
const displayNote = document.querySelector("#display-note span");
const continueBtn = document.querySelector('#continue');

displayInfo();

continueBtn.addEventListener('click', ()=>{
  window.location.href = 'starting_text.html';
    window.close();
})

function displayInfo(){
    moveBar();
    displayNote.textContent = note;

    if(note >= 5){
        description.style.color = 'green';
        resultBar.style.backgroundColor = 'green';
        description.textContent = 'Congratulations, You have pass this test';
    }else{
        description.textContent = 'You have failed this test. You may retake the test when eligible.';
        description.style.color = 'red';
        resultBar.style.backgroundColor = 'red';
    }
}

function moveBar() {
      let width = 0;
      let id = setInterval(frame, 10);
      function frame() {
        if (width >= 100 || width === note*10) {
          clearInterval(id);
        } else {
          width += 10;
          resultBar.style.width = width + "%";
        }
      }
}


/* here is where to store the NOTE in your DATABASE */