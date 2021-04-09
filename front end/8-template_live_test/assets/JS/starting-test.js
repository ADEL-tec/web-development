const sytartTest = document.querySelector('button');

let windowOpen = null;

sytartTest.addEventListener('click', settingWindow);

function settingWindow(){
    if(windowOpen == null || windowOpen.closed){
        let x = window.outerWidth;
        let y = window.outerHeight;
        let options = `width= ${x-50}, height= ${y-50}`;
        windowOpen = window.open("test.html", "Test", options);
    }else{
        windowOpen.focus();
    }
}