# gsap_examples
___
### TWEEN
tween is use for all animation work 
**there are three animation properties**

* gsap.to()
* gsap.from()
* gsap.tofrom()
---
**Animation triggring options**

1) this option is use when you want to trigger amimation of an element using same element or any other element 

like we have two box at different position box1>top:200px
and box2>top:400px,
so using animationtriger we can animate box1 when box2 comes underview port, simple means box1 is dependent on box1
---
**we can pass animation trigger as object and other properties as well**

```
scrollTrigger:
{
    trigger:".square",
    start:
    end:
}
```
the above snippet showing scroll trigger with two additional property start and end 

**Start**
this propert tells when to start the animation or property
* we can pass Numbers e.g. :- `start:500`
it means the trigger will start when element move 500 px after entering in viewport.

* we can also pass string as `start:"top center"
this means animation starts when top of element center of scroll bar

**marker**
these are top bottom and scroll labels