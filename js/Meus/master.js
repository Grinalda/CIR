
$('.btShow').click(function() { 
  $('.areaShow').removeClass('hide');
});

$('.btReset').click(function() { 
  $('.areaShow').css()
});

$('.serieBtn li').click(function() {
  $('.serieBtn li').removeClass('active');
  $(this).addClass('active');
});

$('.navbar-fixed-top').hide();

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-100}, 600, 'linear');
        $('li').delay(1000).removeClass('active');
        $(this).closest('li').addClass('active');
    });
});

