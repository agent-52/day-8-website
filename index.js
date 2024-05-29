gsap.from(".cap",{
    yPercent:235,
    delay:1,
    duration:1.8,
    ease: "expoScale(0.5,7,none)",
})
gsap.from(".cap1",{
    yPercent:225,
    delay:1,
    duration:1.8,
    ease: "expoScale(0.5,7,none)",
})

gsap.from(".openedBottle",{
    y:-470,
    delay:1,
    duration:1.8,
    ease: "expoScale(0.5,7,none)",
})
gsap.from(".largeCircle",{
    scale:0.7,
    delay:1.2,
    duration:1.4,
    ease: "expoScale(0.5,7,none)",
})
gsap.from(".page1H,.page1Desc,.shopButton1",{
    scale:0,
    opacity:0,
    delay:1.6,
    duration:1,
    ease: "expoScale(0.5,7,none)",
})
////////////////////////////////////////////////////
// gsap.to(".openedBottle",{
//     yPercent:37.5,
//     delay:1,
//     duration:1.8,
//     ease: "expoScale(0.5,7,none)",
//     scrollTrigger:{
//         trigger:".cap",
//         // markers:true,
//         scrub:1,
//         start:"-200% top",
//         end:"400% top"
//     }
// })
// gsap.to(".cap",{
//     yPercent:999.5,
//     delay:1,
//     duration:1.8,
//     ease: "expoScale(0.5,7,none)",
//     scrollTrigger:{
//         trigger:".cap",
//         // markers:true,
//         scrub:1,
//         start:"-250% top",
//         end:"400% top"
//     }
// })
// gsap.to(".cap1",{
//     yPercent:1225.5,
//     delay:1,
//     duration:1.8,
//     ease: "expoScale(0.5,7,none)",
//     scrollTrigger:{
//         trigger:".cap",
//         // markers:true,
//         scrub:1,
//         start:"-250% top",
//         end:"400% top"
//     }
// })

////////////////////

// gsap.fromTo(".openedBottle", { yPercent:37.5 }, { yPercent:133,
//     ease: "expoScale(0.5,7,none)",
//     scrollTrigger:{
//         trigger:".page2",
//         markers:true,
//         scrub:1,
//         start:"4% top",
//         end:"bottom top"
//     }

// gsap.fromTo(".cap", { yPercent:999.5 }, { yPercent:1330,
//     ease: "expoScale(0.5,7,none)",
//     scrollTrigger:{
//         trigger:".page2",
//         markers:true,
//         scrub:1,
//         start:"4% top",
//         end:"bottom top"
//     }

// });
