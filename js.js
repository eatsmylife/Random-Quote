$(document).ready(function () {
    /*
    $.ajax({
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function (response) {
                var r = JSON.parse(response);
                currentQuote = r.quote;
                currentAuthor = r.author;
                $("#quote-content").text(r.quote);
                $("#quote-author").html('&mdash; ' + r.author);
            }
        });
    */
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
        dataType: 'jsonp',
        jsonpCallback: 'mycallback',
        success: function (data) {
            $("#quote-content").html(data[0].content);
            $("#quote-author").html('&mdash; ' + data[0].title);
        }
    });
    $("#getQuote").click(function () {

        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
            dataType: 'jsonp',
            jsonpCallback: 'mycallback',
            success: function (data) {
                $("#quote-content").html(data[0].content);
                $("#quote-author").html('&mdash; ' + data[0].title);
            }
        });
        /*
        $.ajax({
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function (response) {
                var r = JSON.parse(response);
                currentQuote = r.quote;
                currentAuthor = r.author;
                $("#quote-content").text(r.quote);
                $("#quote-author").html('&mdash; ' + r.author);
            }
        });
        */
    });
});

function tweet() {
    var content = document.getElementById('quote-content').innerHTML;
    var author = document.getElementById('quote-author').innerHTML;
    window.open('https://twitter.com/intent/tweet?hashtags=EatsMyLife' + '&text=' + content + author, '_blank');
}