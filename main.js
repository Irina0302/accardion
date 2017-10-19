$(document).ready(function() {
  
 $('.wrapper>p').not(':first-of-type').hide();
 
  
  $('.wrapper>h1').click(function() {
    
    var findP = $(this).next();
    var findWrapper = $(this).closest('.wrapper');
    
    if (findP.is(':visible')) {
      findP.slideUp('fast');
    }
    else {
      findWrapper.find('>article').slideUp('fast');
      findP.slideDown('fast');
    }
  });
  
});
