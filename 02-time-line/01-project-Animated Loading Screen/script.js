// ================================================================
// PROJECT 1 — ANIMATED HERO SECTION
// Topics used: gsap.from(), gsap.timeline(), stagger
// ================================================================

// ----------------------------------------------------------------
// STEP 1: Create the timeline
// ----------------------------------------------------------------
// We create ONE timeline that will hold ALL our animations.
// Every animation added to this timeline plays one after another
// automatically — no manual delay calculation needed.

const tl = gsap.timeline({
  defaults: {
    duration: 0.8, // every tween in this timeline uses 0.8s by default
    ease: "power3.out", // every tween uses this ease by default
  },
});

// ----------------------------------------------------------------
// STEP 2: Animate the Navbar in
// ----------------------------------------------------------------
// We use gsap.from() here because the navbar starts invisible (opacity:0
// is set in CSS) and we want it to DROP DOWN into view from above.
// y: -30 means it starts 30px ABOVE its normal position.
// After the animation, it lands back at y: 0 (its real CSS position).

tl.from(".navbar", {
  y: -30,
  opacity: 0,
  duration: 1.5,
});

// ----------------------------------------------------------------
// STEP 3: Animate the tag line
// ----------------------------------------------------------------
// The tag ("✦ Creative Design Studio") fades in and slides up slightly.
// y: 20 means it starts 20px BELOW its normal position and moves UP.
// This is a subtle entrance that feels clean and professional.

tl.from(
  ".hero-tag",
  {
    y: 20,
    opacity: 0,
  },
  "-=0.2",
);
// "-=0.2" is a POSITION PARAMETER.
// It means: start this animation 0.2 seconds BEFORE the previous one ends.
// This creates a smooth overlap between animations instead of hard cuts.

// ----------------------------------------------------------------
// STEP 4: Animate the heading — line by line with stagger
// ----------------------------------------------------------------
// The heading is split into two <span> elements (.line-1 and .line-2).
// We target both using the parent selector combined with a child class,
// OR we can use an array of selectors.
// stagger: 0.15 means line-2 starts 0.15s after line-1 begins.
// This gives the "words appearing one by one" cinematic effect.

tl.from(
  [".line-1", ".line-2"],
  {
    y: 60,
    opacity: 0,
    stagger: 0.15,
  },
  "-=0.3",
);

// ----------------------------------------------------------------
// STEP 5: Animate the subheading paragraph
// ----------------------------------------------------------------
// The subheading slides up and fades in — same pattern as the tag.
// We keep a small overlap with the previous animation using "-=0.4"
// so the page feels alive and flowing, not robotic and choppy.

tl.from(
  ".hero-sub",
  {
    y: 30,
    opacity: 0,
  },
  "-=0.4",
);

// ----------------------------------------------------------------
// STEP 6: Animate the CTA buttons
// ----------------------------------------------------------------
// The buttons container fades in and scales up slightly from 0.95.
// scale: 0.95 → starts slightly smaller → grows to full size.
// This gives the buttons a "pop in" feel.

tl.from(
  ".hero-buttons",
  {
    y: 20,
    opacity: 0,
    scale: 0.95,
  },
  "-=0.3",
);

// ----------------------------------------------------------------
// STEP 7: Animate the stats row
// ----------------------------------------------------------------
// The stats fade and slide up last — they are the final piece
// of content, so they anchor the left side of the hero.

tl.from(
  ".hero-stats",
  {
    y: 20,
    opacity: 0,
  },
  "-=0.3",
);

// ----------------------------------------------------------------
// STEP 8: Animate the visual card (right side)
// ----------------------------------------------------------------
// The main card on the right slides in from the RIGHT side.
// x: 60 means it starts 60px to the RIGHT of its position.
// We use "-=1.2" to make the right side animate in PARALLEL
// with the left content — they reveal together, not one after the other.

tl.from(
  ".visual-card",
  {
    x: 60,
    opacity: 0,
    duration: 1,
  },
  "-=1.2",
);

// ----------------------------------------------------------------
// STEP 9: Animate the decorative ring
// ----------------------------------------------------------------
// The ring fades in after the card appears.
// It has its own CSS spin animation running, so GSAP just
// handles making it visible — CSS handles the rotation.

tl.from(
  ".deco-ring",
  {
    opacity: 0,
    scale: 0.6,
    duration: 1,
  },
  "-=0.6",
);

// ----------------------------------------------------------------
// STEP 10: Animate the floating badges with stagger
// ----------------------------------------------------------------
// Both badges use stagger so they don't pop in at the same time.
// The top badge appears first, then the bottom badge appears 0.2s later.
// scale: 0.8 gives them a "grow in" pop effect.

tl.from(
  [".float-badge.top", ".float-badge.bottom"],
  {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.2,
  },
  "-=0.4",
);
