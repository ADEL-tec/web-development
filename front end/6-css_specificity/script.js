const firstInput = document.querySelector('#first-css');
const secondInput = document.querySelector('#second-css');
const firstDisplay = document.querySelector('.display-first-specificity');
const firstDisplay_id = document.querySelector('.display-first-specificity div:nth-child(1)');
const firstDisplay_class = document.querySelector('.display-first-specificity div:nth-child(2)');
const firstDisplay_element = document.querySelector('.display-first-specificity div:nth-child(3)');
const secondDisplay_id = document.querySelector('.display-second-specificity div:nth-child(1)');
const secondDisplay_class = document.querySelector('.display-second-specificity div:nth-child(2)');
const secondDisplay_element = document.querySelector('.display-second-specificity div:nth-child(3)');
const result = document.querySelector('.display-middl-msg');

let ID_degits = 0;
let CLASS_ATTR_PsCLASS_degits = 0;
let ELEMENT_PsELEMENT_degits = 0;

let ID_degits_02 = 0;
let CLASS_ATTR_PsCLASS_degits_02 = 0;
let ELEMENT_PsELEMENT_degits_02 = 0;

firstInput.addEventListener('input', function(){
    setupFirstInput(this.value);
});

secondInput.addEventListener('input', function(){
    setupFirstInput02(this.value);
});

function setupFirstInput(str){
    console.log(str);
    
    ID_degits = 0;
    CLASS_ATTR_PsCLASS_degits = 0;
    ELEMENT_PsELEMENT_degits = 0;
    
    contentHtml.elements.forEach(element => {
        let regexElement = generateRegex('element', element);
        if (regexElement.test(str)){
            Element = str.match(regexElement).length;
            ELEMENT_PsELEMENT_degits += Element;

             /* Pseudos */
            if (str.includes(':')){
                contentHtml.pseudoElements.forEach(pseudoElement => {
                    let regexPsElem = generateRegex('element_PsElm', pseudoElement, element);
                    if (regexPsElem.test(str)){
                        ELEMENT_PsELEMENT_degits += str.match(regexPsElem).length;
                    }
                });

                contentHtml.pseudoClasses.forEach(pseudoClass => {
                    let regexPsClass = generateRegex('element_PsCls', pseudoClass, element);
                    if (regexPsClass.test(str)){
                        CLASS_ATTR_PsCLASS_degits += str.match(regexPsClass).length;
                    }
                });
            }
             /* CLASSes */
            if(str.includes('.')){
                let regexCLASS = generateRegex('element_cls', element);
                if(regexCLASS.test(str)){
                    CLASS_ATTR_PsCLASS_degits += str.match(regexCLASS).length;
                }
            }
            /* IDs */
            if(str.includes('#')){
                let regexId = generateRegex('element_id', element);
                if(regexId.test(str)){
                    ID_degits += str.match(regexId).length;
                }
            }
        }
       
    });
    /* Pseudo Element */
    contentHtml.pseudoElements.forEach(pseudoElement => {
        let regexPsElem = generateRegex('PsElem', pseudoElement);
        if (regexPsElem.test(str)){
            ELEMENT_PsELEMENT_degits += str.match(regexPsElem).length;
        }
    });

    /* Pseudo Class */
    contentHtml.pseudoClasses.forEach(pseudoClass => {
        let regexPsClass = generateRegex('PsCls', pseudoClass);
        if (regexPsClass.test(str)){
            CLASS_ATTR_PsCLASS_degits += str.match(regexPsClass).length;
        }
    });

    /* IDs */
    if(str.includes('#')){
        let regexId = generateRegex('id');
        if(regexId.test(str)){
            ID_degits += str.match(regexId).length;
        }
    }
     /* CLASSes */
    if(str.includes('.')){
        let regexCLASS = generateRegex('class');
        if(regexCLASS.test(str)){
            CLASS_ATTR_PsCLASS_degits += str.match(regexCLASS).length;
        }
    }
    /* ATTRIBUTES */
    if(str.includes('[') && str.includes(']')){
        let regexATTR = generateRegex('attr');
        if(regexATTR.test(str)){
            CLASS_ATTR_PsCLASS_degits += str.match(regexATTR).length;
        }
    }
   
    console.log('display id : ', ID_degits);
    firstDisplay_id.innerText = ID_degits;
    console.log('display class : ', CLASS_ATTR_PsCLASS_degits);
    firstDisplay_class.innerText = CLASS_ATTR_PsCLASS_degits;
    console.log('display element : ', ELEMENT_PsELEMENT_degits);
    firstDisplay_element.innerText = ELEMENT_PsELEMENT_degits;
     
    if(ID_degits > ID_degits_02){
        result.textContent = `the first element will execute over the second one`;
    }else if(ID_degits < ID_degits_02){
        result.textContent = `the second element will execute over the first one`;
    }else {
        if(CLASS_ATTR_PsCLASS_degits > CLASS_ATTR_PsCLASS_degits_02){
            result.textContent = `the first element will execute over the second one`;
        }else if(CLASS_ATTR_PsCLASS_degits < CLASS_ATTR_PsCLASS_degits_02){
            result.textContent = `the second element will execute over the first one`;
        }else {
            if(ELEMENT_PsELEMENT_degits > ELEMENT_PsELEMENT_degits_02){
                result.textContent = `the first element will execute over the second one`;
            }else if(ELEMENT_PsELEMENT_degits < ELEMENT_PsELEMENT_degits_02){
                result.textContent = `the second element will execute over the first one`;
            }else {
                result.textContent = `Put something in text box !`;
            }
        }
    }
}

function setupFirstInput02(str){
    console.log(str);
    
    ID_degits_02 = 0;
    CLASS_ATTR_PsCLASS_degits_02 = 0;
    ELEMENT_PsELEMENT_degits_02 = 0;
    
    contentHtml.elements.forEach(element => {
        let regexElement = generateRegex('element', element);
        if (regexElement.test(str)){
            Element = str.match(regexElement).length;
            ELEMENT_PsELEMENT_degits_02 += Element;

             /* Pseudos */
            if (str.includes(':')){
                contentHtml.pseudoElements.forEach(pseudoElement => {
                    let regexPsElem = generateRegex('element_PsElm', pseudoElement, element);
                    if (regexPsElem.test(str)){
                        ELEMENT_PsELEMENT_degits_02 += str.match(regexPsElem).length;
                    }
                });

                contentHtml.pseudoClasses.forEach(pseudoClass => {
                    let regexPsClass = generateRegex('element_PsCls', pseudoClass, element);
                    if (regexPsClass.test(str)){
                        CLASS_ATTR_PsCLASS_degits_02 += str.match(regexPsClass).length;
                    }
                });
            }
             /* CLASSes */
            if(str.includes('.')){
                let regexCLASS = generateRegex('element_cls', element);
                if(regexCLASS.test(str)){
                    CLASS_ATTR_PsCLASS_degits_02 += str.match(regexCLASS).length;
                }
            }
            /* IDs */
            if(str.includes('#')){
                let regexId = generateRegex('element_id', element);
                if(regexId.test(str)){
                    ID_degits_02 += str.match(regexId).length;
                }
            }
        }
       
    });
    /* Pseudo Element */
    contentHtml.pseudoElements.forEach(pseudoElement => {
        let regexPsElem = generateRegex('PsElem', pseudoElement);
        if (regexPsElem.test(str)){
            ELEMENT_PsELEMENT_degits_02 += str.match(regexPsElem).length;
        }
    });

    /* Pseudo Class */
    contentHtml.pseudoClasses.forEach(pseudoClass => {
        let regexPsClass = generateRegex('PsCls', pseudoClass);
        if (regexPsClass.test(str)){
            CLASS_ATTR_PsCLASS_degits_02 += str.match(regexPsClass).length;
        }
    });

    /* IDs */
    if(str.includes('#')){
        let regexId = generateRegex('id');
        if(regexId.test(str)){
            ID_degits_02 += str.match(regexId).length;
        }
    }
     /* CLASSes */
    if(str.includes('.')){
        let regexCLASS = generateRegex('class');
        if(regexCLASS.test(str)){
            CLASS_ATTR_PsCLASS_degits_02 += str.match(regexCLASS).length;
        }
    }
    /* ATTRIBUTES */
    if(str.includes('[') && str.includes(']')){
        let regexATTR = generateRegex('attr');
        if(regexATTR.test(str)){
            CLASS_ATTR_PsCLASS_degits_02 += str.match(regexATTR).length;
        }
    }
   
    console.log('display id : ', ID_degits_02);
    secondDisplay_id.innerText = ID_degits_02;
    console.log('display class : ', CLASS_ATTR_PsCLASS_degits_02);
    secondDisplay_class.innerText = CLASS_ATTR_PsCLASS_degits_02;
    console.log('display element : ', ELEMENT_PsELEMENT_degits_02);
    secondDisplay_element.innerText = ELEMENT_PsELEMENT_degits_02;
     
    if(ID_degits > ID_degits_02){
        result.textContent = `the first element will execute over the second one`;
    }else if(ID_degits < ID_degits_02){
        result.textContent = `the second element will execute over the first one`;
    }else {
        if(CLASS_ATTR_PsCLASS_degits > CLASS_ATTR_PsCLASS_degits_02){
            result.textContent = `the first element will execute over the second one`;
        }else if(CLASS_ATTR_PsCLASS_degits < CLASS_ATTR_PsCLASS_degits_02){
            result.textContent = `the second element will execute over the first one`;
        }else {
            if(ELEMENT_PsELEMENT_degits > ELEMENT_PsELEMENT_degits_02){
                result.textContent = `the first element will execute over the second one`;
            }else if(ELEMENT_PsELEMENT_degits < ELEMENT_PsELEMENT_degits_02){
                result.textContent = `the second element will execute over the first one`;
            }else {
                result.textContent = `Put something in text box !`;
            }
        }
    }
}

function generateRegex(str, mainInput, secInput){
    switch(str){
        case 'element' : 
        return new RegExp(`((?<=^|\\s)${mainInput}(?=\\s|$|\\.\\w+|\\#\\w+|(\\:\\w+)))`, 'g');
        case 'element_PsElm' : 
        return new RegExp(`(?<=${secInput})${mainInput}(?=\\s|$)`, 'g');
        case 'element_PsCls' : 
        return new RegExp(`(?<=${secInput})${mainInput}(?=\\s|$)`, 'g');
        case 'element_cls' : 
        return new RegExp(`(?<=(?<=${mainInput})(((\\.\\w+)+|(\\#\\w+)+)+)?)\\.\\w+(?=\\s|$|\\.|\\#)`, 'g');
        case 'element_id' : 
        return new RegExp(`(?<=(?<=${mainInput})(((\\#\\w+)+|(\\.\\w+)+)+)?)\\#\\w+(?=\\s|$|\\#|\\.)`, 'g');
        case 'PsElem' : 
        return new RegExp(`(?<=^|\\s|((\\#\\w+)+|(\\.\\w+)+)+)${mainInput}(?=\\s|$)`, 'g');
        case 'PsCls' : 
        return new RegExp(`(?<=^|\\s|((\\#\\w+)+|(\\.\\w+)+)+)${mainInput}(?=\\s|$)`, 'g');
        case 'id' : 
        return new RegExp(`(?<=\\s|^|(\\s|^)((\\#\\w+)+|(\\.\\w+)+)+)\\#\\w+(?=\\s|$|\\#|\\.|\\:)`, 'g');
        case 'class' : 
        return new RegExp(`(?<=\\s|^|(\\s|^)((\\.\\w+)+|(\\#\\w+)+)+)\\.\\w+(?=\\s|$|\\.|\\#|\\:)`, 'g');
        case 'attr' : 
        return new RegExp(`(?<=\\s|^|\\w+)\\[.+\\]`, 'g');
    }
}

const contentHtml = {
    elements: 
        ['html', 'base', 'head', 'link', 'meta', 'style', 'title', 'body', 'address', 'article',
            'acide', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'main', 'nav', 'section',
            'blockquote', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre',
            'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd',
            'mark', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup',
            'time', 'u', 'var', 'wbr', 'area', 'audio', 'img', 'map', 'track', 'video', 'embed', 'iframe',
            'object', 'param', 'picture', 'portal', 'source', 'svg', 'math', 'canvas', 'noscript', 'script', 
            'del', 'ins', 'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 
            'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'mater', 'optgroup', 'option', 
            'output', 'progress', 'select', 'textarea', 'details', 'dialog', 'menu', 'summary', 'slot', 'template', 
            'acronym', 'applet', 'basefont', 'bgsound', 'big', 'blink', 'center', 'content', 'dir', 'font', 'frame', 
            'frameset', 'hgroup', 'image', 'isindex', 'keygen', 'listing', 'marquee', 'menuitem', 'multicol', 'nextid', 
            'nobr', 'noembed', 'noframes', 'plaintext', 'rb', 'rtc', 'shadow', 'spacer', 'strike', 'tt', 'xmp'],
    pseudoElements: 
        ['::after', ':after', '::backdrop', '::before', ':before', '::cue', '::cue-region', 
            '::first-letter', ':first-letter', '::first-line', ':first-line', '::file-selector-button', 
            '::grammar-error', '::marker', '::part()', '::placeholder', '::selection', '::slotted()', 
            '::spelling-error', '::target-text'],
    pseudoClasses: 
        [':activate', ':any-link', ':autofill', ':blank', ':checked', ':current', ':default', 
            ':defined', ':dir()', ':disabled', ':empty', ':enabled', ':first', ':first-child', 
            ':first-of-type', ':fullscreen', ':future', ':focus', ':focus-visible', ':focus-within', 
            ':has()', ':host', ':host()', ':host-context()', ':hover', ':indeterminate', ':in-range', 
            ':invalid', ':is()', ':lang()', ':last-child', ':last-of-type', ':left', ':link', ':local-link', 
            ':not()', ':nth-child()', ':nth-col()', ':nth-last-child()', ':nth-last-col()', ':nth-last-of-type()', 
            ':nth-of-type()', ':only-child', ':only-of-type', ':optional', ':out-of-range', ':past', 
            ':picture-in-picture', ':placeholder-shown', ':paused', ':playing', ':read-only', ':read-write', 
            ':required', ':right', ':root', ':scope', ':state()', ':target', ':target-within', ':user-invalid', 
            ':valid', ':visited', ':where()']
};