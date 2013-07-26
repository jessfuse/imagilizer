//this function performs when the page is loaded. 
// 
//It gives the first image in the sidebar an active class
//
// then clones the image
//
// removes the width to make it full size
//
// then finally appends it to the main panel  
// $(document).ready(function(){
//     $("img:nth-child(1)").addClass('active');
//     $("img:nth-child(1)").clone().removeAttr("width").appendTo('#panel');
// })

//when the page loads
//
//upon clicking one of the side bar images 
//
//it fades out fast 
//
//we call all the images with '#sidebar img' and isolate them individually with thsi 
// $(document).ready(function() {
//   $('#sidebar img').click(function() {
//     $(this).fadeOut('fast');
//   });
// })

//the first block of code:
// 
//gives the image that's clicked a class of active
//
//clones it, removes the width, and appends it to the main panel
//
//the second block of code 
//
//the second block says that when an image without an active class is click
//
//it finds the one with the active class and removes it from the panel and removes its active class 
//
//applies an active class to the one clicked, clones it, removes the width, and appends it to the panel
//
//the last line takes the class caption and adds each active elements attribute data-caption 

// $(document).ready(function() {
//   $('#sidebar img').click(function() {
//     $(this).addClass('active');
//     $(this).clone().removeAttr('width').appendTo('#panel');
//   })

//   $('img').not('.active').click(function(){
//     $('#panel').find('.active').fadeOut('slow');
//     $('.active').removeClass('active');
//     $(this).addClass('active').clone().removeAttr('width').appendTo('#panel');
//     $('.caption').text($('.active').attr('data-caption'));
//   })
// })


