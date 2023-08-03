(function ($, Drupal, once) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      once('myCustomBehavior', 'html, body', context).forEach(function (element) {
        // Apply the myCustomBehaviour effect to the elements only once.
        
        $('#submit').click(function () {
          var newItem = $('#list').val();
          if (newItem) {
            $('#list-item').append('<li>' + newItem + '</li>');
            $('#list').val('');
            saveToLocalStorage();
          }
        });

        function saveToLocalStorage() {
          // Save the list items to Local Storage
          var todoItems = $('#list-item').html();
          localStorage.setItem('todoItems', todoItems);
      }

      if (localStorage.getItem('todoItems')) 
        {
          $('#list-item').html(localStorage.getItem('todoItems'));
        }
      
      });
    }
  };
})(jQuery, Drupal, once);
