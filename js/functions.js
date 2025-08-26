
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();

$(window).resize(function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function (callback) {
        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;

            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));

                if (progress >= str.length) {
                    clearInterval(timer);
                    $ele.html(str); // remove the blinking "_"
                    if (typeof callback === "function") {
                        callback(); // call after typing finishes
                    }
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> d <span class=\"digit\">" + hours + "</span> h <span class=\"digit\">" + minutes + "</span> m <span class=\"digit\">" + seconds + "</span> s"; 
	$("#elapseClock").html(result);
}

function timeLeft(target) {
    var now = new Date();
    var seconds = Math.floor((target - now) / 1000);

    if (seconds < 0) {
        $("#elapseClock").html("Time's up!");
        return;
    }
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    var hours = Math.floor(seconds / 3600);
    hours = hours < 10 ? "0" + hours : hours;
    seconds %= 3600;

    var minutes = Math.floor(seconds / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds %= 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var result = `<span class="digit">${days}</span> d <span class="digit">${hours}</span> h <span class="digit">${minutes}</span> m <span class="digit">${seconds}</span> s`; 
    $("#elapseClock").html(result);
}

function showMessages() {
	$('#messages').fadeIn(5000, function() {
		
	});
}
