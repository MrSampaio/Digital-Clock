const currentTime = () => {

    const clock = document.querySelector("h1");

    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // hr = hr < 10 ? `0${hr}` : hr;
    // min = min < 10 ? `0${min}` : min;
    // sec = sec < 10 ? `0${sec}` : sec;

    if(hr < 10){
        hr = `0${hr}`;
    }
    else{
        hr;
    }

    if(min < 10){
        min = `0${min}`;
    }
    else{
        min;
    }

    if(sec < 10){
        sec = `0${sec}`;
    }
    else{
        sec;
    }

    let time = `${hr}:${min}:${sec}`;

    clock.innerText = time;

}

currentTime();

setInterval(currentTime, 1000);


