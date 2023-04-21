$(document).ready(function(){
    $(".plus").click(function(){
      var val= $(".number").val();
      val++;
      if(val >= 0){
        $(".number").attr("value", val);
      }
    });
    $(".minus").click(function(){
      var val= $(".number").val();
      val--;
      if(val >= 0){
        $(".number").attr("value", val);
      }
    });
  });

  function onDes(){
    document.getElementById("des-title").style.color=" #2a27e9";
    document.getElementById("des-title").style.borderBottom=" 1px solid #2a27e9";
    document.getElementById("review-title").style.color=" #0B1A48";
    document.getElementById("review-title").style.borderBottom=" none";
    document.getElementById("add-title").style.color=" #0B1A48";
    document.getElementById("add-title").style.borderBottom=" none";
    document.getElementById("description").style.display="block"
    document.getElementById("additional").style.display="none"
    document.getElementById("review").style.display="none"

  }

  function onAdd(){
    document.getElementById("add-title").style.color=" #2a27e9";
    document.getElementById("add-title").style.borderBottom=" 1px solid #2a27e9";
    document.getElementById("des-title").style.color=" #0B1A48";
    document.getElementById("des-title").style.borderBottom=" none";
    document.getElementById("review-title").style.color=" #0B1A48";
    document.getElementById("review-title").style.borderBottom=" none";
    document.getElementById("description").style.display="none"
    document.getElementById("additional").style.display="block"
    document.getElementById("review").style.display="none"

  }
  function onReview(){
    document.getElementById("review-title").style.color=" #2a27e9";
    document.getElementById("review-title").style.borderBottom=" 1px solid #2a27e9";
    document.getElementById("add-title").style.color=" #0B1A48";
    document.getElementById("add-title").style.borderBottom=" none";
    document.getElementById("des-title").style.color=" #0B1A48";
    document.getElementById("des-title").style.borderBottom=" none";
    document.getElementById("description").style.display="none"
    document.getElementById("additional").style.display="none"
    document.getElementById("review").style.display="block"

  }

  $('.preview').each(function(){
    $(this).append($(this).html());
  });
  $('.image').last().addClass('dynamic');
  $('.image').first().addClass('static');
  $('.preview').mousemove(function(e){
      pozition = {
          left: (e.pageX - $(this).offset().left) / $(this).outerWidth(),
          top: (e.pageY - $(this).offset().top) / $(this).outerHeight()
      };
    console.log(pozition.left);
    $('.dynamic.image').css('left', -1 * pozition.left*($('.dynamic.image').outerWidth() - $('.preview').outerWidth())+'px');
    $('.dynamic.image').css('top', -1 * pozition.top*($('.dynamic.image').outerHeight() - $('.preview').outerHeight())+'px');
  });