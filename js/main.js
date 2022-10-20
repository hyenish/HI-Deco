/**************** 공통 헤더 ****************/
$('.gnb_btn').click(function(){
  $(this).toggleClass('on');
  $('.gnb').slideToggle(00);
});

$(window).resize(function(){
  let winW = $(window).width();
  //브라우저의 가로길이를 재서 변수에 넣음
  console.log('브라우저의 가로길이 : ', winW);

  if( winW >= 768 && $('nav').is(':hidden')){
      console.log('nav가 안보여');
      $('nav').removeAttr('style');
  };
});

/************** 슬릭 ***************/
//인덱스 비주얼
$('.visual').slick({
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000
});

//인덱스 special 반응형
$('.special .item_wrap').slick({
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1143,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

//인덱스 insta 반응형
$('.insta .item_wrap').slick({
  // infinite: true,
  // speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1143,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});
//서브페이지 best
$('.best .item_wrap').slick({
});