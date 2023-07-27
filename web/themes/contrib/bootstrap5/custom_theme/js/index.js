(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      once('myCustomBehavior', 'html, body', context).forEach(function (element) {
        // Apply the myCustomBehaviour effect to the elements only once.
        $('.card-block').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
        );
        
      });
    }
  };
})(jQuery, Drupal, once);