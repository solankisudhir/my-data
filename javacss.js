$('div').click(function(){
    var html = ['following style:'];

    var styleprops = $(this).css([
        "width","height","color","background-color"
    ]);
    $(this).css("color")
    $(this).css("color","red")
    console.log(styleprops);
    
    $.each(styleprops , function(prop, value){
        console.log(prop + value);
        html.push(prop +":"+ value)
    })
    $('#lorem').html(html.join('<br>'))
})