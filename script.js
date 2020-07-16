function rotate(elem, currentTime, perDeg, z, animDur){
    elem.style.transform="translate(-50%, -50%) rotate(" + (currentTime*perDeg+z) + "deg)";
    elem.animate([
        // keyframes
        { transform: "translate(-50%, -50%) rotate(" + (currentTime*perDeg+z) + "deg)" },
        { transform: "translate(-50%, -50%) rotate(" + (currentTime*perDeg+z+360) + "deg)" }
    ], {
        // timing options
        duration: animDur * 1000,
        iterations: Infinity
    });
}

let now=new Date();
rotate(document.querySelector(".secTime"), now.getSeconds(), 6, 0, 60);
rotate(document.querySelector(".minTime"), now.getMinutes(), 6, 0, 3600);
rotate(document.querySelector(".hourTime"), now.getHours(), 30, parseInt(now.getMinutes()/2), 43200);