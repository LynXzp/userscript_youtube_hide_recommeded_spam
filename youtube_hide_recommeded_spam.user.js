// ==UserScript==
// @name        youtube_hide_recommeded_spam
// @namespace   body
// @include     *youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var timerId = setInterval(
  function() {
    var elems = document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer');
    for(var i=7; i<elems.length; i++)
      { 
        var elems2 = elems[i].getElementsByClassName('style-scope ytd-video-meta-block');
        for(var j=0; j<elems2.length; j++)
        
        //if( elems2[j].innerHTML == 'Recommended for you')
        if(( elems2[j].innerHTML.indexOf('Recommended for you') == 0 )
          ||
           ( elems2[j].innerHTML.indexOf('Рекомендуемые вам') == 0 ))
          elems[i].style.display = 'none'
      }
  },
5000);
