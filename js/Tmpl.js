/*dekaracje let var, const 
let - lokalna zmienna 
właściwości np wysokosc: 10;
*/
const Tmpl = {
	wysokosc :10,
	informacje : function(b, tekst){
		var a =5;
		var wysokosc = this.wysokosc;
		var suma=a+b+wysokosc;
		console.log("suma " + suma);
	},
	zmientlo : function() {
		jQuery('body').addClass('active');
	},
	openMenu : function() {
		jQuery('nav').toggleClass('activeMenu');
		jQuery('nav ul').slideToggle();
	},
	slider : function() {
				jQuery('.lastminute .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					autoplay:true
				},
				1150:{
					items:2,
					autoplay:true
				}
			}
		})
		
	}
}
$(document).ready(function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      console.log(observer);
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    }, {
      root: document.querySelector("#container"),
      rootMargin: "0px 0px 500px 0px"
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = $(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = $(window).scrollTop();
          lazyloadImages.each(function() {
              var el = $(this);
              if(el.offset().top < window.innerHeight + scrollTop + 500) {
                var url = el.attr("data-src");
                el.attr("src", url);
                el.removeClass("lazy");
                lazyloadImages = $(".lazy");
              }
          });
          if(lazyloadImages.length == 0) { 
            $(document).off("scroll");
            $(window).off("resize");
          }
      }, 20);
    }

    $(document).on("scroll", lazyload);
    $(window).on("resize", lazyload);
  }
})