
$(document).ready(function () {
    var list = document.getElementsByTagName('script');
    var i = list.length, flag = false;
    
    var scriptLocation = 'l2l_website_custom_snippets/static/src/snippets/s_l2l_custom_carousel';
    var scriptName = 'owl-carousel-controller.js'
    
    while (i--) {
        var foundScriptName = list[i].src.substring(list[i].src.lastIndexOf('/') + 1);
        if (foundScriptName === scriptName) {
            flag = true;
            break;
        }
    }
    
    // if we didn't already find it on the page, add it
    if (!flag) {
        var tag = document.createElement('script');
        tag.src = scriptLocation + '/' + scriptName;
        document.getElementsByTagName('head')[0].appendChild(tag);
    }
});