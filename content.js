// Array for Political Keywords to Block
var arr = [
'Trump', 'Trümp', 'Obama', 'Hillary', 'Clinton', 'Bush', 'Politics', 'politics', 'political',
'President', 'Democrat', 'Republican', 'Democrats', 'Republicans', 'Pence', 'White House', 'Immigration', 'immigration',
'Melania', 'Ivanka', 'U.S.', 'House of Representatives', 'Constitution', 'Green Card', 'Supreme Court', 'Government',
'government'
];

// Document Ready - Blur Posts, Create Action Bar, Setup Switch and Tip Window
$(document).ready(function() {

  var hiddencookie = readCookie('hidecookie');
  var blurrycookie = readCookie('blurrycookie');

  console.log(hiddencookie);
  console.log(blurrycookie);

  if ((hiddencookie) == null) {
    if ((blurrycookie) == null) {
      createCookie('hidecookie','hidecookie',7);
    }
  }

  // Temporary Fix to Blocked Logins
  if ($('body').hasClass('home') ||
      $('body').hasClass('timelineLayout')) {

      // Create Action Bar
      $('body').prepend("<div class='blurred-posts-count'> <div class='layout'> <span class='govt'></span> Political Posts Blocked: <span class='blocked-posts-num'>--</span> <div class='navbar-actions'> <div class='switch white'> <input type='radio' name='switch' id='switch-off' checked> <input type='radio' name='switch' id='switch-on'> <label for='switch-off'>Hide</label> <label for='switch-on'>Blur</label> <span class='toggle'></span> </div> <div class='cog'></span><span>|</span></div> <div class='cog-window'> <span class='tip-title'>Blocked Keywords</span> <span class='tip-subtitle'>Add or remove a keyword below.</span> <input type='text' id='name' placeholder='New Keyword'> <a href='#' id='add-btn'>Add</a> <ul id='list'> </ul> </div> <div class='tip'><span>|</span> Tip</div> <div class='tip-window'> <span class='tip-title'>Enjoying the extension?</span> <span class='tip-subtitle'>Leave a tip.</span> <span class='dollars'><a href='https://www.paypal.me/alexhendershott/1'>$1.00</a></span> <span class='dollars'><a href='https://www.paypal.me/alexhendershott/5'>$5.00</a></span> <span class='dollars'><a href='https://www.paypal.me/alexhendershott/10'>$10.00</a></span> <span class='tip-contact'>Improvement ideas? <a href='mailto:alex.hendershott@gmail.com'>Email me</a>.</span> </div> </div> </div></div>");

      // Hide Posts and Set Switch Position
      var x = readCookie('hidecookie')
      if (x) {
        // console.log("HC");
        $("#switch-off").prop( "checked", true );

        var i=0;
        for (; i<arr.length; i++) {
          $("div.userContentWrapper:contains('"+arr[i]+"')").each(function() {
            $(this).closest('div.userContentWrapper').addClass('hidden-post');
            $(this).closest('div.userContentWrapper').parent().parent().addClass("noborder");
          });
        }
      }

      // Blur Posts and Set Switch Position
      var y = readCookie('blurrycookie')
      if (y) {
        // console.log("BC");
        $("#switch-on").prop( "checked", true );

        var i=0;
        for (; i<arr.length; i++) {
          $("div.userContentWrapper:contains('"+arr[i]+"')").each(function() {
            $(this).closest('div.userContentWrapper').addClass('blurred-post');
            $(this).closest('div.userContentWrapper').parent().parent().addClass("noborder");
          });
        }
      }

      // Setup Switch and Adjust CSS to Position
      $(".switch").click(function() {
        var f = readCookie('hidecookie')
        var u = readCookie('blurrycookie')
        if (f) {
          createCookie('hidecookie','hidecookie',-1);
          createCookie('blurrycookie','blurrycookie',7);
          $('.hidden-post').css({'display': 'block', 'filter': 'blur(5px)', 'opacity': '.3'});
          $('.blurred-post').css({'display': 'block', 'filter': 'blur(5px)', 'opacity': '.3'});
        }
        if (u) {
          createCookie('blurrycookie','blurrycookie',-1);
          createCookie('hidecookie','hidecookie',7);
          $('.hidden-post').css({'display': 'none'});
          $('.blurred-post').css({'display': 'none'});
        }
      });

      // Make Alex Rich
      $(".tip").click(function() {
        $(".tip-window").toggle();
      });

      // Settings Cog
      $(".cog").click(function() {
        $(this).toggleClass("cog-active");
        $(".cog-window").toggle();
      });
  }

});

// Variable for Detecting if User has Scrolled
var didScroll = false;
// If User Scrolled, then Fire Function
window.onscroll = doThisStuffOnScroll;
// Scroll Function to Fire
function doThisStuffOnScroll() {
    didScroll = true;

    var a = readCookie('hidecookie')
    if (a) {
      var i=0;
      for (; i<arr.length; i++) {
        $("div.userContentWrapper:contains('"+arr[i]+"')").each(function() {
          $(this).closest('div.userContentWrapper').removeClass('blurry-post');
          $(this).closest('div.userContentWrapper').addClass('hidden-post');
          $(this).closest('div.userContentWrapper').parent().parent().addClass("noborder");
        });
      }
    }

    var b = readCookie('blurrycookie')
    if (b) {
      var i=0;
      for (; i<arr.length; i++) {
        $("div.userContentWrapper:contains('"+arr[i]+"')").each(function() {
          $(this).closest('div.userContentWrapper').removeClass('hidden-post');
          $(this).closest('div.userContentWrapper').addClass('blurred-post');
          $(this).closest('div.userContentWrapper').parent().parent().addClass("noborder");
        });
      }
    }
}
// Timeout and Function to do Stuff After User has Scrolled
setInterval(function() {
    if(didScroll) {
        didScroll = false;

        var c = readCookie('hidecookie')
        if (c) {
          var hiddenItems = $('.hidden-post').length
          $('.blocked-posts-num').html(hiddenItems);
        }

        var d = readCookie('blurrycookie')
        if (d) {
          var blurredItems = $('.blurred-post').length
          $('.blocked-posts-num').html(blurredItems);
        }
    }
}, 1000);

// Once User Scrolls 40 Pixels or More, Modify Facebook Left Column Position
$(document).scroll(function() {
  if ($(document).scrollTop() >= 40) {
    $('#pagelet_welcome_box').css("margin-top", "34px");
  } else {
    $('#pagelet_welcome_box').css("margin-top", "0px");
  }
});

// START Javascript Cookies
// Create Javascript Cookie
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Read Javascript Cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Erase Javascript Cookie
function eraseCookie(name) {
    createCookie(name,"",-1);
}
// END Javascript Cookies
