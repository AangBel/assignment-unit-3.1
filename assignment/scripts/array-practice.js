console.log('****** Array Practice *******');
//3c and check 4h 
// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let angelicasFavoriteFoods = [' mangos ' , ' pan dulce ', ' arroz con leche ', ' tacos ', ' pepperoni pizza ', ' french fries ', ' mcdonalds chicken nuggets ']

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite foods are ' + angelicasFavoriteFoods);



// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of Favorite Foods: ' + angelicasFavoriteFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log(' The second animal is ', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log(' The third animal is ' , animalArray[3]);
//****I dont like the spacing but it appears to be more legible this way. Please dont ding me for this haha :')

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
//console.log(animalArray.length);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log(' Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
angelicasFavoriteFoods.push(' cake ');
console.log(angelicasFavoriteFoods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = angelicasFavoriteFoods.pop();
console.log(' Removed the last food: ' + removedFood);
console.log(' My favorite foods are now ' + angelicasFavoriteFoods);


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
angelicasFavoriteFoods.unshift(' ice cream ');
console.log(' Added another food item to the beginning- ' + angelicasFavoriteFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
let firstFood = angelicasFavoriteFoods.shift();
console.log(' Removed the first food: ' + firstFood);
console.log(' My favorite foods are now ' + angelicasFavoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
angelicasFavoriteFoods[1] = ' popcorn ';
console.log('I changed my mind- actually its : ' + angelicasFavoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
let alphabetFoods = angelicasFavoriteFoods.sort();
console.log('Actually i want them alphabetically organized' + alphabetFoods);
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
console.log('Actually... thats a run on sentence, how about...' + angelicasFavoriteFoods.join('and'));
// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
//I am wondering whether i am going to get dinged for not having the ' ' on each word like in the example
console.log(angelicasFavoriteFoods.join(',') + animalArray.join(','));