gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function () { // scroll to the top with every refresh
    window.scrollTo(0, 0);
}


document.getElementById("coolBtn").addEventListener('click', gsapanim);

function gsapanim(){
gsap.to(".s3hide", {y: -100, opacity: 0, duration: 2});
gsap.to(".s3hide", {"--hidez": "-1", duration: 0.1});
gsap.to(".s3Shade", {stagger: 0.2, opacity: 1, duration: 1});

}

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.from(".introLogo", {y: 200, opacity: 0, duration: 2 });

tl.to(".introLogo", {y: -100, scale: 0.5, opacity: 0, duration: 1 });

tl.from(".slider", {y: "100%", duration: 2}, "-=1"); 

tl.to(".introAnim", {y: "-100%", duration: 2}, "-=1.5")