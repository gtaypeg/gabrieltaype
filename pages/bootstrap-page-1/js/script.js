$("#carousel").on("slide.bs.carousel", function (e) {
	$(".carousel-item")[e.from].classList.remove("active-text");
	setTimeout(function () {
		$(".carousel-item")[e.to].classList.add("active-text");
	}, 0);
});

window.onscroll = function () {
	var scrollPos = $(window).scrollTop();
	if (scrollPos > 75) {
		document.getElementById("header-info").style.marginTop = "-45px";
		document.getElementsByTagName("header")[0].style.backgroundColor = "#000";
	} else {
		document.getElementById("header-info").style.marginTop = "0px";
		document.getElementsByTagName("header")[0].style = "";
	}
};

var links = document.querySelectorAll(".nav-item");
var page1 = document.querySelector("#welcome");
var page2 = document.querySelector("#our-story");
var page3 = document.querySelector("#specials");
var page4 = document.querySelector("#our-menu");
var page5 = document.querySelector("#clients-reviews");
var page6 = document.querySelector("#reservartion");
var page7 = document.querySelector("#gallery");
var page8 = document.querySelector("#our-clients");
var page9 = document.querySelector("#contact-us");

window.addEventListener("scroll", function () {
	var scroll = window.scrollY + 50;
	links.forEach((link) => link.classList.remove("active"));

	if (scroll > page1.offsetTop && scroll < page2.offsetTop) {
		links[0].classList.add("active");
	} else if (scroll > page2.offsetTop && scroll < page3.offsetTop) {
		links[1].classList.add("active");
	} else if (scroll > page3.offsetTop && scroll < page4.offsetTop) {
		links[2].classList.add("active");
	} else if (scroll > page4.offsetTop && scroll < page5.offsetTop) {
		links[3].classList.add("active");
	} else if (scroll > page6.offsetTop && scroll < page7.offsetTop) {
		links[4].classList.add("active");
	} else if (scroll > page7.offsetTop && scroll < page8.offsetTop) {
		links[5].classList.add("active");
	} else if (scroll > page9.offsetTop) {
		links[6].classList.add("active");
	}
});

$(".gallery-container").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true,
	},
});
