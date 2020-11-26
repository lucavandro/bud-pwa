function AH(){
    let ah = document.querySelector("#banner")
    ah.className="show animate animate__bounceIn";
    setTimeout(()=>{
        ah.className="";
    }, 1000);
}