gsap.from('.main',
    {
        duration:1,
        y:"-100%",
        opacity:0,
        ease:'bounce',
        background:'red',
    })

gsap.from('.text',
    {
        delay:1,
        duration:1,
        x:"-100%",
        opacity:0,
    })

    gsap.from('.text>p',
        {
            delay:1,
            duration:2,
            x:"-100%",
            opacity:1,
        })
    