var tl = gsap.timeline()


tl.from("#navbar", {
    x: 400,
    rotate: 360,
    delay: 1,
    opacity: 0,
    duration:1,
})

tl.from("#l-side",{
x:700,
duration:1,
opacity:0,
stagger:1,

})

tl.from("#r-side",{
    x:-700,
    duration:1,
    opacity:0,
    stagger:1,
    
    })