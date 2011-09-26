/*global jQuery */
/*!	

*/
(function($){
  $orig_warning = $('h2.warning').html();
  $('h2.warning')
    .hover(
      function(){
        $(this).html($(this).attr('data-alt'));
      },
      function(){
        $(this).html($orig_warning);
      });
  //
  SyntaxHighlighter.all();
})(jQuery);