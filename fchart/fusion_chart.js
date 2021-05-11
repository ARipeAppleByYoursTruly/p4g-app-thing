var clickedArcana = [];

$.fn.toggleLight = function(){
  if(clickedArcana.includes($(this).html())){
    clickedArcana.splice(clickedArcana.indexOf($(this).html()), 1);
  } else {
    switch($(this).html()){
      case '(xx/xxx)':
      case '(xy)':
      case '(xyz)':
      case '':
        break;
      
      default:
        clickedArcana.push($(this).html());
        break;
    }
  }
  
  $('th, td').each(function(){
    if(clickedArcana.includes($(this).html())){
      $(this).off('mouseleave');
    } else {
      $(this).on('mouseleave', function(){
        $(this).mLeave();
      });
    }
  });
};

$.fn.mLeave = function(){
  let holder1 = $(this).html();
  
  $('th, td').each(function(){
    if($(this).html() == holder1){
      if($(this).hasClass('same_f')){
        $(this).css('background-color', '#030303');
        
      } else if($(this).hasClass('double_f')){
        $(this).css('background-color', '#a1f8ff');
        
      } else if($(this).hasClass('triple_f')){
        $(this).css('background-color', '#ffe099');
      }
    }
  });
}

$('th, td').on({
  mouseenter: function(){
    switch($(this).html()){
      case 'Fool':
        $("th:contains('Fool'), td:contains('Fool')").css('background-color', '#e0e0e0');
        break;
      
      case 'Magician':
        $("th:contains('Magician'), td:contains('Magician')").css('background-color', '#1e53d9');
        break;
      
      case 'Priestess':
        $("th:contains('Priestess'), td:contains('Priestess')").css('background-color', '#ff1774');
        break;
      
      case 'Empress':
        $("th:contains('Empress'), td:contains('Empress')").css('background-color', '#ff66a3');
        break;
      
      case 'Emperor':
        $("th:contains('Emperor'), td:contains('Emperor')").css('background-color', '#c233ff');
        break;
      
      case 'Hierophant':
        $("th:contains('Hierophant'), td:contains('Hierophant')").css('background-color', '#33adff');
        break;
      
      case 'Lovers':
        $("th:contains('Lovers'), td:contains('Lovers')").css('background-color', '#ff3dc5');
        break;
      
      case 'Chariot':
        $("th:contains('Chariot'), td:contains('Chariot')").css('background-color', '#fff759');
        break;
      
      case 'Justice':
        $("th:contains('Justice'), td:contains('Justice')").css('background-color', '#fafafa');
        break;
      
      case 'Hermit':
        $("th:contains('Hermit'), td:contains('Hermit')").css('background-color', '#ff2e2e');
        break;
      
      case 'Fortune':
        $("th:contains('Fortune'), td:contains('Fortune')").css('background-color', '#00e846');
        break;
      
      case 'Strength':
        $("th:contains('Strength'), td:contains('Strength')").css('background-color', '#0ee3c3');
        break;
      
      case 'Hanged Man':
        $("th:contains('Hanged Man'), td:contains('Hanged Man')").css('background-color', '#a8b8e0');
        break;
      
      case 'Death':
        $("th:contains('Death'), td:contains('Death')").css('background-color', '#7a7a7a');
        break;
      
      case 'Temperance':
        $("th:contains('Temperance'), td:contains('Temperance')").css('background-color', '#ffa42e');
        break;
      
      case 'Devil':
        $("th:contains('Devil'), td:contains('Devil')").css('background-color', '#ba0b0b');
        break;
      
      case 'Tower':
        $("th:contains('Tower'), td:contains('Tower')").css('background-color', '#b9e028');
        break;
      
      case 'Star':
        $("th:contains('Star'), td:contains('Star')").css('background-color', '#8533ff');
        break;
      
      case 'Moon':
        $("th:contains('Moon'), td:contains('Moon')").css('background-color', '#b7ff80');
        break;
      
      case 'Sun':
        $("th:contains('Sun'), td:contains('Sun')").css('background-color', '#ffa66b');
        break;
      
      case 'Judgement':
        $("th:contains('Judgement'), td:contains('Judgement')").css('background-color', '#b8b8b8');
        break;
      
      case 'Jester':
        $("th:contains('Jester'), td:contains('Jester')").css('background-color', '#780b80');
        break;
      
      case 'Hunger':
        $("th:contains('Hunger'), td:contains('Hunger')").css('background-color', '#780b80');
        break;
      
      case 'Aeon':
        $("th:contains('Aeon'), td:contains('Aeon')").css('background-color', '#ffd500');
        break;
      
      default:
        break;
    }
  },
  
  mouseleave: function(){
    $(this).mLeave();
  },
  
  click: function(){
    $(this).toggleLight();
  }
});

$('#clearSelection').click(function(){
  $('th, td').each(function(){
    if(clickedArcana.includes($(this).html())){
      $(this).on('mouseleave', function(){
        $(this).mLeave();
      });
      
      if($(this).hasClass('same_f')){
        $(this).css('background-color', '#030303');
        
      } else if($(this).hasClass('double_f')){
        $(this).css('background-color', '#a1f8ff');
        
      } else if($(this).hasClass('triple_f')){
        $(this).css('background-color', '#ffe099');
      }
    }
  });
  
  clickedArcana = [];
});