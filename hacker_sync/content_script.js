(function($) {
  $(document).ready(function() {
    $('td a[href^="vote"]').click(function(e) {
      var link = $(this).closest('tr').find('td.title a');
      var href = link.attr('href');
      var title = link.text();
      
      if (!href.match(/^https?:\/\//)) {
        href = "http://news.ycombinator.com/" + href;
      }
      
      var save_url = 'http://delicious.com/save?url='
                   + encodeURIComponent(href)
                   + '&title='
                   + encodeURIComponent(title)
                   + '&v=5&';

      if (!window.open(save_url + 'noui=1&jump=doclose',
                       'deliciousuiv5',
                       'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550')) {
        location.href = save_url + 'jump=yes';
      }
    });
  });
})(jQuery);
