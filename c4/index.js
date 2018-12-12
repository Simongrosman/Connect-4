// (function() {
var currentPlayer = "Orange";
var slot = $(".slot");
var currplay = $(".currplay");
var container = $(".container");
var trafic = $(".trafic");
var logo = $(".logo");
var body = $("body");
var again = $(".again");
var diaVics = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38]
];

$(".column").on("click", function(e) {
    var slotsInCol = $(e.currentTarget).find(".slot");
    for (var i = 5; i >= 0; i--) {
        if (
            !slotsInCol.eq(i).hasClass("Orange") &&
            !slotsInCol.eq(i).hasClass("Pink")
        ) {
            break;
        }
    }
    slotsInCol.eq(i).addClass(currentPlayer);

    var slotsInRow = $(".row" + i);

    checkForVictory(slotsInCol);
    checkForVictory(slotsInRow);
    checkForDiaVictory(diaVics);
    switchPlayers();
    fade();
});

function fade() {
    $(".hole").fadeToggle("slow");
    $(".hole").fadeOut(3000);
}

function switchPlayers() {
    if (currentPlayer == "Orange") {
        currentPlayer = "Pink";
        trafic.removeClass("Orange");
        trafic.addClass("Pink");
    } else {
        currentPlayer = "Orange";
        trafic.removeClass("Pink");
        trafic.addClass("Orange");
    }
}

function checkForDiaVictory() {
    for (var i = 0; i < diaVics.length; i++) {
        var str = "";
        for (var j = 0; j < diaVics[i].length; j++) {
            if (
                $(".slot")
                    .eq(diaVics[i][j])
                    .hasClass(currentPlayer)
            ) {
                str += "w";
            } else {
                str += "x";
            }
        }
        if (str.indexOf("wwww") > -1) {
            win();
        }
    }
}
function checkForVictory(arr) {
    var winstr = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains(currentPlayer)) {
            winstr += "W";
        } else {
            winstr += "X";
        }
    }
    if (winstr.indexOf("WWWW") > -1) {
        win();
    }
}
function win() {
    body.addClass("logo");
    celeb = "";
    celeb +=
        "<div class='celeb'>" +
        currentPlayer +
        " " +
        "WON!" +
        "</div>" +
        "<div class='again'>" +
        "Again?" +
        "</div>";
    body.html(celeb);
    container.hide();
    trafic.hide();

    $(".again").on("click", function(e) {
        console.log("clock");
        location.reload(true);
    });
}
