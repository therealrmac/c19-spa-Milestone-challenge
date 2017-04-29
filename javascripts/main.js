console.log('main.js has loaded');
var carElement= document.getElementsByClassName('card');
var input= document.getElementById('input');
var select="";
var output= document.getElementById('output');

function populatePage (cars) {
	console.log(populatePage);
	var divContent;
	var card= cars;
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
  CarLot.activeEvents(populatePage);
}
CarLot.loadInventory(populatePage);

// Load the inventory and send a callback function to be
// invoked after the process is complete








