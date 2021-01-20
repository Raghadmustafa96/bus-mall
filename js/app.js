'use strict';

var firstImageProduct = document.getElementById('first-image');
var secondImageProduct = document.getElementById('second-image');
var thirdImageProduct = document.getElementById('third-image');
var ViewResultsbutton = document.getElementById('ViewResults');

var myChart2 = document.getElementById('myChart2').getContext('2d');
var myChart4 = document.getElementById('myChart4').getContext('2d');


var firstImageIndex;
var secondImageIndex;
var thirdImageIndex;

var attemptsAllowed = 25;
var attemptsCounter = 0;

var data2 = [];
var data3 = [];
var data4 = [];

var previousRow = [];

function Product(productName, pathImage ,timeShown ,votes){
  this.productName = productName;
  this.pathImage = pathImage;
  this.timeShown = timeShown;
  this.votes = votes;

  Product.prototype.allProduct.push(this);
}

Product.prototype.allProduct = [];

new Product('bag','assets/bag.jpg',0,0);
new Product('banana','assets/banana.jpg',0,0);
new Product('bathroom','assets/bathroom.jpg',0,0);
new Product('boots','assets/boots.jpg',0,0);
new Product('breakfast','assets/breakfast.jpg',0,0);
new Product('bubblegum','assets/bubblegum.jpg',0,0);
new Product('chair','assets/chair.jpg',0,0);
new Product('cthulhu','assets/cthulhu.jpg',0,0);
new Product('dog-duck','assets/dog-duck.jpg',0,0);
new Product('dragon','assets/dragon.jpg',0,0);
new Product('pen','assets/pen.jpg',0,0);
new Product('pet-sweep','assets/pet-sweep.jpg',0,0);
new Product('scissors','assets/scissors.jpg',0,0);
new Product('shark','assets/shark.jpg',0,0);
new Product('sweep','assets/sweep.png',0,0);
new Product('tauntaun','assets/tauntaun.jpg',0,0);
new Product('unicorn','assets/unicorn.jpg',0,0);
new Product('usb','assets/usb.gif',0,0);
new Product('water-can','assets/water-can.jpg',0,0);
new Product('wine-glass','assets/wine-glass.jpg',0,0);

console.log(Product.prototype.allProduct);


firstImageProduct.addEventListener('click',handleUserClick);
secondImageProduct.addEventListener('click',handleUserClick);
thirdImageProduct.addEventListener('click',handleUserClick);

ViewResultsbutton.addEventListener('click',ViewResultsFunction);

function handleUserClick(event){
  attemptsCounter++;
  console.log(event);

  if(attemptsCounter <= attemptsAllowed){
    if(event.target.id === 'first-image'){
      Product.prototype.allProduct[firstImageIndex].votes++;
      Product.prototype.allProduct[firstImageIndex].timeShown++;
      Product.prototype.allProduct[secondImageIndex].timeShown++;
      Product.prototype.allProduct[thirdImageIndex].timeShown++;

    } else if(event.target.id === 'second-image') {
      Product.prototype.allProduct[secondImageIndex].votes++;
      Product.prototype.allProduct[firstImageIndex].timeShown++;
      Product.prototype.allProduct[secondImageIndex].timeShown++;
      Product.prototype.allProduct[thirdImageIndex].timeShown++;

    } else {
      Product.prototype.allProduct[thirdImageIndex].votes++;
      Product.prototype.allProduct[firstImageIndex].timeShown++;
      Product.prototype.allProduct[secondImageIndex].timeShown++;
      Product.prototype.allProduct[thirdImageIndex].timeShown++;
    }

    renderThreeRandomImages();

  }
  else {

    firstImageProduct.removeEventListener('click',handleUserClick);
    secondImageProduct.removeEventListener('click',handleUserClick);
    thirdImageProduct.removeEventListener('click',handleUserClick);
    ViewResultsbutton.disabled = false;
  }
}

//  render Three Random Images and  are not duplicates from the immediate previous set.
function renderThreeRandomImages(){
  do{
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();
  } while(firstImageIndex === previousRow[0] || firstImageIndex === previousRow[1] || firstImageIndex === previousRow[2] || secondImageIndex === previousRow[0] || secondImageIndex === previousRow[1] || secondImageIndex === previousRow[2] || thirdImageIndex === previousRow[0] || thirdImageIndex === previousRow[1] || thirdImageIndex === previousRow[2] || firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex );

  previousRow = [];
  previousRow.push(firstImageIndex);
  previousRow.push(secondImageIndex);
  previousRow.push(thirdImageIndex);

  firstImageProduct.src = Product.prototype.allProduct[firstImageIndex].pathImage;
  secondImageProduct.src = Product.prototype.allProduct[secondImageIndex].pathImage;
  thirdImageProduct.src = Product.prototype.allProduct[thirdImageIndex].pathImage;

  console.log(previousRow);
}

// generate Random Index
function generateRandomIndex(){
  return Math.floor(Math.random() * (Product.prototype.allProduct.length));
}

renderThreeRandomImages();

// calculate Percentage
function customerInterestPrecentage (votes ,timeShown){
  if(votes > 0 || timeShown > 0 ){
    return Math.round(( votes * 100) / timeShown);}
  else{
    return 0 ;
  }
}

// iF add number Of Rounds
var numberOfRoundsForm = document.getElementById('numberOfRoundsForm');
numberOfRoundsForm.addEventListener('submit',numberOfRoundsFunction);

function numberOfRoundsFunction(event){
  event.preventDefault();

  ViewResultsbutton.disabled = true;

  attemptsCounter = 0;
  attemptsAllowed = Number (event.target.numberOfRounds.value);
  console.log(attemptsAllowed);

  data2.length = 0;
  data4.length= 0;

  if(attemptsAllowed <= 0){
    alert('you should fill valid data');
  } else{

    for(var i = 0; i < Product.prototype.allProduct.length; i++){
      Product.prototype.allProduct[i].timeShown = 0;
      Product.prototype.allProduct[i].votes = 0;
    }
    console.log( Product.prototype.allProduct);

    firstImageProduct.addEventListener('click',handleUserClick);
    secondImageProduct.addEventListener('click',handleUserClick);
    thirdImageProduct.addEventListener('click',handleUserClick);
  }
}

function ViewResultsFunction(){
  // show charts

  var labels2 = ['bag', 'banana', 'bathroom', 'boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon', 'pen' ,'pet-sweep' , 'scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
  var colors2 = ['#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62'];
  var colors3 = ['#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974'];
  var colors4 = ['#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52'];


  for(var i = 0; i < Product.prototype.allProduct.length; i++){
    data2.push(Product.prototype.allProduct[i].votes);
    data3.push(Product.prototype.allProduct[i].timeShown);
    data4.push(customerInterestPrecentage( Product.prototype.allProduct[i].votes , Product.prototype.allProduct[i].timeShown ));
  }


  var chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [ {
        data: data2,
        label: 'Number of votes',
        backgroundColor: colors2,
      },{
        data: data3,
        label: 'times Shown',
        backgroundColor: colors3
      },
      ]
    },
    options: {
      title: {
        text: 'The Number of votes and times Shown of product',
        display: true
      },
    }
  });


  var chart4= new Chart(myChart4, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [ {
        data: data4,
        label: 'customer Interest Precentage',
        backgroundColor: colors4
      }]
    },
    options: {
      title: {
        text: 'customer Interest Precentage',
        display: true
      },
    }
  });
}
