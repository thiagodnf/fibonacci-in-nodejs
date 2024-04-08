let index = 0;

function sendRequest(index) {

    const payload = {
        index
    }

    $.get("/api/fibonacci", payload)
        .done(function (response) {
            $("#index").text(response.index);
            $("#result").text(response.result);
            $("#elapsedTime").text(response.elapsedTime + " ms");
        })
        .fail(function (error) {
            console.log("oi", error)
        });
}

$(function () {

    $("#btn-next").click(function () {
        sendRequest(index++);
    });

    $("#btn-previous").click(function () {
        sendRequest(index--);
    });

    sendRequest(index);
});