$("button").click(function () {
    var mes = $("input").val();
    if (mes) {
        $("input").val('');
        randDom("mine", mes);
        console.log(mes)
        getMes(mes);
    }
})
$("input").on("keyup", function (e) {
    if (e.keyCode != 13) {
        return false;
    }
    $("button").click();
})


function randDom(who, text) {
    if (!text) {
        return false;
    }
    if (who == "mine") {
        var box = $("<div class='mine'></div>");
        $("<span></span>").appendTo(box);
        $("<div class='mes'>" + text + "</div>").appendTo(box);
    } else if (who == "robot") {
        var box = $("<div class='robot'></div>");
        $("<span></span>").appendTo(box);
        $("<div class='view'>" + text + "</div>").appendTo(box);
    }
    $(".content").append(box);
    $(".content").scrollTop($(".content")[0].scrollHeight);

}

// https://developer.duyiedu.com/edu/turing/chat
// http://temp.duyiedu.com/api/chat
function getMes(val) {
    $.ajax({
        url: "http://temp.duyiedu.com/api/chat",
        type: "get",
        data: {
            text: val,
        },
        dataType: "json",
        success: function (res) {
            var text = res.text;
            randDom("robot", text);
        }
    })

}