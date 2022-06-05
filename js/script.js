$(document).ready(function () {


     $(function () {
          $('.mo_menu_open').click(function(){ 

               $('.mo_menu_close').css({ 
                    'display':'block'
               });

               $('.mo_menu_open').css({ 
                    'display':'none'
               });

               $('nav ul').slideToggle({});

               });

          });
          // 햄버거 메뉴 눌렀을때

          $('.mo_menu_close').click(function () {
               
               $('.mo_menu_close').css({ 
                    'display':'none'
               });
               
               $('.mo_menu_open').css({ 
                    'display':'block'
               });

               $('nav ul').slideToggle({});
          });
          // 햄버거 메뉴 닫기 눌렀을때
   

   
   });
      