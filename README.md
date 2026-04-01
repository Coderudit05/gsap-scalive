# GSAP Classroom Notebook

This repository is my step-by-step GSAP learning notebook for students.

Current coverage in this notebook:
1. Basic `gsap.to()` animation on one element
2. Intro to `gsap.from()` concept
3. Repeating and reversing animations (`repeat`, `yoyo`)
4. Animating multiple elements with `stagger`

---

## 1) Core Concept First

GSAP (GreenSock Animation Platform) is a JavaScript animation library.

The key idea:
- You select a target.
- You define animation values in an object.
- GSAP smoothly animates those values over time.

Most-used tween methods:
1. `gsap.to()`
2. `gsap.from()`
3. `gsap.fromTo()`

Think of them like this:
- `to()` = animate from current state to destination values.
- `from()` = animate from given start values to current state.
- `fromTo()` = define both start and end explicitly.

---

## 2) Project Structure (Till Now)

```text
01-Basics/
  example1/
    index.html
    style.css
    script.js
  example2/
    index.html
    style.css
    script.js
```

---

## 3) Lesson 1 - Single Element Animation (`example1`)

### 3.1 HTML

```html
<div class="box"></div>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<script src="script.js"></script>
```

Explanation:
1. `.box` is the element we animate.
2. GSAP CDN is loaded before local script.
3. `script.js` contains tween code.

### 3.2 CSS

```css
.box {
  height: 200px;
  width: 200px;
  background-color: violet;
}
```

Explanation:
1. This gives the box visible size and color.
2. GSAP will animate these and transform-related properties.

### 3.3 JavaScript (`gsap.to()`)

```js
gsap.to(".box", {
  x: 300,
  y: 400,
  duration: 2,
  delay: 2,
  backgroundColor: "yellow",
  scale: 1.5,
  rotate: 360,
  repeat: 4,
  yoyo: true,
});
```

What happens step by step:
1. GSAP picks `.box` as target.
2. Waits for 2 seconds (`delay`).
3. Moves box to x=300 and y=400.
4. Changes color to yellow.
5. Scales to 1.5 and rotates 360 degrees.
6. Runs for 2 seconds per cycle.
7. Repeats 4 extra times.
8. Because `yoyo: true`, alternate cycles run backward.

### 3.4 Properties Used Here (One by One)

1. `x`: Moves element along X-axis (translateX shortcut).
2. `y`: Moves element along Y-axis (translateY shortcut).
3. `duration`: Total time for one animation cycle in seconds.
4. `delay`: Wait time before animation starts.
5. `backgroundColor`: Animates CSS color value.
6. `scale`: Resizes element (1 = original size).
7. `rotate`: Rotates element in degrees.
8. `repeat`: Number of extra loops (`-1` means infinite).
9. `yoyo`: Reverses direction every other repeat.

---

## 4) Lesson 2 - Multiple Elements + Stagger (`example2`)

### 4.1 Idea

If there are many similar elements, do not create separate tweens for each id.
Use one selector and `stagger` for cleaner code.

### 4.2 JavaScript

```js
gsap.to(".box", {
  x: 500,
  duration: 1,
  repeat: -1,
  yoyo: true,
  stagger: 1,
});
```

What happens step by step:
1. All `.box` elements are selected.
2. Each box moves 500px on X-axis.
3. Each animation takes 1 second.
4. Animation repeats forever (`repeat: -1`).
5. Motion goes forward and backward (`yoyo: true`).
6. Next box starts 1 second after previous (`stagger: 1`).

### 4.3 Property Added in This Lesson

1. `stagger`: Adds offset between start times of multiple targets.

---

## 5) `gsap.to()` Complete Notes

### 5.1 Syntax

```js
gsap.to(targets, vars);
```

### 5.2 Return Value

- Returns a Tween instance.
- You can store it in a variable and control it.

```js
let tween = gsap.to(".class", {
  rotation: 360,
  duration: 5,
  ease: "elastic",
});

tween.pause();
tween.seek(2);
tween.progress(0.5);
tween.play();
```

### 5.3 Parameters

1. `targets`: Selector, element, object, array, etc.
2. `vars`: Animation values + special properties.

### 5.4 Why `to()` is Most Common

- We usually think in destination values.
- GSAP automatically reads current values as start values.
- Very fast to write for practical UI animations.

---

## 6) `gsap.from()` Complete Notes

### 6.1 Syntax

```js
gsap.from(targets, vars);
```

### 6.2 Working Style

- You define start values in `vars`.
- GSAP animates from those values to current state.

```js
let tween = gsap.from(".class", {
  rotation: 360,
  duration: 5,
  ease: "elastic",
});
```

### 6.3 Important Caution

`from()` is powerful but can confuse beginners when initial styles are not clear.
Always check what the element's natural/current state is, because that is the destination for `from()`.

---

## 7) Special Properties Reference (One by One)

These properties are used inside the `vars` object and apply to tweens.

1. `callbackScope`: Scope (`this`) used by all callbacks.
2. `data`: Attach custom data to tween instance.
3. `delay`: Delay before tween starts.
4. `duration`: Tween duration in seconds.
5. `ease`: Controls motion feel/speed curve.
6. `id`: Custom id for retrieval via `gsap.getById()`.
7. `immediateRender`: Forces immediate first render.
8. `inherit`: Inherit defaults from parent timeline or not.
9. `lazy`: Defers writes for performance optimization.
10. `onComplete`: Callback at completion.
11. `onCompleteParams`: Params passed to `onComplete`.
12. `onInterrupt`: Callback when tween is interrupted/killed.
13. `onInterruptParams`: Params for `onInterrupt`.
14. `onRepeat`: Callback on each repeat cycle.
15. `onRepeatParams`: Params for `onRepeat`.
16. `onReverseComplete`: Callback when reverse reaches start.
17. `onReverseCompleteParams`: Params for `onReverseComplete`.
18. `onStart`: Callback when tween starts.
19. `onStartParams`: Params for `onStart`.
20. `onUpdate`: Callback on every animation tick.
21. `onUpdateParams`: Params for `onUpdate`.
22. `overwrite`: Conflict strategy with other tweens.
23. `paused`: Create tween in paused state.
24. `repeat`: Number of repeats after first play.
25. `repeatDelay`: Delay between repeats.
26. `repeatRefresh`: Re-calculate dynamic values each repeat.
27. `reversed`: Start tween in reverse direction.
28. `runBackwards`: Invert start/end values (like internal `from()`).
29. `stagger`: Offset start timing across multiple targets.
30. `startAt`: Force specific starting values before tween.
31. `yoyo`: Alternate repeats in reverse direction.
32. `yoyoEase`: Separate ease behavior in yoyo phase.
33. `keyframes`: Sequence multiple states in one tween.

---

## 8) Quick Comparison

1. `to()`:
- Start = current value
- End = value in vars

2. `from()`:
- Start = value in vars
- End = current value

3. `fromTo()`:
- Start = you define
- End = you define

---

## 9) Revision Summary (For Students)

1. GSAP tween means smooth value change over time.
2. `gsap.to()` is the most practical starting method.
3. `duration`, `delay`, `repeat`, `yoyo` are foundational controls.
4. `stagger` removes repetitive code for multiple elements.
5. `gsap.from()` should be used carefully with clear initial state.
6. Tween instances can be controlled with methods like `pause()` and `play()`.

---

## 10) Covered Till Now vs Next

Covered till now:
1. Basic tween flow
2. Core motion properties
3. Repeat/yoyo behavior
4. Stagger-based sequencing
5. `to()` and `from()` concepts

Next (later topics, not included yet):
1. Timeline basics
2. Advanced easing exploration
3. ScrollTrigger fundamentals
4. fromTo practical patterns
5. Callbacks with mini projects
