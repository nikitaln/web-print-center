$(function() {

    const appendTask = function(data)
    {
        var oneTaskDiv = '<a href="#" class="task-link" data-id="' + data.id + '">'
            'формат печати: '+ data.format + 'плотность: ' + data.density + '</a>';

        $('.task-list').append('<div>Формат печати: ' + format + '</div>');
    }



    //Добавление заявки
    $('.send').on('click', function(){

        var format = $('input[name=a]:checked').val();
        var density = $('input[name=b]:checked').val();
        alert('Format: ' + format + ', Paper: ' + density);

//        var formatDiv = $('.task-list').append('<div>Формат печати: ' + format + '</div>');
//        var densityDiv = $('.task-list').append('<div>Плотность: ' + density + '</div>');

        $.post('/newTask', {format:format, density:density}, function(response){

        });
    });
});