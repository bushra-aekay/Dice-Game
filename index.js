var randomNumber1 = Math.round(5*Math.random())+1;
var newImg1 = 'dice'+ randomNumber1 + '.png';
document.querySelector('img.img1').setAttribute("src","images/" + newImg1);

var randomNumber2 = Math.round(5*Math.random()) + 1; //to round it off and keep the range from 1 to 6.
var newImg2 = 'dice' + randomNumber2 + '.png';
document.querySelector('img.img2').setAttribute("src","images/" + newImg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins.";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 wims";
} else{
    document.querySelector("h1").textContent = "Draw";
}


// Alt code:

// var randomNumber1 = Math.floor(6*Math.random())+1;
// var newImg1 = 'dice'+ randomNumber1 + '.png';
// var randomImageSource = 'images/' + newImg1;
// var image1 = document.querySelector('inmg')[0];
// image1.setAttribute('src', randomImageSource);

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// var randomImageSource2 = 'imaged/dice' + randomNumber2;
// document.querySelectorAll('img')[1].setAttribute("src", randomImageSource2);