$( document ).ready(function() {
    io.socket.on("user", function(event){
        console.log(event);

        var container = $('#sockets');
        container.append('<li>Name : ' + event['data']['name'] + ' - E-Mail  : ' + event['data']['email'] + ' </li>');


    })
    io.socket.get("/user", function(resData, jwres) {console.log(resData);})
});