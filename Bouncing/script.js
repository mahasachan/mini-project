const itemBox = document.getElementsByClassName("box-item")[0];
const colorItem = []
const widthWindow = window.innerWidth
const heightWindow = window.innerHeight
let performanceTimeMutipler = 0.3
let intervalId

function randomColorRGB(n) {
    //const colors = new Array(n).fill().map((_, i) => i) 
    for (let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        colorItem[i] = (`rgb(${r},${g},${b})`);
    }
    
}
let prevBounces = 0;
randomColorRGB(15)


function loop(increaseSpeedWhenBounces) {
    const vRange = window.innerHeight - itemBox.offsetHeight;
    const hRange = window.innerWidth - itemBox.offsetWidth;
    let performanceTime = performance.now() *performanceTimeMutipler;
    
    const x= Math.abs((performanceTime % (hRange * 2)) - hRange)
    const y = Math.abs((performanceTime % (vRange * 2)) - vRange)
    
    //console.log(increaseSpeedWhenBounces)
    const bounces = Math.floor(performanceTime / hRange) + Math.floor(performanceTime / vRange);
    
    if ( increaseSpeedWhenBounces === true && ( bounces > prevBounces )) {
        // not smooth if use 
        performanceTimeMutipler += 0.008 / (bounces - prevBounces);
    } 

    prevBounces = bounces;
    itemBox.style.left = `${x - 25}px`;
    itemBox.style.top = `${y - 25}px`;

    if (( bounces % colorItem.length ) == 0) {
        itemBox.style.background = "red"
        randomColorRGB(15)
    } else {
        itemBox.style.background = colorItem[bounces % colorItem.length]
    }
    //requestAnimationFrame(loop);
    if (!intervalId) {
        intervalId = setInterval(() => loop(increaseSpeedWhenBounces), 1000 / 60); 
    }
}
loop(false)