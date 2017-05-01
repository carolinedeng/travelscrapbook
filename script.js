$(document).ready(polaroid);
var images = [
{src:"bird.jpg"},
{src:"toucan.jpg"},
];

function generateRandomForArray() {
	for (var i =0; i < images.length; i++) {
    var num = Math.floor(Math.random() * 8);
    return num;
	}
}

function generateRandom() {
    var num = Math.floor(Math.random() * 400);
    return num;
}

function showImage() {
    var image = images[generateRandomForArray()];
    $("div").attr('src', image.src);
    var left = generateRandom();
    var top = generateRandom();
    $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
}