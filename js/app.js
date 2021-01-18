'use strict';

var firstImageProduct = document.getElementById('first-image');
var secondImageProduct = document.getElementById('second-image');
var thirdImageProduct = document.getElementById('third-image');
var resultsList = document.getElementById('results-list');

var firstImageIndex;
var secondImageIndex;
var thirdImageIndex;

var attemptsAllowed = 25;
var attemptsCounter = 0;

var data2 = [];
var data3 = [];
var data4 = [];

function Product(productName, pathImage){
  this.productName = productName;
  this.pathImage = pathImage;
  this.timeShown = 0;
  this.votes = 0;

  Product.prototype.allProduct.push(this);
}

Product.prototype.allProduct = [];

new Product('bag','assets/bag.jpg');
new Product('banana','assets/banana.jpg');
new Product('bathroom','assets/bathroom.jpg');
new Product('boots','assets/boots.jpg');
new Product('breakfast','assets/breakfast.jpg');
new Product('bubblegum','assets/bubblegum.jpg');
new Product('chair','assets/chair.jpg');
new Product('cthulhu','assets/cthulhu.jpg');
new Product('dog-duck','assets/dog-duck.jpg');
new Product('dragon','assets/dragon.jpg');
new Product('pen','assets/pen.jpg');
new Product('pet-sweep','assets/pet-sweep.jpg');
new Product('scissors','assets/scissors.jpg');
new Product('shark','assets/shark.jpg');
new Product('sweep','assets/sweep.png');
new Product('tauntaun','assets/tauntaun.jpg');
new Product('unicorn','assets/unicorn.jpg');
new Product('usb','assets/usb.gif');
new Product('water-can','assets/water-can.jpg');
new Product('wine-glass','assets/wine-glass.jpg');

console.log(Product.prototype.allProduct);


firstImageProduct.addEventListener('click',handleUserClick);
secondImageProduct.addEventListener('click',handleUserClick);
thirdImageProduct.addEventListener('click',handleUserClick);

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
    var goatResult;
    for(var i = 0; i < Product.prototype.allProduct.length; i++){
      // goatResult = document.createElement('li');
      // goatResult.textContent = Product.prototype.allProduct[i].productName + '--> '+'___' +Product.prototype.allProduct[i].votes + ' votes' + ' ____________  ' + Product.prototype.allProduct[i].timeShown + '  ' + 'times Shown'+'__________________' + customerInterestPrecentage( Product.prototype.allProduct[i].votes , Product.prototype.allProduct[i].timeShown )+ '  %   customer Interest Precentage';
      data2.push(Product.prototype.allProduct[i].votes);
      data3.push(Product.prototype.allProduct[i].timeShown);
      data4.push(customerInterestPrecentage( Product.prototype.allProduct[i].votes , Product.prototype.allProduct[i].timeShown ));

      // resultsList.appendChild(goatResult);
    }
    firstImageProduct.removeEventListener('click',handleUserClick);
    secondImageProduct.removeEventListener('click',handleUserClick);
    thirdImageProduct.removeEventListener('click',handleUserClick);
  }
}

function renderThreeRandomImages(){
  do{
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();
  } while(firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex );

  console.log(firstImageIndex);
  console.log(secondImageIndex);
  console.log(thirdImageIndex);

  firstImageProduct.src = Product.prototype.allProduct[firstImageIndex].pathImage;
  console.log( firstImageProduct.src);

  secondImageProduct.src = Product.prototype.allProduct[secondImageIndex].pathImage;
  console.log(secondImageProduct.src);

  thirdImageProduct.src = Product.prototype.allProduct[thirdImageIndex].pathImage;
  console.log(thirdImageProduct.src);
}


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

// iF add number OfRounds

var numberOfRoundsForm = document.getElementById('numberOfRoundsForm');
numberOfRoundsForm.addEventListener('submit',numberOfRoundsFunction);

function numberOfRoundsFunction(event){
  event.preventDefault();
  // resultsList.textContent='';
  attemptsCounter = 0;
  attemptsAllowed = Number (event.target.numberOfRounds.value);
  console.log(attemptsAllowed);

  data2.length = 0;
  data3.length = 0;
  data4.length= 0;


  if(attemptsAllowed <= 0){
    alert('you should fill valid data');
  } else{
    Product.prototype.allProduct = [];
    new Product('bag','assets/bag.jpg');
    new Product('banana','assets/banana.jpg');
    new Product('bathroom','assets/bathroom.jpg');
    new Product('boots','assets/boots.jpg');
    new Product('breakfast','assets/breakfast.jpg');
    new Product('bubblegum','assets/bubblegum.jpg');
    new Product('chair','assets/chair.jpg');
    new Product('cthulhu','assets/cthulhu.jpg');
    new Product('dog-duck','assets/dog-duck.jpg');
    new Product('dragon','assets/dragon.jpg');
    new Product('pen','assets/pen.jpg');
    new Product('pet-sweep','assets/pet-sweep.jpg');
    new Product('scissors','assets/scissors.jpg');
    new Product('shark','assets/shark.jpg');
    new Product('sweep','assets/sweep.png');
    new Product('tauntaun','assets/tauntaun.jpg');
    new Product('unicorn','assets/unicorn.jpg');
    new Product('usb','assets/usb.gif');
    new Product('water-can','assets/water-can.jpg');
    new Product('wine-glass','assets/wine-glass.jpg');

    firstImageProduct.addEventListener('click',handleUserClick);
    secondImageProduct.addEventListener('click',handleUserClick);
    thirdImageProduct.addEventListener('click',handleUserClick);
    renderThreeRandomImages();
    var myChart2 = document.getElementById('myChart2').getContext('2d');

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


    var myChart4 = document.getElementById('myChart4').getContext('2d');

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
}

// show charts

var labels2 = ['bag', 'banana', 'bathroom', 'boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon', 'pen' ,'pet-sweep' , 'scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var colors2 = ['#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62','#965d62', '#965d62', '#965d62', '#965d62'];
var colors3 = ['#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974','#f2d974', '#f2d974', '#f2d974', '#f2d974'];
var colors4 = ['#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52','#534e52', '#534e52', '#534e52', '#534e52'];


var myChart2 = document.getElementById('myChart2').getContext('2d');

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


var myChart4 = document.getElementById('myChart4').getContext('2d');

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
