(function($) {
  $(document).ready(function() {
    $('td a[href^="vote"]').click(function(e) {
      var container = $(this).closest('center');
      var link = container.closest('tr').find('td.title a');

      if (link.length == 0) return;

      container.html('<a class="delicious" href="javascript:void(null);"><img src="' + chrome.extension.getURL('assets/delicious_10.png') + '" /></a>');

      container.find('a.delicious').click(function(e) {
        e.preventDefault();

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

        window.open(save_url + 'noui=1&jump=doclose',
                    'deliciousuiv5',
                    'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550');
        container.html('<img src="' + chrome.extension.getURL('assets/checkmark_10.png') + '" alt="" />');
      });
    });
  });
})(jQuery);
