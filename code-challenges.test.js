// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { shuffle } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



describe("arrayRandomizer", () => {
  it("a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    //use expect method to take in the variable and use expect.arrayContaining() to test remaining content
    expect(arrayRandomizer(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(arrayRandomizer(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

     
    // ERROR: arrayRandomizer is not defined

// b) Create the function that makes the test pass.

  // create a function that takes in array and use .shift() to remove the first item
  const arrayRandomizer = (array) =>{
    array.shift()
    // return array
    // iterate over array with .map. Use it's index/ array params
    let betterArr = array.map((value, index, array) =>{
      // using Math.random, randomize index of array
      let math = Math.floor(Math.random() * (index))
      let newArr = array[index]
      // take each value in the array and set it equal to the array with the randomizer
      array[index] = array[math]
      // return the randomized array and now set it equal to the created variable's array
     return array[math] = newArr
    })
    return betterArr
  }

  // console.log(arrayRandomizer(colors1));
  // console.log(arrayRandomizer(colors2));



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMax", () => {
  it("a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]

    //use expect method to take in the variable and see if directly equals the expeced output.
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})
    // ERROR minMax is not defined
// b) Create the function that makes the test pass.

// create a function that takes in an array. Define a variable that contains the min/ max final array.
 const minMax = (array) =>{
    finalArr = []
// iterate over array and filter out all number accept the biggest and smallest numbers using Math.min/ Math.max
    let min = Math.min(...array)
    let max = Math.max(...array)
// push our new variables to our finalArr
    finalArr.push(min, max)
  return finalArr
}
console.log(minMax(nums1));
console.log(minMax(nums2));

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDupes", () => {
  it("a function that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1] 

    //use expect method to take in the variable and use expect.arrayContaining() to test remaining content
    expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1] )
  })
})

// b) Create the function that makes the test pass.

//create a func that takes in 2 arrays and concat them into a single array using the spread functing
const noDupes = (arr1, arr2) =>{
  let newArr = [...arr1, ...arr2]
  //filter out all duplicate values by comparing each value's index to the next. If the value already has an assigned index the iteration moves on.
  return newArr.filter((value, i) =>{
    return newArr.indexOf(value) === i
  })
}
// console.log(noDupes(testArray1, testArray2));
