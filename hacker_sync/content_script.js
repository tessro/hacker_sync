(function($) {
  $(document).ready(function() {
    $('td a[href^="vote"]').click(function(e) {
      $(this).unbind('click');
      $(this).hide();
      
      container = $(this).closest('center');
      container.append('<a class="delicious" href="javascript:void(null);"><img src="' + chrome.extension.getURL('assets/delicious_10.png') + '" /></a>')
      
      container.find('a.delicious').click(function(e) {
        e.preventDefault();
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
      
        window.open(save_url + 'noui=1&jump=doclose',
                    'deliciousuiv5',
                    'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550');
	      container.text('<img src="' + chrome.extension.getURL('assets/checkmark_10.png') + '" alt="" />');
      });
    });
  });
})(jQuery);