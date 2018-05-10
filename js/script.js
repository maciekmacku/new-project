var id = 0;
var list = [];
var addBtn = document.getElementById('add-phone');

// helper functions
function generateID() {
	return ++id;
}
function validateFields(brand, model, price) {
	/* return !!name.length > 0 && model.length > 0 && price.length > 0;*/
	return (brand.length > 0 && model.length > 0 && price.length > 0) ? true : false; 
	/*if (brand.length > 0  &&  model.length > 0 && price.length > 0){
		return true;
	} else {
		return false;
	} */
}
// constructor function
function Phone(brand, model, price) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.id = generateID();
}
Phone.prototype = {
	addPhoneToList(phone) {
		list.push(phone);
		var data = phone.id + " Nazwa telefonu: " + phone.brand + " Nazwa Modelu: " + phone.model + " Cena: " + phone.price;
		console.log(data);
		var element = document.createElement("li");
		var textNode = document.createTextNode(data);
		
		element.appendChild(textNode);
		document.getElementById("list").appendChild(element);
	} 
}

// click event
addBtn.addEventListener('click', function(){
	var brand = document.getElementById('brand').value;
	var model = document.getElementById('model').value;
	var price = document.getElementById('price').value;
	var isValid = validateFields(brand, model, price);
	console.log(isValid);
	
	if (isValid == true ){
		var newPhone = new Phone(brand, model, price);
		console.log(newPhone);
		newPhone.addPhoneToList(newPhone)
		document.getElementById("validate-phone").innerHTML = "";
	} else {
		document.getElementById("validate-phone").innerHTML = " Wszystkie pola powinny byc wypelnione";
	}
			
});



	

