$(function() {

    let getTaskElement = function(task)
    {
        let item = $('<div class="task-item"></div>');
            item.append($('<div class="task-number">Номер заявки ' +  task.id + '</div>'));
            item.append($('<div class="task-format">Формат печати ' + task.format + '</div>'));
            item.append($('<div class="task-density">Плотность бумаги ' + task.density + '</div>'));
        $('.task-list').append(item);
    };


    //Обновление списка заявок на печать
    $(function()
    {
        $.ajax({
        	url: '/tasks',             /* Куда пойдет запрос */
        	method: 'get',             /* Метод передачи (post или get) */
        	success: function(response){   /* функция которая будет выполнена после успешного запроса.  */
        		                             /* В переменной data содержится ответ от index.php. */
                if (response.length == 0) {
                    return;

                } else {

                    for(i in response) {
                        getTaskElement(response[i]);
                    }
                }
        	}
        });
    });

//        $.get('/tasks', function(response)
//        {
//            for(i in response) {
//                getTaskElement(response[i]);
//            }
//        });


    //Добавление заявки через кнопку отправить
    $('.btn-send').on('click', function(){
//        var format = $('input[name=a]:checked').val();
//        var density = $('input[name=b]:checked').val();
//        alert('Format: ' + format + ', Paper: ' + density);

        var data = $('form').serialize();
        console.log(data);

        $.ajax({
        	url: '/task',
        	method: 'post',
        	data: data,
        	success: function(response){
        		var task = {};
        		task.id = response;
        		var taskArray = $('form').serializeArray();
        		console.log(taskArray);
                for(i in taskArray) {
                    task[taskArray[i]['name']] = taskArray[i]['value'];
                }
                getTaskElement(task);
                $('form')[0].reset();
        	}
        });

//        var formatDiv = $('.task-list').append('<div>Формат печати: ' + format + '</div>');
//        var densityDiv = $('.task-list').append('<div>Плотность: ' + density + '</div>');
//        $.post('/newTask', {format:format, density:density}, function(response){
//        });
    });
});