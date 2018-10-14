(function($) {

  $(document).ready(function() {

    $('a[href*=\\#]').on('click', function(event) {
      var target = this.hash;
      if (jQuery(target).length) {
        event.preventDefault();
        jQuerytarget = $(target);
        jQuery('html, body').stop().animate({
          'scrollTop': jQuerytarget.offset().top
        }, 600, 'swing', function() {
          window.location.hash = target;
          //jQuery(document).on("scroll", onScroll);
        });
      }
    });

    $('img').attr('draggable', 'false');


    $(window).on("load", function() {
      if ($(window).innerWidth() <= 976 && $(".navbar-toggle").hasClass("collapsed")) {
        jQuery(document).on('click', function() {
          jQuery('.collapse').collapse('hide');
        })
      }
    });
    $(window).on("resize", function() {
      if ($(window).innerWidth() <= 976 && $(".navbar-toggle").hasClass("collapsed")) {
        $(document).on('click', function() {
          $('.collapse').collapse('hide');
        })
      }
    });

    $(function() {
      $(window).scroll(function() {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
          $('body').removeClass('scrolled');
        } else if (top_offset >= 250) {
          $('body').addClass('scrolled');
        }
      })
    });
    $(function() {
      $(window).scroll(function() {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
          $('.path-frontpage').removeClass('scrolled');
        } else if (top_offset >= 50) {
          $('.path-frontpage').addClass('scrolled');
        }
      })
    });
  });



  $(window).on("load", function() {
    if ($(window).innerWidth() <= 976) {
      // $('.ktc-header').css('position', 'relative');
      $(function() {
        $(window).scroll(function() {
          var top_offset = $(window).scrollTop();
          if (top_offset == 0) {
            $('body').removeClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '0px');
            $('.ktc-header').css('position', 'relative');
          } else if (top_offset >= 250) {
            $('body').addClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '90px');
            $('.ktc-header').css('position', 'fixed');
          }
        })
      });
      var top_offset = $(window).scrollTop();
      if (top_offset == 0) {
        $('body').removeClass('scrolled');
        // $('body:not(.path-frontpage)').css('padding-top', '0px');
        $('.ktc-header').css('position', 'relative');
      } else if (top_offset >= 250) {
        $('body').addClass('scrolled');
        // $('body:not(.path-frontpage)').css('padding-top', '90px');
        $('.ktc-header').css('position', 'fixed');
      }
    } else if ($(window).innerWidth() >= 977) {
      $('.ktc-header').css('opacity', '1');
      $('.get-the-kit').css('opacity', '1');
      $(function() {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
          setTimeout(function() {
            // $('.page-node-9 .ktc-header').css('opacity', '1');
            // $('.page-node-9').css('padding-top', '60px');
            $('body:not(.page-node-9) .ktc-header').css('opacity', '0.7');
            $('.get-the-kit').css('opacity', '0.5');
          }, 5000);
        } else if (top_offset >= 250) {
          $('body').addClass('scrolled');
          $('.ktc-header').css('opacity', '1');
          $('.get-the-kit').css('opacity', '1');
        }
      });
      $('.ktc-header').css('position', 'fixed');
      // $('.page-node-9 .ktc-header').css('opacity', '1');
      // $('.page-node-9 .ktc-header').css('position', 'relative');
      $(function() {
        $(window).scroll(function() {
          var top_offset = $(window).scrollTop();
          if (top_offset == 0) {
            setTimeout(function() {
              $('.ktc-header').css('opacity', '0.7');
              $('.get-the-kit').css('opacity', '0.5');
            }, 1000);
          }
        })
      });

    }
  });

  $(window).on("resize", function() {
    if ($(window).innerWidth() >= 977) {
      $('.ktc-header').css('position', 'fixed');
      $(function() {
        $(window).scroll(function() {
          var top_offset = $(window).scrollTop();
          if (top_offset == 0) {
            $('body').removeClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '0px');
            $('.ktc-header').css('position', 'fixed');
          } else if (top_offset >= 250) {
            $('body').addClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '90px');
            $('.ktc-header').css('position', 'fixed');
          }
        })
      });
    } else if ($(window).innerWidth() <= 976) {
      var top_offset = $(window).scrollTop();
      if (top_offset <= 150) {
        $('.ktc-header').css({
          position: 'relative',
          top: '0',
          left: '0',
          right: '0',
          background: '#ffffff'
        });
      } else if (top_offset >= 151) {
        $('.ktc-header').css({
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          background: '#ffffff'
        });
      }
      $('.ktc-header').css('z-index', '2');
      $(function() {
        $(window).scroll(function() {
          var top_offset = $(window).scrollTop();
          if (top_offset == 0) {
            $('body').removeClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '0px');
            $('.ktc-header').css('position', 'relative');
          } else if (top_offset >= 250) {
            $('body').addClass('scrolled');
            // $('body:not(.path-frontpage)').css('padding-top', '90px');
            $('.ktc-header').css('position', 'fixed');
          }
        })
      });
    }
  });

  $(window).on("load", function() {
    if ($(window).innerWidth() <= 976) {
      $("#recipe-for-beginners").appendTo('.main-inner');
      $("#process").appendTo('.process-row1');
      $('.sidebar-inner-proc .anchor-up').appendTo('.process');
      $("#white-blossom-recipe").appendTo('.rcp1-main .main-inner');
      $("#lush-green-recipe").appendTo('.rcp2-main .main-inner');
      $('.rcp2-main .anchor-up').appendTo('.rcp2-main .comp-recp-content');
    } else if ($(window).innerWidth() >= 977) {
      $("#recipe-for-beginners").prependTo('.main-inner');
      $("#process").prependTo('.process-row1');
      $('.process .anchor-up').appendTo('.process-subtitle');
      $("#white-blossom-recipe").prependTo('.rcp1-main .comp-recp-content');
      $("#lush-green-recipe").appendTo('.rcp2-main .main-inner');
      $('.rcp2-main .anchor-up').appendTo('.rcp2-main .sidebar-subtitle');
    }
  });
  $(window).on("resize", function() {
    if ($(window).innerWidth() <= 976) {
      $("#recipe-for-beginners").appendTo('.main-inner');
      $("#process").appendTo('.process-row1');
      $('.sidebar-inner-proc .anchor-up').appendTo('.process');
      $("#white-blossom-recipe").appendTo('.rcp1-main .main-inner');
      $("#lush-green-recipe").appendTo('.rcp2-main .main-inner');
      $('.rcp2-main .anchor-up').appendTo('.rcp2-main .comp-recp-content');
    } else if ($(window).innerWidth() >= 977) {
      $("#recipe-for-beginners").prependTo('.main-inner');
      $("#process").prependTo('.process-row1');
      $('.process .anchor-up').appendTo('.process-subtitle');
      $("#white-blossom-recipe").prependTo('.rcp1-main .comp-recp-content');
      $("#lush-green-recipe").appendTo('.rcp2-main .main-inner');
      $('.rcp2-main .anchor-up').appendTo('.rcp2-main .sidebar-subtitle');
    }
  });


})(jQuery);
