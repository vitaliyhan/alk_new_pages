// animation block
$(document).ready(function () {
    var skroll = new Skroll()
        .add(".anim1", {
            animation: "fadeInUp",
            delay: 0,
            duration: 500,
            wait: 0
        })
        .add(".anim2", {
            animation: "flipInX",
            delay: 20,
            duration: 300
        })
        .add(".anim3", {
            animation: "rotateLeftIn",
            delay: 20,
            duration: 300
        })
        .add(".anim4", {
            animation: "slideInLeft",
            delay: 20,
            duration: 300
        })
        .add(".anim5", {
            animation: "growInLeft",
            delay: 20,
            duration: 300,
            easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
        })
        .add(".anim6", {
            animation: "growInRight",
            delay: 20,
            duration: 300,
            easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)",
        })
        .addAnimation("spinIn", {
            start: function (el) {
                el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
                el.style["transform-origin"] = "50% 50%";
                el.style["opacity"] = 0;
            },
            end: function (el) {
                el.style["transform"] = "rotate(0deg) scale(1,1)";
                el.style["opacity"] = 1;
            }
        })
        .add(".anim7", {
            animation: "spinIn",
            delay: 20,
            duration: 300,
            easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
        })
        .add(".anim8", {
            animation: "fadeInDown",
            delay: 20,
            duration: 300,
            triggerBottom: 1,
            easing: "cubic-bezier(0.37, 0.27, 0.24, 1.26)"
        })
        .init();

});
