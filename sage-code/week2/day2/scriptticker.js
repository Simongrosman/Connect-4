(function() {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var a = headlines.getElementsByTagName("a");
    var animId;

    function moveHeadlines() {
        left--;
        console.log(left);

        if (left < -a[0].offsetWidth) {
            left += a[0].offsetWidth;
            headlines.appendChild(a[0]);
        }
        // console.log(left);
        headlines.style.left = left + "px";
        animId = requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines();
})();

    headline.addEventlistener ('mouseover', function (e) {

)
    })
