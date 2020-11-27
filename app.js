let ah = document.querySelector("#ah")
let coro = document.querySelector("#coro")
let e1234 = document.querySelector("#e1234")
let bababa = document.querySelector("#bababa")

function AH(){
   
    bababa.play()
    setTimeout(()=>{
        let ah = document.querySelector("#banner")
        ah.className="show animate animate__bounceIn";
        setTimeout(()=>{
            ah.className="";
        }, 1000);
    }, 5000);
}