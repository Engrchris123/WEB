window.onload = function(){
    // type: string, integer, bolean, array, objects

    // Example - String
    let name = "Amaechi Chigozie";
    let sentence = "This is chigozie's sentence"
    let password = `123uy`

    // Example - Integer
    let a = 0;

    // Array example
    let fruits = ["Apple", "orange", "Pawpaw", "pineaple"];
   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   // Example - Bolean
    let isNight = true;
    let isGreater = a > 0;
    console.log(isGreater);
   
    // Example - Object
let obj = {"name": "Chigozie", "state": "imo", "gender": "male"},
  let attendance = [
    {"name": "Chigozie", "state": "imo", "gender": "male"}, 
    {"name": "Chinwe", "state": "Lagos", "gender": "Female"},
    {"name": "Eze", "state": "Enugu", "gender": "male"},
  ]  

 console.log(`${obj.state}`)   


console.log(fruits[0]); // output will be apple
    console.log(fruits[1]); // output will be orange
   
    



    // SOLUTION TO ASSIGNMENT
    // Using for loop, print out the values of each students
    //for (let attendance = 0; attendance < array.length; attendance++) {
     // const element = array[attendance];
      
    //}
}
