// #####
// like arrays but not ordered and use keys instead of indexes to access their values
// #####



// #####
// [Importance of Objects]
// - group related data and functions together
// - organize code and easier to understand and maintain
// #####



// This is not a practical way:
let person1_name = "Mustafa";
let person1_dateOfBirth = "11/01/1998";
let person1_age = 25;
let person1_height = 195;
let person1_weight = 90;
let person1_isMarried = true;




// [Object Literal Notation]
// + curly braces
// + key-value pairs:
// 	- separated by commas (,)
// 	- keys are separated from values by a colon (:)



let person = {
	name: "Mustafa",
	dateOfBirth: "11/01/1998",
	age: 25,
	height: 195,
	weight: 90,
	isMarried: true,

	speak: function () {
		console.log("Hello, my name is " + this.name);
	},
	
	move: function () {
		console.log("I am moving");
	},

	eat: function () {
		console.log("I am eating");
	},

	devorce() {
		this.isMarried = false;
	},
};

console.log(person);


// + 
// 	- the keys are usually strings, but they can be any data type
// 	- values can be any data type or objects




// --> Accessing Properties
person.name;
person["name"];
console.log(person.name);
console.log(person["name"]);


let property = "age";
console.log(person.property);
console.log(person[property]);


// --> Accessing Methods
person.speak();
person.move();
person["eat"]();

console.log(person.isMarried);
person.devorce();
console.log(person.isMarried);







// --> Editing Properties
person.name = "Ali";
person["isMarried"] = true;


// --> Editing Methods
person.speak = function () {
	console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old");
};
person.speak();








// --> Adding Properties
person.hairColor = "black";
person["eyesColor"] = "brown";

console.log(person);


// --> Adding Methods
person.sleep = function () {
	console.log("I am sleeping ZZZZZZZZZZZZZ");
};
person.sleep();









// --> Deleting Properties
delete person.hairColor;
console.log(person.hairColor);
console.log(person);

delete person["eyesColor"];
console.log(person.eyesColor);
console.log(person);


// --> Deleting Methods
delete person.sleep;
person.sleep();
console.log(person);









// --> Nested Objects
let book1 = {
	title: "Harry Potter",
	numbersOfPages: 123,
	dateOfPublication: "18/01/2004",
	auther: {
		name: "J. K. Rowling",
		age: 55,
	},
};

console.log(book1);
console.log(book1.title);
console.log(book1.auther);
console.log(book1.auther.name);
console.log(book1["auther"].name);
console.log(book1.auther["name"]);
console.log(book1["auther"]["age"]);



let book2 = {
	title: "JavaScript for Dummies",
	numbersOfPages: 150,
	dateOfPublication: "13/04/2010",
	auther: person,
};

console.log(book2);
console.log(book2.title);
console.log(book2.auther);
console.log(book2.auther.name);
console.log(book2["auther"]["dateOfBirth"]);
book2.auther.speak();





// --> Iterating over Objects
for (let key in person) {
	console.log(key);
	console.log(person[key]);
}




// ## Predefined Methods for Objects ##
for (let value of Object.values(person)) {
	console.log(value);
}


// --> Checking Property in Object
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("id"));


console.log("name" in person);
console.log("id" in person);

Object.keys(person)
Object.values(person)






// --> Objects and References
let movie1 = {
	title: "Prison Break",
	year: 2017,
};
console.log(movie1);


let movie2 = movie1;
console.log(movie2);

movie2.title = "Breaking Bad";
console.log(movie2);
console.log(movie1);



// --> Copying Objects
let movie4 = {};
for (let key in movie1) {
	movie4[key] = movie1[key];
}

console.log(movie4);

movie4.title = "The Walking Dead";
console.log(movie4);
console.log(movie1);




// --> const and Objects
const movie3 = {
	title: "The Walking Dead",
	year: 2010,
};

console.log(movie3);
movie3.title = "The Walking Dead 2";
console.log(movie3);


// This will throw an error:
movie3 = {
	title: "The Walking Dead 3",
	year: 2012,
}




// --> Objects passed as a reference
function changeTitle(movie) {
	movie.title = "NEW TITLE";
}

console.log(movie1.title);
changeTitle(movie1);
console.log(movie1.title);