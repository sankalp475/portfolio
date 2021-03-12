let hemburger = document.getElementById("hemburger");
let navbar = document.getElementById("navbar");
let menu = document.getElementById("ul");
let brand = document.getElementById("logo");
let list = document.getElementById("scrollColor");
let list1 = document.getElementById("scrollColor2");
let list2 = document.getElementById("scrollColor3");
let list3 = document.getElementById("scrollColor4");
let list4 = document.getElementById("scrollColor5");
let list5 = document.getElementById("scrollColor6");
var color = document.getElementById("color-link");
var color2 = document.getElementById("color-link2");
function toggleFn() {

    if (menu.style.display == "block") {
		menu.style.display = "none";
		navbar.style.height = "80px";
		navbar.style.transition = ".6s linear";
	} else {
		menu.style.display = "block";
		navbar.style.height = "80px";
		navbar.style.transition = ".6s linear";
	}
    
}
function iconClick() {
	hemburger.classList.toggle("change");
}
function clickToggle() {
	toggleFn();
	iconClick(hemburger);
}
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
function ColorChange(){

	if (window.innerWidth < 900) {
		if (window.scrollY > window.innerHeight / 3) {
			navbar.style.background = "#854fee";
            navbar.style.transition = " .2s linear";
		    list.style.color = "#000";
		    list1.style.color = "#000";
		    list2.style.color = "#000";
		    list3.style.color = "#000";
		    list4.style.color = "#000";
		    list5.style.color = "#000";
			menu.style.background = "#fff";	
			menu.style.border = "2px solid #000";	
			menu.style.borderRadius = "12px";
			color.style.color = "#fff";
            color2.style.color = "#fff";
            bar1.style.background = "#fff";
            bar2.style.background = "#fff";
            bar3.style.background = "#fff";	
			brand.style.color = " #fff";
		} else if (window.scrollY < window.innerHeight) {
			navbar.style.background = "transparent";
			list.style.color = "#fff";
            list1.style.color = "#fff";
            list2.style.color = "#fff";
            list3.style.color = "#fff";
            list4.style.color = "#fff";
            list5.style.color = "#fff";
            menu.style.background = "#000";
            menu.style.border = "none";
            menu.style.borderRadius = "12px";
			color.style.color = "#000";
            color2.style.color = "#000";
            bar1.style.background = "#000";
            bar2.style.background = "#000";
            bar3.style.background = "#000";
			brand.style.color = " #000";
		}
	} else if (window.innerWidth > 900) {
        if (window.scrollY > window.innerHeight / 3) {
            navbar.style.background = "#854fee";
            navbar.style.transition = " .2s linear";
            brand.style.color = " #fff";
            list.style.color = "#fff";
            list1.style.color = "#fff";
            list2.style.color = "#fff";
            list3.style.color = "#fff";
            list4.style.color = "#fff";
            list5.style.color = "#fff";
            color.style.color = "#fff";
            color2.style.color = "#fff";
            bar1.style.background = "#fff";
            bar2.style.background = "#fff";
            bar3.style.background = "#fff";
        } else if (window.scrollY < window.innerHeight) {
            navbar.style.background = "transparent";
            brand.style.color = " #000";
            list.style.color = "#000";
            list1.style.color = "#000";
            list2.style.color = "#000";
            list3.style.color = "#000";
            list4.style.color = "#000";
            list5.style.color = "#000";
            color.style.color = "#000";
            color2.style.color = "#000";
            bar1.style.background = "#000";
            bar2.style.background = "#000";
            bar3.style.background = "#000";
        }

	}
    
}

window.addEventListener("scroll", ColorChange);




// onclick = "clickToggle();";