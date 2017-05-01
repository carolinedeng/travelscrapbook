$(document).ready(polaroid);
var imgsArray = ["bird", "toucan"];

function generateRandomForArray() {
    var num = Math.floor(Math.random() * 8);
    return num;
}

function generateRandom() {
    var num = Math.floor(Math.random() * 400);
    return num;
}

function showLetter() {
    var image = imgsArray[generateRandomForArray()];
    $("div").append("<img src='GameHTML5/images/" + letter + ".png'>");
    var left = generateRandom();
    var top = generateRandom();
    $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
}