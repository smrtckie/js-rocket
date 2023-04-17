
//Explaining Variables//

	var myName = "Sarah";

	var grassIsBlue = false;

	var sarahObject = {
		firstname: 'Sarah',
		lastname: 'Schallon',
		favColors: ['yellow', 'orange', 'gold'],
		yearsAlive: 15,
		isFemale: true
	};

//Explaining Functions//

	var whatIsMyFavoriteAnimal = function () {

		return 'none';
		//anything after the 1st return is ignored!!//

		return 'monkey';
	}

	var scareMe = function () {
		console.log("BOO!!!");
	}

	var area = function(width, height) {
		return width * height;
		//type in console "area(#,#)" to get answer//
	}

	var fullname = function(firstname, secondname, lastname){
		return firstname + " " + secondname + " " + lastname;
		//type in colsole with strings for each name ('Sarah', ...)//
	}

//Explaing If-Then Statements//

	var num1 = 15;
	var num2 = 150;

	if (num1>num2) {
		alert('true!!!');
	} else {
		alert('false!!!');
	};


	var name1 = 'Hannah';
	var name2 = 'Sarah';

	if (name1 == 'Sarah' || name2 =='Hannah') {
		alert('true 1!!!');
	} else if (name2 == 'Sarah') {
		alert('true 2!!!');
	} else {
		alert('false!!!');
	};

	// && means AND : || means OR : == means EQUALS

	



