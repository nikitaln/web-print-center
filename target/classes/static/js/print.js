$(function() {

//    const appendTask = function(data)
//    {
//        var oneTaskDiv = '<a href="#" class="task-link" data-id="' + data.id + '">'
//            'формат печати: '+ data.format + 'плотность: ' + data.density + '</a>';
//
//        $('.task-list').append('<div>Формат печати: ' + format + '</div>');
//    }




    //Добавление заявки
    $('.send').on('click', function(){

//        var format = $('input[name=a]:checked').val();
//        var density = $('input[name=b]:checked').val();
//        alert('Format: ' + format + ', Paper: ' + density);


        var data = $('#task-form form').serialize();

        console.log(data);

        $.ajax({
        	url: '/newTask',
        	method: 'post',
        	data: data,
        	success: function(response){
        		alert(response);

        	}
        });

//        var formatDiv = $('.task-list').append('<div>Формат печати: ' + format + '</div>');
//        var densityDiv = $('.task-list').append('<div>Плотность: ' + density + '</div>');

//        $.post('/newTask', {format:format, density:density}, function(response){
//        });

//        ajax();
    });

        $.ajax({
        	url: '/listTask',         /* Куда пойдет запрос */
        	method: 'get',             /* Метод передачи (post или get) */
        	                          /* Тип данных в ответе (xml, json, script, html). */
        	//data: {text: 'Текст'},     /* Параметры передаваемые в запросе. */
        	success: function(response){   /* функция которая будет выполнена после успешного запроса.  */
        		console.log(response)
        		            /* В переменной data содержится ответ от index.php. */

        	    $('.task-list').append('<div>Формат печати: ' + response + '</div>');

        	}
        });

});