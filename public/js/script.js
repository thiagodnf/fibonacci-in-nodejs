let index = 0;

function sendRequest(index) {

    const payload = {
        index
    }

    $(".btn-rest").attr("disabled", true);

    $.get("/api/fibonacci", payload)
        .done(function (response) {
            $("#index").text(response.index);
            $("#result").text(response.result.toLocaleString());
            $("#elapsedTime").text(response.elapsedTime + " ms");
        })
        .fail(function (error) {
            console.log("oi", error)
        }).always(function(){
            $(".btn-rest").attr("disabled", false);
        });
}

$(function () {

    $("#btn-next").click(function () {
        sendRequest(++index);
    });

    $("#btn-previous").click(function () {
        sendRequest(--index);
    });

    sendRequest(index);
});
