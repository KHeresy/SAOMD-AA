
$( '.btnPageBack' ).bind( 'touchstart', function(){
  $(this).addClass('hover');
}).bind( 'touchend', function(){
  $(this).removeClass('hover');
});

$( '.btnPageNext' ).bind( 'touchstart', function(){
  $(this).addClass('hover');
}).bind( 'touchend', function(){
  $(this).removeClass('hover');
});
