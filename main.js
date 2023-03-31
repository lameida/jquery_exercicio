$(document).ready(function() {
    $('#adicionar').on('click', function(e){
        e.preventDefault();
       
        
        var taskName = $('#nome-tarefa').val();
        if (taskName !== '') {
            $('ul').append('<li>' + taskName + '</li>');
            $('#nome-tarefa').val('');
                    
    }
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completo');
    });    
    });
    

});

    
    
    



