var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var nextQuote = function(data) {
  $(".quote-text").html(data.quoteText);
  var author = data.quoteAuthor;
  if (author.length === 0) {
    author = "Unknown";
  }
  $(".author-text").html("Author: " + author);
  var quote = "https://twitter.com/intent/tweet?text=\"" + data.quoteText + "\" Author: " + author;
  $(".twitterButton").prop("href", quote);
};

$(document).ready(function() {
   $.getJSON(url, nextQuote, 'jsonp');
});

$("#getQuote").click(function() {
  $.getJSON(url, nextQuote, 'jsonp');
})