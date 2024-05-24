const heroTitleChange = document.getElementById("herotitle-change");
const heroTitleImgs = document.getElementById("herotitle-change-icon");


window.onload = function() {
    titleChange();
    setInterval(titleChange, 5000);
    setInterval(checkCursor, 100);
}

// function titleChange() {
//     heroTitleImgs.src = "imgs/img1.png";
//     heroTitleImgs.style.display = "block";
//     heroTitleChange.innerHTML = "";
//     setTimeout(function() {
//         heroTitleImgs.src = "imgs/img2.png";
//         setTimeout(function() {
//             heroTitleImgs.src = "imgs/img3.png";
//             setTimeout(function() {
//                 heroTitleImgs.style.display = "none";
//                 heroTitleChange.innerHTML = "T";
//                 setTimeout(function() {
//                     heroTitleImgs.style.display = "none";
//                     heroTitleChange.innerHTML = "Te";
//                     setTimeout(function() {
//                         heroTitleImgs.style.display = "none";
//                         heroTitleChange.innerHTML = "Tec";
//                         setTimeout(function() {
//                             heroTitleImgs.style.display = "none";
//                             heroTitleChange.innerHTML = "Tech";
//                         }, 150);
//                     }, 150);
//                 }, 150);
                
//             }, 300);
//         }, 300);
//     }, 300);

// } 

function titleChange() {
    heroTitleImgs.src = "imgs/img1.png";
    heroTitleImgs.style.display = "block";
    heroTitleChange.innerHTML = "";
                heroTitleImgs.style.display = "none";
                heroTitleChange.innerHTML = "T";
                setTimeout(function() {
                    heroTitleImgs.style.display = "none";
                    heroTitleChange.innerHTML = "Te";
                    setTimeout(function() {
                        heroTitleImgs.style.display = "none";
                        heroTitleChange.innerHTML = "Tec";
                        setTimeout(function() {
                            heroTitleImgs.style.display = "none";
                            heroTitleChange.innerHTML = "Tech";
                        }, 200);
                    }, 200);
                }, 200);
} 

var cursorOnDiv = true;


    $(document).on('mousemove', function(e){
        left = e.pageX;
        top = e.pageY;

        if (e.pageY < 900) {
            $('#cursor-follow').css({
                left:  e.pageX-350,
                top:   e.pageY-180,
             });
        }
    });


$(document).on({
    mouseenter:function(){ cursorOnDiv = true; },
        mouseleave:function(){ cursorOnDiv = false; },
}, '#hero');

const date = document.getElementById('date');

gsap.registerPlugin(ScrollTrigger);


gsap.to("#date", {
    scrollTrigger: {
        trigger: "#date",
        scrub: true,
        start: "top 40%",
        end: "bottom 30%",
        pin: true
    },
    scale: 2,
    opacity: 0,
    duration: 5
});

gsap.to("#location", {
    scrollTrigger: {
        trigger: "#location",
        scrub: true,
        start: "top 60%",
        end: "top 0%",
    },
    scale: 1.7,
    opacity: 1,
    duration: 5
});

gsap.to("#loc-img", {
    scrollTrigger: {
        trigger: "#location",
        scrub: true,
        start: "top 60%",
        end: "bottom 30%",

    },
    x: 0,
    opacity: 1,
    duration: 5,
});

gsap.to("#loc-alt", {
    scrollTrigger: {
        trigger: "#loc-alt",
        scrub: true,
        start: "top 30%",
        end: "+=300",
    },
    x: 0,
    opacity: 1,
    scale: 5,
    duration: 5
});

var h = window.innerHeight/2;
var w = window.innerWidth/2;

gsap.to("#id", {
    scrollTrigger: {
        trigger: "#id",
        start: "top center",
        end: "+=300",
        scrub: true,
    },
    x: w,
    y: h,
    opacity: 1, 
    duration: 5,
});

gsap.to("#features", {
    scrollTrigger: {
        trigger: "#features",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        snap: true
    },
    duration: 5,
});

gsap.from("#feature1", {opacity: 0});


gsap.to("#feature1", {
    scrollTrigger: {
        trigger: "#feature1",
        markers: true,
        start: "top +=500",
        end: "+=200",
        scrub: true,
        snap: true
    },
    x: "-90vw",
    y: 0,
    opacity: 1, 
    duration: 8,
});

gsap.to("#feature1", {
    scrollTrigger: {
        trigger: "#feature1",
        markers: true,
        start: "top +=300",
        end: "+=400",
        scrub: true,
        snap: true
    },
    opacity: 0, 
    duration: 1,
});


// gsap.to("#feature2", {
//     scrollTrigger: {
//         trigger: "#feature1",
//         markers: true,
//         start: "top +=200",
//         end: "+=300",
//         scrub: true,
//         snap: true
//     },
//     x: "90vw",
//     y: 0,
//     opacity: 1, 
//     duration: 8,
// });