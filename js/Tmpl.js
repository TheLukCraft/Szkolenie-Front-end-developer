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
