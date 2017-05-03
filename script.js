var images = [
{src:"images/meiji.jpg"},
{src:"images/ramen.jpg"},
{src:"images/sushi.jpg"},
{src:"images/takoyaki.jpg"},
{src:"images/akihabara.jpg"},
{src:"images/mochi.jpg"},
{src:"images/okonomiyaki.jpg"},
{src:"images/sign.jpg"},
{src:"images/tsukiji.jpg"},
];

function generateRandomForArray() {
	for (var i =0; i < images.length; i++) {
    var num = Math.floor(Math.random() * 8);
    return num;
	}
}

function generateRandom() {
    var num = Math.floor(Math.random() * 800);
    return num;
}

function showImage(img) {
    var image = images[generateRandomForArray()];
    var left = generateRandom();
    var top = generateRandom();
    img.css({"position":"absolute","top": top + "px", "left": left + "px"});
}

$('.polaroid').each(function(i, img){
    var rotation = Math.random() * 90 - 45;
    $(img).css({'transform': 'rotate('+rotation+'deg)'});
    showImage($(img));
});

$('.polaroid').on('click', function(){

});