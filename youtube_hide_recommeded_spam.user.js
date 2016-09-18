// ==UserScript==
// @name        youtube_hide_recommeded_spam
// @namespace   body
// @include     *youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var timerId = setInterval(
  function() {
    var elems = document.getElementsByClassName('content-wrapper');

    for(var i=0; i<elems.length; i++)
      { 
        var elems2 = elems[i].getElementsByClassName('stat view-count');
        for(var j=0; j<elems2.length; j++)
      
        if( elems2[j].innerHTML.indexOf('Recommended for you') !== -1 )
          elems[i].style.display = 'none'
      }
  },
5000);
