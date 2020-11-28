let ah = document.querySelector("#ah")
let coro = document.querySelector("#coro")
let e1234 = document.querySelector("#e1234")
let bababa = document.querySelector("#bababa")
let marquee = document.querySelector("marquee")
let btn1234 = document.querySelector("#btn1234")
let btnAH = document.querySelector("#btnAH")
let img = document.querySelector('img')
marquee.stop()

function AH(){
    stopAll()
    
    btnAH.className="hide"
    btn1234.className=""
    img.src="img/ah.gif"
    bababa.play()
    
    setTimeout(()=>{
        let ah = document.querySelector("#banner")
        ah.className="show animate animate__bounceIn";
        setTimeout(()=>{
            ah.className="";
            stopAll()
        }, 1000);
    }, 5000);
}

e1234.addEventListener('ended', ()=>{
    
    img.src = "img/bobobo.gif"
    coro.play()
    marquee.start()
 })

 coro.addEventListener('ended', ()=>{
     marquee.stop()
     img.src = "img/stop.gif"
 })
function start(){
    
    btnAH.className=""
    btn1234.className="hide"
    stopAll()
    e1234.play()
}

function stopAll(){
    img.src = "img/stop.gif"
    bababa.pause()
    bababa.currentTime = 0
    e1234.pause()
    e1234.currentTime = 0
    coro.pause()
    coro.currentTime = 0
    marquee.stop()
}

function preloadImages(){
    le['ah','bobobo', 'stop'].forEach((img)=>(new Image()).src = `img/${img}.gif`)

    
}