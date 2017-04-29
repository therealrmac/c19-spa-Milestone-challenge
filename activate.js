console.log('activate has loaded');
var CarLot=(function(CarLot){

	CarLot.activeEvents= function(event){
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
	}

	return CarLot;
}(CarLot || {}));