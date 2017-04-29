console.log('main.js has loaded');
var carElement= document.getElementsByClassName('card');
var input= document.getElementById('input');
var select="";
var output= document.getElementById('output');
var carRequest= new XMLHttpRequest;

carRequest.addEventListener('load', carRequestLoad);
carRequest.addEventListener('error', carRequestFail);

function carRequestLoad(event){
	console.log('carRequest has loaded');
	var cars= JSON.parse(this.responseText);
	carCard(cars);
}
function carRequestFail(event){
	console.log('An error has occured');
}
function carCard(x){
	var divContent;
	var card= x.cars;
	for (var i=0; i< card.length; i++){
		console.log(card[i]);
		divContent= "<div class='card'>" +
						"<h2>" +card[i].make+ "</h2>" +
						"<hr>"+
						"<span>"+ "Make: " +card[i].model+ "</span>" +
						"<ul>"+"<li>"+ "Year: "+card[i].year+ "</li>"+
						"<li>"+ "Price: "+ card[i].price+ "</li>"+
						"</ul>"+ "<h4>"+ "Description"+ "</h4>"+
						"<span class='descrip'>"+ card[i].description+ "</span>"


						+"</div>";
		output.innerHTML += divContent;
	}
}

carRequest.open('GET', "inventory.json");
carRequest.send();

for (var i=0; i<carElement.length; i++){
	console.log(carElement[i]);
	carElement[i].addEventListener('click', function(event){
		event.target.closest('div').classList.toggle('selected');
		select= event.target.closest('div').querySelector('.descrip');
		console.log('select',select);
		input.focus();
		input.addEventListener('keyup', function(event){
    	select.innerHTML= event.target.value;
    	 if(event.keyCode ===13){
            select= input
            input.value= "";
        }
    });
	});
};







