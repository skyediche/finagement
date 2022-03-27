var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#i-hi", {
    duration:2,
    y: -500,
});
tl.from("#i-are", {
    duration:1,
    opacity:0,
    x: 200,
    stagger: 0.3,
});
tl.from("#i-meet", {
    duration:1,
    opacity:0,
    rotateX: 90,
    delay:0.5,
});
tl.from("#intro-img", {
    duration:2,
    opacity:0,
    y: 500,
}, "-=0.5");
tl.from("#i-text", {
    duration:1,
    opacity:0,
    y: 100,
}, "-=1");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    start: "top center",
    end: "center center",
    toggleActions: "restart reverse restart reverse",
    scrub: true,
});

// video
gsap.to("#pv-item", {
    scrollTrigger: "#p-video",
    duration:2,
    opacity:1,
    y: 0,
    stagger: 1,
});

// feature one
gsap.to("#pfone-img1", {
    scrollTrigger: "#p-fone",
    duration:2,
    opacity:1,
    y: 0,
    rotate: 0,
});
gsap.to("#pfone-img2", {
    scrollTrigger: "#p-fone",
    duration:2,
    opacity:1,
    rotate: 0,
});
gsap.to("#pfone-img3", {
    scrollTrigger: "#p-fone",
    duration:2,
    opacity:1,
    y: 0,
    rotate: 0,
});
gsap.to("#pfone-text", {
    scrollTrigger: "#p-fone",
    duration:2,
    delay:1,
    opacity:1,
    x: 0,
    stagger: 1,
});

// feature two
gsap.to("#pftwo-img", {
    scrollTrigger: "#p-ftwo",
    duration:2,
    opacity:1,
    y: 0,
});
gsap.to("#pftwo-text", {
    scrollTrigger: "#p-ftwo",
    duration:2,
    delay:1,
    opacity:1,
    y: 0,
    stagger: 1,
});

// feature three
gsap.to("#pfthr-img1", {
    scrollTrigger: "#p-fthree",
    duration:2,
    opacity:1,
    y: 0,
    rotate: 0,
});
gsap.to("#pfthr-img2", {
    scrollTrigger: "#p-fthree",
    duration:2,
    opacity:1,
    rotate: 0,
});
gsap.to("#pfthr-img3", {
    scrollTrigger: "#p-fthree",
    duration:2,
    opacity:1,
    y: 0,
    rotate: 0,
});
gsap.to("#pfthr-text", {
    scrollTrigger: "#p-fthree",
    duration:2,
    delay:1,
    opacity:1,
    x: 0,
    stagger: 1,
});

// feature four
gsap.to("#pffour-img", {
    scrollTrigger: "#p-ffour",
    duration:2,
    opacity:1,
    y: 0,
});
gsap.to("#pffour-text", {
    scrollTrigger: "#p-ffour",
    duration:2,
    delay:1,
    opacity:1,
    y: 0,
    stagger: 1,
});

// preview
gsap.to("#preview-img", {
    scrollTrigger: "#preview",
    duration:2,
    opacity:1,
    y: 0,
    scale: 1.2,
});
gsap.to("#preview-text", {
    scrollTrigger: "#preview",
    duration:2,
    opacity:1,
    y: 0,
    stagger: 1,
});