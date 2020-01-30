function Burger(name, bread, meat, allergy, kCal, img_path, dsc1, dsc2, dsc3) {
	this.name = name;
	this.bread = bread;
	this.meat = meat;
	this.allergy = allergy;
	this.img_path = img_path;
	this.kCal = kCal;

	this.dsc1 = dsc1;
	this.dsc2 = dsc2;
	this.dsc3 = dsc3;

	this.heading = function() {
	return this.name + ': ' + this.kCal + ' kCal';
	};
}

let burgerArray = [{item: new Burger('Floor-burger', 'some kind of bread', '(possibly suitable for vegans)', 'We don\'t know what it contains.', '1337', 'https://media-cdn.tripadvisor.com/media/photo-s/10/36/20/06/by-far-the-worst-burger.jpg', 'We found it on the floor, has', 'It may or may not contain meat ', 'Let\'s hope you\'re not allergic to something in it! '), gluten:true, lactose:true}];

burgerArray.push({item: new Burger('Some other burger', '(soggy and contains gluten)', 'It sure does contain meat', 'you probably don\'t want to eat this.', '1234', 'https://aht.seriouseats.com/assets_c/2014/02/20140203-sad-burger-dimly-lit-meals-for-one-thumb-300xauto-381436.jpg', 'White bread that was supposed to be my dinner ', 'Something something. ', 'Doesn\'t matter if you\'re allergic to something, '), gluten:true, lactose:false});
burgerArray.push({item:new Burger('This isn\'t even a burger', '', '', 'I don\'t think that\'s a burger...', '???', 'https://cdn.foodbeast.com/content/uploads/2016/05/Shitty-Food-Porn-1-408x450.jpg', 'Hold on!', 'I though we were selling burgers!!?!?!?', ''), gluten:true, lactose:false});
burgerArray.push({item: new Burger('Meep', 'BREAD', 'MEAT', 'A FAX MACHINE!', '0x1fc', 'https://www.cpsc.gov/s3fs-public/styles/large/public/Recall.2012.12101.12101a.jpg?pgK1xQYak69VAg8LgezAva4ccH2dKZR2&itok=5EWU_eEd', 'After you take away the ', 'and the ', 'What do you have? '), gluten:false, lactose:true});
burgerArray.push({item: new Burger('Moop', 'POTATO', 'POTATO', 'POTATO', '0', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/24/1411574454561/03085543-87de-47ab-a4eb-58e7e39d022e-620x372.jpeg?width=300&quality=85&auto=format&fit=max&s=6ff150c2e9d651486fb5eff841979323', 'I say ', 'You say ', 'Javascript is awful by the way '), gluten:false, lactose:true});

let myElement = document.getElementById('myID');

for(i = 0; i < burgerArray.length; i++) {
	burg = burgerArray[i];
	var burger = burg.item;
	
	var text = burger.heading();
	
	if (burg.lactose)
	{
	text = text + ' contains lactose'
	}
	if (burg.gluten)
	{
	text = text + ' contains gluten '
	}
	
	let listItem = document.createElement("p");
	let listValue = document.createTextNode(text);
	listItem.appendChild(listValue);
	myElement.appendChild(listItem);
}
