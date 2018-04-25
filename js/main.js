// ----- Enhanced Object Literals ------

// The main purpose of ES6 is to reduce the number of lines & characters we need for our code. Given this function:
// function createBookShop(inventory) {
// 	return {
// 		// We have some duplication here with the word inventory. In ES6, when we have a key and a value with the same word, we can condense them down to one word and no colon.
// 		inventory: inventory,
// 		// Both of our functions use the function keyword. We can omit both the function keyword and the colon.
// 		inventoryValue: function() {
// 			return this.inventory.reduce((total, book) => total + book.price, 0);
// 		},
// 		priceForTitle: function(title) {
// 			return this.inventory.find(book => book.title === title).price;
// 		}
// 	};
// }

// const inventory = [
// 	{ title: "Harry Potter", price: 10 },
// 	{ title: "Eloquent JavaScript", price: 15 }
// ];

// const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue()); // returns 25
// console.log(bookShop.priceForTitle("Harry Potter")) // returns 10


// function createBookShop(inventory) {
// 	return {
// 		inventory,
// 		inventoryValue() {
// 			return this.inventory.reduce((total, book) => total + book.price, 0);
// 		},
// 		priceForTitle(title) {
// 			return this.inventory.find(book => book.title === title).price;
// 		}
// 	};
// }

// const inventory = [
// 	{ title: "Harry Potter", price: 10 },
// 	{ title: "Eloquent JavaScript", price: 15 }
// ];

// const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue()); // returns 25
// console.log(bookShop.priceForTitle("Harry Potter")) // returns 10


// Another example:
// function saveFile(url, data) {
// 	$.ajax({ method: 'POST', url: url, data: data });
// }

// const url = "http://fileupload.com";
// const data = { color: 'red' };

// saveFile(url, data)

// Condensed version:
// function saveFile(url, data) {
// 	// we can condense both url and data to a single word since they are the same key and value. It's convention to move the condensed key value pairs to the left, with the expanded key value pairs to the right:
// 	$.ajax({ url, data, method: 'POST' });
// }

// const url = "http://fileupload.com";
// const data = { color: 'red' };

// saveFile(url, data)


// Refactor the following using enhanced literal notation:

// const red = '#ff0000';
// const blue = '#0000ff';

// const COLORS = { red: red, blue: blue };

// const red = '#ff0000';
// const blue = '#0000ff';

// const COLORS = { red, blue };


// const fields = ['firstName', 'lastName', 'phoneNumber'];
      
// const props = { fields: fields };

// const fields = ['firstName', 'lastName', 'phoneNumber'];
      
// const props = { fields };


// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return { 
//     width: width, 
//     height: height 
//   };
// }

// const canvasDimensions = function(width, initialHeight) {
//   const height = initialHeight * 9 /16;
//   return { 
//     width, 
//     height 
//   };
// }


// const color = 'red';

// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };

// const color = 'red';

// const Car = {
//   color,
//   drive() {
//     return 'Vroom!';
//   },
//   getColor() {
//     return this.color;
//   }
// };