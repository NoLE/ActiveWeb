/*
      // Function for intro
      $('.enter_btn').on('click',function(){
        $('.enter').addClass('showme');

        $('.enter_btn').animate({top: '-200%'},500);
        $('.divider').delay(20).animate({left: '-200%'},800);
        $('.copyright').delay(30).animate({right: '-200%'},700);

        var time = setTimeout(function(){
          $('.enter').addClass('hideme');
          $('body').css('overflow','auto');
          clearTimeout(time);
        },2000);
      });
*/









///////////////////////
// ----------------- //
//                   //
//   Another intro   //
//        For        //
//      Codepen      //
//                   //
// ----------------- //
///////////////////////

// js.run();
var js = (function(){

  //  strict mode
  'use strict';

  // return functions
  return {

    // console.log info
    info:{
      'debug': true,
      'author':'ActiveWeb / Lito',
      'description':'Web Firts',
      'date':'02/07/15',
      'url':'http://www.activeweb.cl'
    },

    // Call functions here
    run: function(){
      this.fns();
      this.Copyright();
    },

    // run with this.debug(foo);
    debug: function(el){
      if(typeof console != 'undefined')
        if(this.info.debug){console.clear();console.log('%c'+el,'color:blue;');}
        else{console.clear();}
    },

    // functions
    fns: function(){
      // Function for intro
      $('.enter_btn').on('click',function(){
        $('.enter').addClass('showme');
        $('.enter_btn').animate({top: '-200%'},500);
        $('.divider').delay(20).animate({left: '-200%'},800);
        $('.copyright').delay(30).animate({right: '-200%'},700);

        var time = setTimeout(function(){
          $('.enter').addClass('hideme');
          $('body').css('overflow','auto');
          clearTimeout(time);
        },2000);
      });

    },
    
    
    // Show info in console log
    Copyright: function(){
      // info template
       var copyright = 'Author: '+ this.info.author + '\n'+
          'Description: ' + this.info.description + '\n'+
          'Date: ' + this.info.date + '\n'+
          'Url: ' + this.info.url;
      // run in console.log
      this.debug(copyright);
    }

  }; // end of return 

}).call(this);

// Call functions
js.run();

    (function(){
      var aboutEl = $('.Design-Containeriphone'),
      aboutElOffset = aboutEl.offset().top/2,
      documentEl = $(document);

      documentEl.on('scroll', function() {
        if(documentEl.scrollTop() > 730)aboutEl.addClass('animation-start');
        else 
          aboutEl.removeClass('animation-start');
    });
                })();
    (function(){
      var aboutEl = $('.Design-Containeripad'),
      aboutElOffset = aboutEl.offset().top/2,
      documentEl = $(document);

      documentEl.on('scroll', function() {
        if(documentEl.scrollTop() > 750)aboutEl.addClass('animation-start2');
        else 
          aboutEl.removeClass('animation-start2');
    });
                })();

