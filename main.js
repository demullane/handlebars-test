// via jordancollier
$(document).ready(function() {

var source   = $("#first-template").html();
var template = Handlebars.compile(source);

var context = {title: "Posting with Handlebars", body: "What is going to happen?"};
var html    = template(context);

 $(".content").append(html);

});

// via cwstewart
// $(function(){
//   var source   = $("#reddit-template").html();
//   var template = Handlebars.compile(source);
//
//   $.ajax({
//     url: "http://www.reddit.com/r/pixelart.json"
//   }).done(function(data) {
//
//     var subReddits = data.data.children;
//
//     var html = template(subReddits);
//      $('body').append(html);
//   });
// });
