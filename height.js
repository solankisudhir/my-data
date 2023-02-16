$("div").one("click",function(){
    console.log($(this).height(50));

    $(this).width(30).css({
        cursor:"auto",
        backgroundcolor:"green"

    });
 });