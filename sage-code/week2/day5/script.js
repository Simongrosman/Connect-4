(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var curKitty = 0;
    var timer;
    var isInMotion;

    function moveKitties(nextKitty) {
        isInMotion = true;
        kitties[curKitty].classList.remove("onscreen");
        kitties[curKitty].classList.add("exit-stage-left");
        dots[curKitty].classList.remove("current");

        kitties[curKitty].addEventListener("transitionend", function end(e) {
            e.target.classList.remove("exit-stage-left");
            e.target.removeEventListener("transitionend", end);
        });

        if (!isNaN(nextKitty)) {
            curKitty = nextKitty;
        } else {
            curKitty++;

            if (curKitty >= kitties.length) {
                curKitty = 0;
            }
        }

        dots[curKitty].classList.add("current");
        kitties[curKitty].classList.add("onscreen");
        timer = setTimeout(moveKitties, 3000);
    }

    for (var i = 0; i < dots.length; i++) {
        function whatever(index) {
            dots[i].addEventListener("click", function() {
                // if (index == curKitty || isInMotion) {
                console.log(index);
                moveKitties(index);
                // return;
            });
        }
        whatever(i);
        clearTimeout(index);
    }
    document.body.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit-stage-left")) {
            e.target.classList.remove("exit-stage-left");
            isInMotion = false;
        }
    });
    timer = setTimeout(moveKitties, 1000);
})();
