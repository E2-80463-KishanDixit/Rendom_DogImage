function fetchRandomDomImage(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;

        $("#dog-img").attr('src',imageUrl);
    }
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();
}

$('#fetch-img').on('click',fetchRandomDomImage);
