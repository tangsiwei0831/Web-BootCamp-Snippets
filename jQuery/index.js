// $(document).ready(function(){
//     $('h1').css('color', 'red');
//     // $('h1').addClass('big-title margin-50') several classes
//     // removeClass()
//     // hasClass()
//     $('h1').text('Bye');
//     $('button').text("Don't click me");
//     $('button').html("<em>hey</em>");
//     console.log($('img').attr('src'));
//     $('a').attr('href', 'https://www.yahoo.com');

//     $('h1').click(function(){
//         $('h1').css('color', 'purple');
//     })
// })
// for(var i = 0; i < 5; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function(){
//         document.querySelector('h1').style.color = ' purple';
//     });
// }

// $('button').click(function(){
//     $('button').css('color', 'purple');
// })

$(document).keypress(function(event){
   $('h1').text(event.key);
});

$('h1').on('mouseover', function(){
    // $('h1').css('color', 'purple');
    // $('h1').hide();//show()
})

$('h1').before('<button>New</button>');//add button before h1 element
// after
// prepend - button add in h1 before text
// append - button add in h1 after text

$('button').on('click', function(){
    // $('h1').toggle();//fadetoggle()
    // slidedown() slideup() slidetoggle()
    // $('h1').animate({opacity: 0.5});
    $('h1').slideUp().slideDown().animate({opacity:0.5})
})



