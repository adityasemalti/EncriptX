window.addEventListener("mousemove",function(dets)
{
    gsap.to("#cur",{
        x:dets.x,
        y:dets.y,
    })
})

gsap.to(".mar",{
    transform: 'translateX(-100%)',
    duration: 5,
    repeat: -1,
    ease: "none",
})

let skill= document.getElementsByClassName("skills")

skill.addEventListener("mousemove",function(){
    gsap.to("#cur",{
        scale: 4,
    })
})