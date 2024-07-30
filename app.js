// to add plugin in our website we can use register plugin 


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



gsap.to(".img_12",{
    opacity:0.5
    })


    gsap.from('.box', {
        // "scroll trigger is value given to the element we want to trigger"
        // for example we want to animate .box when box2 enter in view port
        //BOX WILL START ANIMAING WHEN BOX2 COMES IN VIEW PORT
        scrollTrigger: '.box2', 
      
        opacity:0,
       
    });
    

    gsap.to('.box', {
        // "scroll trigger is value given to the element we want to trigger"
        // for example we want to animate .box when box2 enter in view port
        //BOX WILL START ANIMAING WHEN BOX2 COMES IN VIEW PORT
        scrollTrigger: '.box2', 
        width:'500px',
        opacity:1,
        borderRadius:0,
        x:'-200px' ,
    });

    gsap.from('.box3', {
        // "scroll trigger is value given to the element we want to trigger"
        // for example we want to animate .box when box2 enter in view port
        //BOX WILL START ANIMAING WHEN BOX2 COMES IN VIEW PORT
        scrollTrigger: '.box2', 
      
        opacity:0,
       
    });
    

    gsap.to('.box3', {
        // "scroll trigger is value given to the element we want to trigger"
        // for example we want to animate .box when box2 enter in view port
        //BOX WILL START ANIMAING WHEN BOX2 COMES IN VIEW PORT
        scrollTrigger: '.box4', 
        width:'500px',
        opacity:1,

        borderRadius:0,
        x:'200px' ,
    });