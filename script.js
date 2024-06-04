
  $(document).ready(function(){
//  For Navbar
    $('.nav-link').mouseenter(function(){
     
      $(this).css({'color':'white'});

    });
    $('.nav-link').mouseleave(function(){
     
      $(this).css({'color':'gray'});

    });
// For Footer -1
    $('.list-group-item').mouseenter(function(){
     
      $(this).css({'color':'white'});
    });
    $('.list-group-item').mouseleave(function(){
     
      $(this).css({'color':'gray'});

    });
// Footer -2
    $('footer a').mouseenter(function(){
     
      $(this).css({'color':'white'});
      $(this).css({'text-decoration':'underline'});
    });
    $('footer a').mouseleave(function(){
     
      $(this).css({'color':'gray'});
      
    });

  });
