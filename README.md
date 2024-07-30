# GSAP Examples
### Tween
Tweens are used for all animation work in GSAP. There are three main animation methods:

* gsap.to()
* gsap.from()
* gsap.fromTo()
---

### Animation Triggering Options
GSAP provides options for triggering animations, allowing you to start an animation of an element based on the visibility or position of another element.

For example, if you have two boxes at different positions (box1 at top: 200px and box2 at top: 400px), you can trigger the animation of box1 when box2 enters the viewport. This means that box1's animation is dependent on box2.

Passing Animation Trigger as an Object
You can pass the animation trigger and other properties as an object.

javascript
Copy code

```
scrollTrigger: {
    trigger: ".square",
    start: "",
    end: ""
}
```
In the above snippet, the scrollTrigger object contains the properties trigger, start, and end.

* Start
This property defines when to start the animation. You can specify the start point in different ways:

Numeric Value: e.g., start: 500 means the animation will start when the element moves 500 pixels after entering the viewport.
String: e.g., start: "top center" means the animation starts when the top of the element reaches the center of the viewport.
* Markers
Markers help visualize the start and end points of the animation in the viewport. They include labels like "top", "bottom", and "center".

