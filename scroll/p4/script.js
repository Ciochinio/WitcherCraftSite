let navMarker = document.getElementById('nav_signifier');
let navItems = document.getElementById('nav_wrapper').getElementsByClassName("nav_icon");
console.log(navItems);
new fullpage('#app', { 
	paddingTop:'3em',
	anchors: ['slide-1', 'slide-2', 'slide-3', 'slide-4'],
	onLeave: function(o, d, dir){
		// sets 'top' offset depending on slide index
		let index = ((2 * d.index) + 2) + "em";
		navMarker.style.top = index;
		// sets nav item active state depending on slide index
		if(navItems[d.index].classList.contains("active")){
			return null;
		} else {
			navItems[d.index].classList.toggle("active");
		}
		
		// and make sure prior item active state is turned off
		if(navItems[o.index].classList.contains("active")){
			navItems[o.index].classList.toggle("active");
		} else {
			return null;
		}
		
		
	}
});