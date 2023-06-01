function fetchRandomDomImage(){
    // 1st METHOD IN JQUERY FOR GET REQUEST 

    $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        method:'GET',
        success:function (data){
            var imageUrl = data.message; // ALREADY IN JSON
            $("#dog-img").attr('src',imageUrl);
        }
    }).fail(function(){
        console.log('Request Failed');
    })


    // 2nd METHOD IN JQUERY FOR GET REQUEST 

    // $.get('https://dog.ceo/api/breeds/image/random',function(data){
    //     var imageUrl = data.message; // ALREADY IN JSON
    //     $("#dog-img").attr('src',imageUrl);
    // }).fail( function (xhr,textStatus,errorThrown){
    //     console.log('Request Failed');
    // });
}

$('#fetch-img').on('click',fetchRandomDomImage);