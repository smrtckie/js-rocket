/*Hey this is 
a 
comment!!
*/

var age = 10;

var doCoolStuff = function()
{

	switch(document.getElementById('cool').className)
	{
	case 'cool red':
		document.getElementById('cool').className = 'cool yellow';
		age = 12;
		break;
	case 'cool yellow':
		document.getElementById('cool').className = 'cool blue';
		age = 2;
		break;
	case 'cool blue':
		document.getElementById('cool').className = 'cool green';
		age = 7;
		break;
	case 'cool green':
	default:	
		document.getElementById('cool').className = 'cool red';
		age= -8;
		break;			
	}
	sayMyAge(age)

	
}
var sayMyAge = function (age) {
	alert('I am '+age+' '+'years old')
}


var car = {
	make: 'VW',
	type: 'Polo',
	color: 'Yellow',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
			'seat 1',
			'seat 2',
			'seat 3',
			'seat 4'
		],
	turnOn: function () {
	    this.isTurnedOn = true;
	},
	fly: function() {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car' +isOn)
		if (isOn == true) {
		this.isTurnedOn = true;
		} else {
		this.isTurnedOn = false;
		}
	}

};

console.log('hello there friends!');	
