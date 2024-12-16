var typed = new Typed(".auto-type", {
    strings: ["Designer", "Editor", "Youtuber"],
    typeSpeed: 100,  // Speed of typing (in milliseconds)
    backSpeed: 50,   // Speed of backspacing (in milliseconds)
    startDelay: 500, // Delay before typing starts (in milliseconds)
    backDelay: 1000, // Delay before backspacing starts (in milliseconds)
    loop: true       // Loop the animation
});






$("#stat").waypoint(
    function (direction) {
      $('.counter').each(function () {
        var $this = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: $this.attr('data-stop')
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $this.text(Math.ceil(now));
          }
        });
      });
    }, {
      offset: "75%"
    }
  );