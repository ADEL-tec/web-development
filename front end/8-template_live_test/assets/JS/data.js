

/* All Questions and Answers and her functions*/
/*  you can pick your questions here */

let questions = {
    q1: {
        id: 1,
        q: "Who is making the Web standards?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Mozilla",
                isCorrect: false
            },{
                answer: "Microsoft",
                isCorrect: false
            },{
                answer: "The World Wide Web Consortium",
                isCorrect: true
            }]
    },
    q2: {
        id: 2,
        q: "What does HTML stand for?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Hyper Text Markup Language",
                isCorrect: true
            },{
                answer: "Home Tool Markup Language",
                isCorrect: false
            },{
                answer: "Hyperlinks and Text Markup Language",
                isCorrect: false
            }]
    },
    q3: {
        id: 3,
        q: "How many tags are in a regular element?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "2",
                isCorrect: true
            },{
                answer: "1",
                isCorrect: false
            },{
                answer: "3",
                isCorrect: false
            }]
    },
    q4: {
        id: 4,
        q: "Choose the correct HTML tag for the largest heading",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Head",
                isCorrect: true
            },{
                answer: "H1",
                isCorrect: true
            },{
                answer: "H6",
                isCorrect: false
            },{
                answer: "Heading",
                isCorrect: false
            }]
    },
    q5: {
        id: 5,
        q: "What is the correct HTML tag for inserting a line break?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "break /",
                isCorrect: false
            },{
                answer: "br /br",
                isCorrect: false
            },{
                answer: "lb /",
                isCorrect: false
            },{
                answer: "br /",
                isCorrect: false
            },{
                answer: "br/",
                isCorrect: true
            }]
    },
    q6: {
        id: 6,
        q: "Choose the correct HTML tag to make a text bold:",
        isMultipleCoice: false,
        choices: [
            {
                answer: "bold",
                isCorrect: false
            },{
                answer: "b",
                isCorrect: true
            },{
                answer: "bb",
                isCorrect: false
            }]
    },
    q7: {
        id: 7,
        q: "Choose the correct HTML tag to make a text italic:",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Italic",
                isCorrect: true
            },{
                answer: "I",
                isCorrect: false
            },{
                answer: "It",
                isCorrect: false
            }]
    },
    q8: {
        id: 8,
        q: "What is the correct HTML for creating a hyperlink?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "A url=\"http://www.w3schools.com\">W3Schools.com",
                isCorrect: false
            },{
                answer: "A href=\"http://www.w3schools.com\">W3Schools",
                isCorrect: true
            },{
                answer: "A>http://www.w3schools.com",
                isCorrect: false
            },{
                answer: "A name=\"http://www.w3schools.com\">W3Schools.com",
                isCorrect: false
            }]
    },
    q9: {
        id: 9,
        q: "How can you create an e-mail link?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Mail href=\"xxx@yyy.com\"",
                isCorrect: false
            },{
                answer: "Mail>xxx@yyy.com/mail",
                isCorrect: false
            },{
                answer: "A href=\"xxx@yyy.com\"",
                isCorrect: false
            },{
                answer: "A href=\"mailto:xxx@yyy.com\"",
                isCorrect: true
            }]
    },
    q10: {
        id: 10,
        q: "How can you open a link in a new browser window?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "A href=\"url\" target=\"_blank\"",
                isCorrect: true
            },{
                answer: "A href=\"url\" new",
                isCorrect: false
            },{
                answer: "A href=\"url\" target=\"new\"",
                isCorrect: false
            },{
                answer: "A href=\"url\" target=_window\"",
                isCorrect: false
            }]
    },
    q11: {
        id: 11,
        q: "How can you make a list that lists the items with numbers?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Ol",
                isCorrect: true
            },{
                answer: "Dl",
                isCorrect: false
            },{
                answer: "Ul",
                isCorrect: false
            },{
                answer: "List",
                isCorrect: false
            }]
    },
    q12: {
        id: 12,
        q: "What is the correct HTML for inserting an image?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Img alt=\"MyImage\" image.gif /img",
                isCorrect: false
            },{
                answer: "Image src=\"image.gif\" alt=\"MyImage\"",
                isCorrect: false
            },{
                answer: "Img src=\"image.gif\" alt=\"MyImage\"",
                isCorrect: true
            },{
                answer: "Img href=\"image.gif\" alt=\"MyImage\"",
                isCorrect: false
            }]
    },
    q13: {
        id: 13,
        q: "How can you make a list that lists the items without bullets or numbers?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Ol",
                isCorrect: false
            },{
                answer: "Ul",
                isCorrect: false
            },{
                answer: "DL",
                isCorrect: false
            },{
                answer: "Lists have to have numbers or bullets",
                isCorrect: true
            }]
    },
    q14: {
        id: 14,
        q: "What is the correct name of homepage on the WWW?",
        isMultipleCoice: true,
        choices: [
            {
                answer: "Home.html",
                isCorrect: true
            },{
                answer: "Index.html",
                isCorrect: true
            },{
                answer: "Anything you want it to be .html",
                isCorrect: true
            },{
                answer: "The name of your website.html",
                isCorrect: true
            }]
    },
    q15: {
        id: 15,
        q: "The is doctype mandatory?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "True",
                isCorrect: true
            },{
                answer: "False",
                isCorrect: false
            }]
    },
    q16: {
        id: 16,
        q: "What does CSS stand fors?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Creative Style Sheets",
                isCorrect: false
            },{
                answer: "Colorful Style Sheets",
                isCorrect: false
            },{
                answer: "Computer Style Sheets",
                isCorrect: false
            },{
                answer: "Cascading Style Sheets",
                isCorrect: true
            }]
    },
    q17: {
        id: 17,
        q: "What is the correct HTML for referring to an external style sheet?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Stylesheetmystyle.css/stylesheet /",
                isCorrect: false
            },{
                answer: "Link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"",
                isCorrect: true
            },{
                answer: "Style src=\"mystyle.css\" /",
                isCorrect: false
            }]
    },
    q18: {
        id: 18,
        q: "Which is the correct CSS syntax?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Body:color=black",
                isCorrect: false
            },{
                answer: "{body;color:black}",
                isCorrect: false
            },{
                answer: "{body:color=black(body}",
                isCorrect: false
            },{
                answer: "Body {color: black}",
                isCorrect: true
            }]
    },
    q19: {
        id: 19,
        q: "How do you insert a comment in a CSS file?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "' this is a comment '",
                isCorrect: false
            },{
                answer: "/* this is a comment */",
                isCorrect: true
            },{
                answer: "// this is a comment",
                isCorrect: false
            },{
                answer: "// this is a comment //",
                isCorrect: false
            }]
    },
    q20: {
        id: 20,
        q: "Which property is used to change the background color?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Bgcolor:",
                isCorrect: false
            },{
                answer: "Background-color:",
                isCorrect: true
            },{
                answer: "Color",
                isCorrect: false
            }]
    },
    q21: {
        id: 21,
        q: "How do you add a background color for all elements?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "H1 {background-color:#FFFFFF}",
                isCorrect: true
            },{
                answer: "H1.all {background-color:#FFFFFF}",
                isCorrect: false
            },{
                answer: "All.h1 {background-color:#FFFFFF}",
                isCorrect: false
            }]
    },
    q22: {
        id: 22,
        q: "How do you change the text color of an element?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Text-color=",
                isCorrect: false
            },{
                answer: "Color:",
                isCorrect: true
            },{
                answer: "Text-color:",
                isCorrect: false
            },{
                answer: "Fgcolor:",
                isCorrect: false
            }]
    },
    q23: {
        id: 23,
        q: "Which CSS property controls the text size?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Font-style",
                isCorrect: false
            },{
                answer: "Text-style",
                isCorrect: false
            },{
                answer: "text-size",
                isCorrect: false
            },{
                answer: "Font-size",
                isCorrect: true
            }]
    },
    q24: {
        id: 24,
        q: "What is the correct CSS syntax for making all the elements bold?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "P {font-weight:bold}",
                isCorrect: true
            },{
                answer: "P style=\"text-size:bold\"",
                isCorrect: false
            },{
                answer: "P {text-size:bold}",
                isCorrect: false
            },{
                answer: "P style=\"font-size:bold\">",
                isCorrect: false
            }]
    },
    q25: {
        id: 25,
        q: "How do you display hyperlinks without an underline?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "A {text-decoration:none}",
                isCorrect: true
            },{
                answer: "A {text-decoration:no underline}",
                isCorrect: false
            },{
                answer: "A {decoration:no underline}",
                isCorrect: false
            },{
                answer: "A {underline:none}",
                isCorrect: false
            }]
    },
    q26: {
        id: 26,
        q: "JavaScript File Has An Extension Of:",
        isMultipleCoice: false,
        choices: [
            {
                answer: ".java",
                isCorrect: false
            },{
                answer: ".js",
                isCorrect: true
            },{
                answer: ".javascript",
                isCorrect: false
            },{
                answer: ".xml",
                isCorrect: false
            }]
    },
    q27: {
        id: 27,
        q: "The Tag ____ is used To Give Heading To The Table.",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Head",
                isCorrect: false
            },{
                answer: "Td",
                isCorrect: false
            },{
                answer: "Th",
                isCorrect: true
            },{
                answer: "Caption",
                isCorrect: false
            }]
    },
    q28: {
        id: 28,
        q: "Function ____ is Used To Parse a String To Int",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Integer.Parse",
                isCorrect: false
            },{
                answer: "Int.Parse",
                isCorrect: false
            },{
                answer: "Parse.Int",
                isCorrect: false
            },{
                answer: "None",
                isCorrect: true
            }]
    },
    q29: {
        id: 29,
        q: "IsNaN() Evalutes And Argument To Determine if Given Value:",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Is Not a Null",
                isCorrect: false
            },{
                answer: "Is Not a Number",
                isCorrect: true
            },{
                answer: "Is Not a New Object",
                isCorrect: false
            },{
                answer: "None Of The Above",
                isCorrect: false
            }]
    },
    q30: {
        id: 30,
        q: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Alert()",
                isCorrect: true
            },{
                answer: "Prompt()",
                isCorrect: false
            },{
                answer: "Confirm()",
                isCorrect: false
            },{
                answer: "Msg()",
                isCorrect: false
            }]
    },
    q31: {
        id: 31,
        q: "Event is Used To Check An Empty Text Box?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Onclick()",
                isCorrect: false
            },{
                answer: "OnFocus()",
                isCorrect: false
            },{
                answer: "OnBlur()",
                isCorrect: false
            },{
                answer: "None",
                isCorrect: true
            }]
    },
    q32: {
        id: 32,
        q: "Method Prompt() Contain ____ Number of Parameters?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "One",
                isCorrect: false
            },{
                answer: "Two",
                isCorrect: true
            },{
                answer: "Three",
                isCorrect: false
            },{
                answer: "Zero",
                isCorrect: false
            }]
    },
    q33: {
        id: 33,
        q: "GetMonth() returns The Month as:",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Int",
                isCorrect: true
            },{
                answer: "Float",
                isCorrect: false
            },{
                answer: "Char",
                isCorrect: false
            },{
                answer: "String",
                isCorrect: false
            }]
    },
    q34: {
        id: 34,
        q: "A Function Associated With An object is Called:",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Function",
                isCorrect: false
            },{
                answer: "Method",
                isCorrect: true
            },{
                answer: "Link",
                isCorrect: false
            },{
                answer: "None",
                isCorrect: false
            }]
    },
    q35: {
        id: 35,
        q: "Inside which HTML element do we put the JavaScript?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Js",
                isCorrect: false
            },{
                answer: "JavaScript",
                isCorrect: false
            },{
                answer: "Script",
                isCorrect: true
            },{
                answer: "Scripting",
                isCorrect: false
            }]
    },
    q36: {
        id: 36,
        q: "Is javascript case sensitive?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "True",
                isCorrect: false
            },{
                answer: "False",
                isCorrect: true
            }]
    },
    q37: {
        id: 37,
        q: "In script tag what are the attribute we can use ?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Case",
                isCorrect: false
            },{
                answer: "Language",
                isCorrect: false
            },{
                answer: "Type",
                isCorrect: true
            },{
                answer: "Section",
                isCorrect: false
            },{
                answer: "Tract",
                isCorrect: false
            }]
    },
    q38: {
        id: 38,
        q: "How can we declare variable in javascript?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Datatype",
                isCorrect: false
            },{
                answer: "Var",
                isCorrect: true
            },{
                answer: "Int",
                isCorrect: false
            },{
                answer: "Float",
                isCorrect: false
            }]
    },
    q39: {
        id: 39,
        q: ".push () is which type of function?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Date and time",
                isCorrect: false
            },{
                answer: "String",
                isCorrect: false
            },{
                answer: "Array",
                isCorrect: true
            },{
                answer: "Maths / numeric",
                isCorrect: false
            }]
    },
    q40: {
        id: 41,
        q: "Script tag used in which part?",
        isMultipleCoice: false,
        choices: [
            {
                answer: "Only head tag",
                isCorrect: false
            },{
                answer: "Only body tag",
                isCorrect: false
            },{
                answer: "Head tag and body tag both",
                isCorrect: false
            },{
                answer: "None of above",
                isCorrect: true
            }]
    }
}
    
/* Reandom All The Questions */
function randomQuestion(){
    let copiQuestion = {...questions};
    let keys = Object.keys( copiQuestion )
    let randomTable = [];
    
    for(let i = numberOfQuestions; i > 0; i--){
        const randomVal = Math.floor(Math.random() * i);
        const q = keys.splice(randomVal, 1);
        //Random the CHOISES tables
        let choice = randomAnswer(copiQuestion[q].choices);
        //Set The New CHOISES Table 
        copiQuestion[q].choices = choice;
        randomTable.push(copiQuestion[q]);
        //Clean The Copie Of Object questions (copiQuestion)
        delete copiQuestion[q];
    }
    return randomTable;
}

let randomAnswer = (Q) => loopRandom(Q.length, Q);

function loopRandom(l, t){
    let randomTable = []
    for(let i = l; i > 0; i--){
        const randomVal = Math.floor(Math.random() * i);
        const q = t.splice(randomVal, 1);
        randomTable.push(q);
    }
    return randomTable;
}