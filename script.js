var works = {
	"01" : {
		"ArticaleClass" : "works__article",
		"link" : "https://skillbox.ru/",
		"img" : "img/image_1.png",
		"title" : "Grand Motel gets an&nbsp;identity brushup",
		"text" : "Identity"
	},
	"02" : {
		"ArticaleClass" : "works__article",
		"link" : "https://skillbox.ru/",
		"img" : "img/image_2.png",
		"title" : "Fresh branding for a&nbsp;creative startup",
		"text" : "Identity"
	},
	"03" : {
		"ArticaleClass" : "works__article",
		"link" : "https://skillbox.ru/",
		"img" : "img/image_3.jpg",
		"title" : "UX-design. Мy work time",
		"text" : "Identity"
	},

	"04" : {
		"ArticaleClass" : "works__article",
		"link" : "https://skillbox.ru/",
		"img" : "img/image_4.jpg",
		"title" : "Motobike model",
		"text" : "Identity"
	},

	"05" : {
		"ArticaleClass" : "works__article",
		"link" : "https://skillbox.ru/",
		"img" : "img/image_5.jpg",
		"title" : "Work table",
		"text" : "Identity"
	}
};

console.log(works);
var out = '';
for (var key in works) {
	out+='<article class="col column-works '+works[key].ArticaleClass+'">';
	out+='<a href="'+works[key].link+'" class="works-box" title="'+works[key].title+'">';
	// <img src="">
	out+='<img class="works-box__img" alt="'+works[key].title+'" src="'+works[key].img+'">';
	out+='<div class="works-box__text">'
	out+='<h3 class="works__h3">'+works[key].title+'</h3>';
	out+='<p class="works__p">'+works[key].text+'</p>';
	out+='</div>';
	out+='</a>';
	out+='</article>';
}
document.getElementById('out').innerHTML= out ;

