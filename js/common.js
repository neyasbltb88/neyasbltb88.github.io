function windowSize(){
  window.win_h = $(window).height(); //Высота окна
}

$(window).on('load resize',windowSize);

$(document).ready(function() {
  var image_placeholder = 'url("img/ico/image.svg")';
  var slider_header_placeholder = 'Введите заголовок';
  var slider_descr_placeholder = 'Введите описание слайда';

  var webhostBut = "\"Hosted on free web hosting 000webhost.com. Host your own website for FREE.\"";
  $("[title="+webhostBut+"]").parent().css("display", "none");

  window.settings_slider = {
    // autoplay: true,
    // rtl: true,
    autoplay: false,        //автоматическое листание
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    accessibility: true,    //листание стрелками клавы
    autoplaySpeed: 5000,    //задержка между автосменой слайдов
    speed: 1000,            //скорость смены слайдов
    dots: false,            //показывать точки
    draggable: true,        //листание мышкой
    swipe: true,            //листание свайпами на телефоне
    touchThreshold: 5,      //чувствитеьность свайпа
    fade: false,            //режим смены слайдов
    // vertical: true,        //вертикальная прокрутка
    verticalSwiping: false, //верткальные свайпы на телефоне
  };
  window.header_slider = $('.header_slider');
  header_slider.slick(settings_slider);


//Response menu button begin
  var menu_button = $('.menu_button_toggle'); //Кнопка меню
  var open_mnu = false;                       //Флаг открытого меню

  menu_button.on('click', function(event) {   //Фукция клика на меню
    $(this).toggleClass('active');            //Вешаем на кнопку меню 'active'
    var main_menu = $(this).next();           //Берем само меню, оно должно располагаться сразу после кнопки в формате ul>li>a
    main_menu.toggleClass('opened_menu');     //Вешаем на него класс открытого меню

    var height_mnu = $(this).height() * main_menu[0].children.length; //Вычисление высоты меню при условии что высота кнопи меню равна выстое одного пункта * на количество пунктов

    
    var mnu_offset = (menu_button.offset().top + menu_button.height()) - $(window).scrollTop(); //Вычисляем положение на экране ниней границы кнопки меню:
    // (отступ от верха документа + высота кнопки) - значение прокрутки окна

    var scroll_value;
    if(win_h - mnu_offset < height_mnu){  //Если под кнопкой меньше места, чем высота меню
      // console.log('Если под кнопкой меньше места, чем высота меню');
      if(win_h > height_mnu + menu_button.height()) {            //Если высота окна больше чем меню
        scroll_value = height_mnu;    //Задаем величину скролла
      } else {                            //Если высота окна меньше чем меню
        // console.log('Если высота окна меньше чем меню');
        scroll_value = menu_button.offset().top;
      }
        
      if(open_mnu) {                      //Если меню открыто
      } else {                            //Если меню закрыто
        // console.log(win_h);
        // console.log(height_mnu);
        // console.log(menu_button.offset().top);
        // console.log(scroll_value);
        $('html, body').animate({         //То скроллим страницу
          scrollTop: scroll_value         //На высоту меню
        }, 300);
      }
    }

    open_mnu = !open_mnu;                 //Переключаем флаг открытия меню
    // console.log(open_mnu);
    
  });
//Response menu button end

//Click on Sitename start
  var old_number_slide;
  var new_number_slide;

  $('.company_name').on('click', function() {

    var slide = document.querySelectorAll('.slide');
    console.log($(slide));
    slide = $(slide[0]).removeClass().addClass('slide');
    
    ++slide[0].children[0].innerText;
    
    // slide[0].children[0].innerText; //Цифра в span
    // slide[0].children[2].children[0].children[0].innerText;  //Заголовок
    // slide[0].children[2].children[0].children[1].innerText; //Описание

    slide[0].style.backgroundImage = image_placeholder;
    slide[0].style.backgroundSize = 'contain';
    slide[0].children[2].children[0].children[0].innerText = slider_header_placeholder;  //Заголовок
    slide[0].children[2].children[0].children[1].innerText = slider_descr_placeholder;  //Описание
    slide[0].classList;
    console.log(slide);

    header_slider.slick('slickAdd', slide[0]);

    header_slider.slick('slickGoTo', slide[0].children[0].innerText - 1);
  });
//Click on Sitename end

// Work tabs start
  var tab_header = $('.tab_header');
  var tab_content = $('.tab_content_wrap');
  // tab_header.eq(0).addClass('active');
  // tab_content.hide().eq(0).addClass('active').fadeIn(300);
    tab_header.on('click', function() {
      tab_header.removeClass('active').eq($(this).index()).addClass('active');
      // $(this).addClass('active');
      tab_content.removeClass('active').hide().eq($(this).index()).show().addClass('active');  //.fadeIn(500)
    });
// Work tabs end

});
