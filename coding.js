const lastdate = "2 October 2024 12:00 AM"

document.getElementById("end").innerText = lastdate;


const inp = document.querySelectorAll("input");

function clock(){
    const end = new Date(lastdate);
    const now = new Date();
    const tim = (end - now) / 1000;
    
    if(tim<0) return;

    
    inp[0].value = Math.floor(tim / 3600 /24); // day get matherd
    inp[1].value = Math.floor(tim /3600 ) % 24; // hours get matherd
    inp[2].value = Math.floor(tim / 60 ) % 60; // mins get matherd
    inp[3].value = Math.floor(tim)%60;  // sec get matherd

    
}

clock()

setInterval(
    function(){
    clock()
    }
)



/*
 1 day = 24 hrs
 1 hr =  60 mins
 60 min = 3600 sec

 */