function prime(num) {
  
  for(let i = 2; i < num; i++){ //check all numbers starting from 2 until they reach the parameter
     if(num % i === 0){ //if there is no remainder from the division of 2 numbers, its not a prime number
         
          return false; //evaluates to false if its not a prime number
      }
    
      return true;  //evaluates to true if its a prime number
  }
  return num > 1; //return number
}

function solution(num){ //pass the unknown number as parameter in another function
  return prime(num); //call the prime function
}

solution(0); //pass any number into the function to check if its a prime number