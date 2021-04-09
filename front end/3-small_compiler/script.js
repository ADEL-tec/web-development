let input = document.querySelector("#content");
let btnReset = document.querySelector("#reset");
let btnLexical = document.querySelector("#lexical");
let btnSyntax = document.querySelector("#syntax");
//selection LEXICAL
let primitive = document.querySelector("#primitive");
let structured = document.querySelector("#structured");
let identifire = document.querySelector("#identifire");
let operation = document.querySelector("#operation");
let reserved = document.querySelector("#reserved");
let outputsLexyc = document.querySelector(".outputsLexyxc");
let outputsSyntax = document.getElementById("outputsSyntax");

let inputVal = "";

btnReset.addEventListener("click", funcReset);

btnLexical.addEventListener("click", () =>{
    lexicalAnalyse(inputVal);
    outputsLexyc.className = "showLexic";
});

btnSyntax.addEventListener("click", () =>{
    SyntaxAnalyse(inputVal);
    outputsSyntax.className = "showSyntax";
});

input.addEventListener("input", () => inputVal = input.value);

function funcReset(){
    input.value = inputVal = "";
    outputsLexyc.className = "outputsLexyxc";
    outputsSyntax.className = "outputsSyntax";
    outputsSyntax.innerHTML = "";
    primitive.innerHTML = '<strong>Primitive:</strong>';
    structured.innerHTML ='<strong>Structured:</strong>';
    identifire.innerHTML = '<strong>identidier:</strong>';
    operation.innerHTML = '<strong>Operations:</strong>';
    reserved.innerHTML = '<strong>Reserved:</strong>';
}

function lexicalAnalyse(inputVal2){
    if(inputVal2){
        //Primitive data type
        inputVal2 = compilerLexical(regExMode(1), primitive, inputVal2);
         //structured data type
        inputVal2 = compilerLexical(regExMode(2), structured, inputVal2);
         //Reserved
         inputVal2 = compilerLexical(regExMode(5), reserved, inputVal2);
         //identifiers data type
        inputVal2 = compilerLexical(regExMode(3), identifire, inputVal2);
        //Operator 
        compilerLexical(regExMode(4), operation, inputVal2);
       
    }
}
function SyntaxAnalyse(inputVal2){
    let str = '';
    let test1=  false, test2 = false, test3 = false;
    // declaration
    str = `(^${regExMode(1).source}|${regExMode(2).source}) ${regExMode(3).source};$`;
    test1 = copilerSyntax(str, 'Declaration', inputVal2);
    // definition
    str = `(^${regExMode(1).source}|${regExMode(2).source}) ${regExMode(3).source}\\s?=\\s?.+;$`;
    test2 = copilerSyntax(str, 'Definition', inputVal2);
    //condition
    str = `^if(\\s*)?\\((\\s*)?${regExMode(3).source}?(\\s*)?((\\|\\|)|(&&)|(!)|(==)|(===)|(<)|(<=)|(>)|(>=))(\\s*)?(\\s*)?${regExMode(3).source}?(\\s*)?\\)(\\s*)?(\\n*)?\{(\\n*)?(\\s*)?(.+)?(\\n*)?\\}((\\n*)?else(\\s*)?(\\n*)?\{(\\n*)?${regExMode(3).source}?(\\s*)?(\\n*)?\\})?$`;
    test3 = copilerSyntax(str, 'Condition', inputVal2);
    //ERROR
    if(!(test1 || test2 || test3)){
        console.log("ERROR");
        let content = document.createElement('p');
        outputsSyntax.style.setProperty('border', "2px solid #eb2d2d");
        outputsSyntax.style.setProperty('color', "#eb2d2d");
        outputsSyntax.style.setProperty('text-align', "left");
        content.innerText = `Our Compiler does reconigsed this \ncompiler expected :`;
        outputsSyntax.appendChild(content);
        content = document.createElement('li');
        content.innerText = `- <data type> <identifier><;>`;
        outputsSyntax.appendChild(content);
        content = document.createElement('li');
        content.innerText = `- <data type> <identifier> <=> <value>`;
        outputsSyntax.appendChild(content);
        content = document.createElement('li');
        content.innerText = `- <if><(condition)><{....}><else><{.....}>`;
        outputsSyntax.appendChild(content);
    }else{
        outputsSyntax.style.setProperty('border', "2px solid #b3dbf6");
        outputsSyntax.style.setProperty('color', "blanchedalmond");
        outputsSyntax.style.setProperty('text-align', "center");
    }
}

function compilerLexical(regex, lexical, inpt){
    let matchPrim = regex.exec(inpt);
    let str = inpt;
    while(matchPrim){
        const firstData = matchPrim[0];
        console.log(firstData);
        if(!lexical.innerText.includes(firstData)){
            const message = document.createElement('li');
            message.innerText = firstData;
            lexical.appendChild(message);
        }
        matchPrim = regex.exec(inpt);
        str = str.replaceAll(firstData, ' ');
    }
    return str;
}
function copilerSyntax(regexStr, message, inpt) {
    let regex = RegExp(regexStr);
    let content = document.createElement('p');
    if(regex.test(inpt) && outputsSyntax.innerText !== inpt){ 
        outputsSyntax.innerHTML = '';
        content.innerText = `${inpt} : is a correct ${message} syntax`;
        outputsSyntax.appendChild(content);
        return true;
    }
    return false;
}

function regExMode(n){
    switch(n){
        case 1: return /(integer)|(float)|(chars)|(boolean)|(long)/g;
        case 2: return /(String)|(Array)|(Symbol)|(Object)|(Heap)|(Tree)/g;
        case 3: return /[a-zA-Z_](\w+)?/g;
        case 4: return /(\|\|)|(&&)|(!)|(==)|(===)|(<)|(<=)|(>)|(>=)|(=)|(\+)|(-)|(\*)|(\/)|(%)|(\*\*)/g;
        case 5: return /(if)|(else)|(break)|(switch)|(skip)|(and)|(or)|(in)|(next)|(for)|(while)|(do)|(until)|(default)|(goto)/g
    }
}