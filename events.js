console.log('events has loaded');
CarLot= (function(CarLot){

	CarLot.removeEvents= function(additional){
	var newSelect=document.getElementsByClassName('selected')
	for (var i=0; i<newSelect.length; i++){
	console.log(newSelect[i]);
		newSelect[i].classList.remove('selected');
		
		
	}
}
	CarLot.addEvents= function(card, style){
		card.classList.add(style);
	}

	return CarLot;
}(CarLot || {}));