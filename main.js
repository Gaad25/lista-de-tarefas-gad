$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        var newTask = $('#taskInput').val().trim();
        if (newTask) {
            var listItem = $('<li>' + newTask + '</li>').hide();
            $('#taskList').append(listItem);
            listItem.fadeIn();
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
