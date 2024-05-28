// Add this script at the end of your HTML or in a separate JS file
document.getElementById('navToggle').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('navList').classList.toggle('open');
});


// Example for embedding a Twitter feed
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}(document, 'script', 'twitter-wjs');
