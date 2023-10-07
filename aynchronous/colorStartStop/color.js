let random_num = (num)=>(
    Math.floor(Math.random()*(num + 1))
)
let rgby = (num)=>{
  let rgb= `rgb(${random_num(num)}, ${random_num(num)}, ${random_num(num)})`
  document.body.style.backgroundColor = rgb;

}

const start = document.getElementById("start")
let interval;
start.addEventListener("click",(e)=>{
    interval = setInterval(rgby,1000,255)

    e.target.disabled = true ;
    e.target.textContent = "started";


    if(document.getElementById('stop').disabled === true){

        document.getElementById('stop').disabled = false;
        document.getElementById('stop').textContent = "stop";
    }

})

const stop = document.getElementById("stop")
stop.addEventListener("click",(e)=>{
    
    clearInterval(interval);
    interval = null;
    e.target.disabled = true ;
    e.target.textContent = "stopped";

    start.disabled = false;
    start.textContent ="start";


})

