const clock = document.querySelector('.clock');

const updatTime = () =>{
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h >= 10 ? h : `0${h}`;
    m = m >= 10 ? m : `0${m}`;
    s = s >= 10 ? s : `0${s}`; 

    const displayTime = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = displayTime;
    
}

updatTime();
setInterval(updatTime, 1000);


