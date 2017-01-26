var arr = [
'Trump', 'trump', 'Obama', 'obama', 'Politics', 'politics', 'Ivanka', 'Melania', 'EPA', 'Bush', 'Political', 'Policy', 'Clinton', 'Court', 'President',
'politics', 'Democrat', 'Republican', 'Democrats', 'Republicans', 'Dems', 'United States', "Congress", "congress", "Capitalism"
];

$(document).ready(function() {
  var i=0;
  for (; i<arr.length; i++) {
    $("div:contains('"+arr[i]+"')").each(function() {
      $(this).closest('div.userContentWrapper').addClass('blur');
    });
  }
});

$(window).scroll(function() {
  var i=0;
  for (; i<arr.length; i++) {
    $("div:contains('"+arr[i]+"')").each(function() {
      $(this).closest('div.userContentWrapper').addClass('blur');
    });
  }
  var blockedPosts = $('.blur');
  $('body').prepend("<div class='btn'>Blocked Posts:" + blockedPosts.length + "</div>");
});


$('.btn').click(function() {
  $('.blur').css({
   'opacity' : '1',
   'filter' : 'blur(0px)'
  });
});
