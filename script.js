$('#taskInput').keypress(function(event){
    if(event.key === 'Enter'){
        var data = $('#taskInput').val();
        $('#taskList').append($('<li><span>' + data + '</span><i class="fa-solid fa-pen"></i><i class="fa-solid fa-trash"></i> <i class="fa-solid fa-check"></i> </li>')) 

        $('#taskInput').val("");
    }
    
})
$('ul').on('click', '.fa-trash', function(){
    $(this).parent('li').remove();
})
$('ul').on('click', '.fa-check', function(){
    $(this).parent('li').toggleClass('check')
})
$('ul').on('click', '.fa-pen', function(){
//    let newt = prompt("Enter New Task");
   $(this).parent('li').find('span').replaceWith('<input type="text" id="taskNum">')
})
$('ul').on('keypress', '#taskNum' , function(event){
    if(event.key === 'Enter'){
        var newData = $('#taskNum').val();
        $(this).parent('li').find('input').replaceWith('<span>' + newData + '</span>')
    }
})
$('#completed').on('click', function(){
    $('li').not('.check').toggle(500);
})
$('#pending').on('click', function(){
    $('.check').toggle(500);
})
$('#all').on('click', function(){
    $('li').show(500)
})