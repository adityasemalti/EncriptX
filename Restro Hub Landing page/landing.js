let tl = gsap.timeline()

tl.from("#menuCard",{
    left: -500,
    duration: 0.4,
    
})

tl.from("#menuCard h4",{
    x: -200,
    duration:0.2,
    stagger: 0.2,
    opacity: 0
})
tl.pause()

let mIcon= document.querySelector("#menuIcon")
mIcon.addEventListener('click',function(){

    tl.play();

})

let ret = document.querySelector("#return")
ret.addEventListener('click',function(){
    tl.reverse();
})


window.addEventListener("mousemove",function(dets)
{
    gsap.to("#crsr",{
        x:dets.x,
        y:dets.y,
    })
})