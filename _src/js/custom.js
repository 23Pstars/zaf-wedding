// requires: jquery-1.8.2.min.js

$(function () {
    // var endDate = "October  26, 2016 09:00:00";
    //
    // $('.countdown.simple').countdown({date: endDate});
    //
    // $('.countdown.styled').countdown({
    //     date: endDate,
    //     render: function (data) {
    //         $(this.el).html("<div>" + this.leadingZeros(data.days, 1) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    //     }
    // });
    //
    // $('.countdown.callback').countdown({
    //     date: +(new Date) + 10000,
    //     render: function (data) {
    //         $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
    //     },
    //     onEnd: function () {
    //         $(this.el).addClass('ended');
    //     }
    // }).on("click", function () {
    //     $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
    // });

    $.backstretch([
        // "img/slides/1.jpg",
        // "img/slides/2.jpg",
        "img/slides/5.jpg",
        "img/slides/4.jpg",
        "img/slides/3.jpg"
    ], {duration: 3000, fade: 1250});

});
