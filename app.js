let ah = document.querySelector("#ah")
let coro = document.querySelector("#coro")
let e1234 = document.querySelector("#e1234")
let bababa = document.querySelector("#bababa")
let marquee = document.querySelector("marquee")
let btn1234 = document.querySelector("#btn1234")
let btnAH = document.querySelector("#btnAH")
marquee.stop()

function AH(){
    btnAH.className="hide"
    btn1234.className=""
    stopAll()
    bababa.play()
    setTimeout(()=>{
        let ah = document.querySelector("#banner")
        ah.className="show animate animate__bounceIn";
        setTimeout(()=>{
            ah.className="";
        }, 1000);
    }, 5000);
}

e1234.addEventListener('ended', ()=>{
    coro.play()
    marquee.start()
 })

 coro.addEventListener('ended', ()=>{
     marquee.stop()
 })
function start(){
    btnAH.className=""
    btn1234.className="hide"
    stopAll()
    e1234.play()
}

function stopAll(){
    bababa.pause()
    bababa.currentTime = 0
    e1234.pause()
    e1234.currentTime = 0
    coro.pause()
    coro.currentTime = 0
    marquee.stop()
}