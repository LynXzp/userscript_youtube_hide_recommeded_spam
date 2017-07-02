// ==UserScript==
// @name        youtube_hide_recommeded_spam
// @namespace   body
// @include     *youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var timerId = setInterval(
  function() {
    var RecomBlock = document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer');
    for(var i=5; i<RecomBlock.length; i++)
      { 

        var annoying1 = RecomBlock[i].getElementsByClassName('style-scope ytd-video-meta-block');
        for(var j=0; j<annoying1.length; j++)
           if(( annoying1[j].innerHTML.indexOf('Recommended for you') == 0 )
                ||
                ( annoying1[j].innerHTML.indexOf('Рекомендуемые вам') == 0 ))
             RecomBlock[i].style.display = 'none'
          
        var annoying2 = RecomBlock[i].getElementsByClassName('style-scope ytd-badge-supported-renderer');
        for(var j=0; j<annoying2.length; j++)
           if(( annoying2[j].innerHTML.indexOf('New') == 0 )
                ||
                ( annoying2[j].innerHTML.indexOf('Новое') == 0 ))
             RecomBlock[i].style.display = 'none'
          
      }
  },
5000);
