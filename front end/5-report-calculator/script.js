const username = document.querySelector('#username');
const moduleCustom = document.querySelector(".module-custom0");
const container = document.querySelector('.container');
const popup = document.querySelector('.popup-wrapper');
const closePopup = document.querySelector('.popup-close');
const performCalculation = document.querySelector('#perform-calculation');
const addModule = document.querySelector('#add-module');
let removeModule = document.querySelectorAll('.fa-trash-alt');

let numberModule = 1;

/*
calcule methode : 
((14*0.6)+(((15+12)/2)*0.4))*1

*/
performCalculation.addEventListener('click', calculate);

addModule.addEventListener('click', addModuleElement);

closePopup.addEventListener('click', ()=> popup.style.display = 'none');

function calculate(){
    let result = {note: 0, conf: 0};
    const Uname = username.value;
    const contentPopup = document.querySelector('.popup-content');
    const displayResult = document.querySelector('#display-result');
    const displayTitle = document.querySelector('#display-title');
    
    for(let i = 0; i < numberModule; i++){
        const module = document.querySelector('#module'+i);
        const exam = document.querySelector('#exam'+i);
        const td = document.querySelector('#td'+i);
        const tp = document.querySelector('#tp'+i);
        const conf = document.querySelector('#conf'+i);
        console.log(module, exam, td, tp, conf);
        let moduleObj = {module: module.value, exam: exam.value, td: td.value, tp: tp.value, conf: conf.value};
        
        if(moduleObj.module !== '' && moduleObj.exam !== '' && moduleObj.conf !== ''){
            if(moduleObj.td === '' && moduleObj.tp === ''){
                result.note += parseFloat(moduleObj.exam) * parseInt(moduleObj.conf);
                result.conf += parseInt(moduleObj.conf);
                console.log('just exam: ',result);
            }else if(moduleObj.td === '' && moduleObj.tp !== ''){
                moduleObj.td = 0;
                result.note += ((parseFloat(moduleObj.exam) * 0.6) + (parseFloat(moduleObj.tp) * 0.4)) * parseInt(moduleObj.conf);
                result.conf += parseInt(moduleObj.conf);
                    console.log('pas de td: ', result);
            }else if(moduleObj.tp === '' && moduleObj.td !== ''){
                moduleObj.tp = 0;
                result.note += ((parseFloat(moduleObj.exam) * 0.6) + (parseFloat(moduleObj.td) * 0.4)) * parseInt(moduleObj.conf);
                result.conf += parseInt(moduleObj.conf);
                console.log('pas de tp: ', result);
            }else{
                result.note += ((parseFloat(moduleObj.exam) * 0.6) + (((parseFloat(moduleObj.td) + parseFloat(moduleObj.tp))/2)* 0.4)) * parseInt(moduleObj.conf);
                result.conf += parseInt(moduleObj.conf);
                console.log('tp + td: ', result);
                console.log("==", (parseFloat(moduleObj.exam) * 0.6),' + ' , (((parseFloat(moduleObj.td) + parseFloat(moduleObj.tp))/2)* 0.4));
            }
        }else{
            popup.style.display = 'block';
            contentPopup.innerHTML = `<p>OPPS FILL AT LEAST ONE MODULE!</p>`
        }
    }
    if(result.conf !== 0){
        popup.style.display = 'block';
        result = result.note/result.conf;
        console.log('hna',displayResult);
        let decision;
        if(result >= 10){
            decision = 'Admits';
            // background-color DARCK
            displayResult.style.backgroundColor = '#0c2b31';
            console.log('show popup darck');
        }else{
            decision = 'Ajourned'
            // background-color RED
            displayResult.style.backgroundColor = '#ff000080';
            console.log('show popup red');
        }
        displayTitle.textContent = `${Uname} : ${decision}`;
        displayResult.textContent = `${result}`;
    }
}

function resetValues(){
    for(let i = 0; i < numberModule; i++){
        const module_toNULL = document.querySelector('#module'+i);
        const exam_toNULL = document.querySelector('#exam'+i);
        const td_toNULL = document.querySelector('#td'+i);
        const tp_toNULL = document.querySelector('#tp'+i);
        const conf_toNULL = document.querySelector('#conf'+i);

        module_toNULL.value = '';
        exam_toNULL.value = '';
        td_toNULL.value = ''; 
        tp_toNULL.value = '';
        conf_toNULL.value = '';
    }
}

function addModuleElement(){
    resetValues();
    let htmlSectionModule = template(numberModule);
    container.innerHTML += htmlSectionModule;
    
    let module = document.querySelector('.module-custom'+numberModule);
    module.addEventListener('animationend', ()=> module.classList.remove('fade-out'));
    

    removeModule = document.querySelectorAll('.fa-trash-alt');
    removeModule.forEach((remove, index)=>{
        
        remove.addEventListener('mouseenter', ()=> remove.classList.add('fa-lg'));
        remove.addEventListener('mouseout', ()=> remove.classList.remove('fa-lg'));
        remove.addEventListener('click', ()=>{
            
            module = document.querySelector('.module-custom'+index);
            //void module.offsetWidth;
            module.classList.add('fade-in');
            module.addEventListener('animationend', ()=> module.style.display = 'none');
        });
    });
    numberModule++;
}

function template(n){
    return `<section class="module-custom${n} fade-out">
    <i class="fas fa-trash-alt i-${n}"></i>
    <div>
        <label for="module${n}" class="block-line">MODULE:</label>
        <input type="text" id="module${n}">
    </div>
    <div>
        <label for="exam${n}">EXAM:</label>
        <input type="number" id="exam${n}" class="mini" min="0" max="20">
    </div> 
    <div>
        <label for="td${n}">TD:</label>
        <input type="number" id="td${n}" class="mini" min="0" max="20">
    </div>
    <div>
        <label for="tp${n}">TP:</label>
        <input type="number" id="tp${n}" class="mini" min="0" max="20">
    </div>
    <div>
        <label for="conf${n}">CONF:</label>
        <input type="number" id="conf${n}" class="mini" min="0" max="20">
    </div>
    </section>`;
}