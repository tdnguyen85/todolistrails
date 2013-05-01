$(document).ready(function() {
	$('#new_todo_item').on('submit', function(event){
		event.preventDefault();
	// {todo_item: {name: "pee"}}
		var form = $(this);
		var title = $('#todo_item_title').val();
		var checkbox = $('<input type="checkbox" type="checkbox" >');

		$.ajax( {
			url: form.attr('action'),
			method: form.attr('method'),
			data: {
				'todo_item': {
					"title": title
				}
			},
			dataType: "json",
			success: function(todo_item) {
				var table = $('#first-table');


				var row = $('<tr id="select-row"><td ><a href="" class="checked" id="check">' + todo_item.title + '</a></td><td>' + todo_item.completed + '</td><td>' + todo_item.deleted + '</td></tr>');
				row.appendTo(table);
			},
			error: function() {
				alert('Server is down.');
			}
		});		
	});	
	$('#first-table').on('click', function(event) {
			var listItemCompleted = $('#select-row');
			if ($(event.target).is('.checked')) {
				event.preventDefault();
				listItemCompleted.appendTo('#second-table');
				return false;
			}
	});
	$('#second-table').on('click', function(event) {
			var listItemCompleted = $('#select-row');
			if ($(event.target).is(listItemCompleted)) {
				event.preventDefault();
				listItemCompleted.appendTo('#first-table');
				return false;
			}
	});
	/*$('#button').on('click', function() {
        var checkbox = $('<input type="checkbox" type="checkbox">');
        var listItem = $('<li>' + itemValue + '<input type="checkbox"><button class="remove">Remove</button></li>');
        listItem.appendTo($('#list-one'));

        $('input:checkbox').on('click', function() {
            var itemCompleted = $(this);
            if (itemCompleted.is(':checked')) {
                itemCompleted.parent().appendTo('#list-two').css('color', 'white');
            } else {
                itemCompleted.parent().css('color', 'black');
            }
        });
        $('.remove').on('click', function() {
            $(this).parent().remove();
        });
        //var remove = $('#item' + count).on
        //li.on('click', function() {
            //var listItem = $(this);
            //listItem.css('color', 'red');
        //});
        var l = $('#todo li').length;
    });*/
});