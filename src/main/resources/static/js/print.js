$(function() {

    if(response != 0)



    $('.send').on('click', function(){

        var format = $('input[name=a]:checked').val();
        var density = $('input[name=b]:checked').val();
//        alert('Format: ' + data + ', Paper: ' + data2);
        $.post('/newTask', {format:format, density:density}, function(response){
//            alert(response);
        });

       $.get('/listTask', {}, function(response){
       	alert(response);
       });


    });
});