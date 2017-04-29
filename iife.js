console.log('iife has loaded');
var CarLot= (function(CarLot){
	var cars=[];

	return {
		loadInventory: function(callbackToInvoke){
			var inventoryLoader= new XMLHttpRequest();
			inventoryLoader.addEventListener('load', function(){
				cars= JSON.parse(this.responseText).cars;
				callbackToInvoke(cars);
			});
			inventoryLoader.open('GET', 'inventory.json');
			console.log('carlot has loaded');
			inventoryLoader.send();
		}

	};
	return CarLot;
}(CarLot || {}));