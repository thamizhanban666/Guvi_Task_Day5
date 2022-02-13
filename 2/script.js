//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
function addFive(num) { 
    return num + 5 ;
}
console.log(addFive(5))
console.log(addFive(0))
console.log(addFive(-5))

//Write a function called “getOpposite”.
//Given a number, return its opposite
function getOpposite(num) {
  return num- 2*num ; 
  }
  console.log(getOpposite(5))
  console.log(getOpposite(0))
  console.log(getOpposite(-5))
  console.log(getOpposite("5a"))
  console.log(getOpposite(5.5))

//Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(min) {
    return min*60
}
console.log(toSeconds(5))
console.log(toSeconds(3))
console.log(toSeconds(2))

//Create a function that takes a string and returns it as an integer.
function toInteger(mystr) {
    return Number(mystr)
}
console.log(toInteger("6"))
console.log(toInteger("1000"))
console.log(toInteger("12"))

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(num) {
    return num+1 ;
}
console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))

//Create a function that takes an array and returns the first element.
function getFirstElement(arr) {
    return arr[0]
}
console.log(getFirstElement([1,2,3]))
console.log(getFirstElement([80,5,100]))
console.log(getFirstElement([-500,0,50]))

//Write a function that converts hours into seconds
function hourToSeconds(num) {
    return num * 3600 ;
}
console.log(hourToSeconds(2))
console.log(hourToSeconds(10))
console.log(hourToSeconds(24))

//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(a,b) {
    return 2*(a+b) ;
}
console.log(findPerimeter(6,7))
console.log(findPerimeter(20,10))
console.log(findPerimeter(2,9))

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    if((num1+num2) < 100){
        return true
    }
    else{
        return false
    }
}
console.log(lessThan100(22,15))
console.log(lessThan100(83,34))

// remainder of a division operation.
function remainder(num1,num2) {
    return num1%num2 ;
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))
console.log(remainder(5,5))

//the total number of legs of all the animals.
function CountAnimals(turkey,horse,pigs) {
    return (turkey*2)+(horse*4)+(pigs*4)
}
console.log(CountAnimals(2,3,5))
console.log(CountAnimals(1,2,3))
console.log(CountAnimals(5,2,8))

//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    return (num1*num2)*60
}
console.log(frames(1,1))
console.log(frames(10,1))
console.log(frames(10,25))

//Check if an Integer is Divisible By Five
function divisibleByFive(num1) {
    if(num1%5 == 0)
    {
        return true
    }
    else{
        return false
    }
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))

//Write a function called “isEven”.
function isEven(num){
    if(num%2 == 0){
        return true
    }else{
        return false
    }
    }
   console.log(isEven(12)) 
   console.log(isEven(0))
   console.log(isEven(11))
   console.log(isEven("11h"))

//Write a function called “areBothOdd”.
function areBothOdd(num1, num2){
   if(num1%2 ==1 && num2%2 == 1){
       return true
    }
   else{
       return false
   }
}
console.log(areBothOdd(1,3))
console.log( areBothOdd(1,4))
console.log(areBothOdd(2,3))
console.log(areBothOdd(0,0))

//Write a function called “getFullName”.
function getFullName(firstName, lastName){
    return firstName+" "+lastName
   }
   console.log(getFullName("GUVI","GEEK").toString())
   console.log(getFullName("GUVI","").toString())
   console.log(getFullName("","GEEK").toString())
   console.log(getFullName("","").toString())

//ERROR//Write a function called “getLengthOfWord”.
function getLengthOfWord(word){
    return word.length
   }
   console.log(getLengthOfWord("GUVI"))
   console.log(getLengthOfWord(""))
   console.log(getLengthOfWord(9))

//Write a function called “isSameLength”.
function isSameLength(word1, word2){
    if(word1.length == word2.length){
        return true
    }else{
        return false
    }
   }
   console.log(isSameLength("GUVI","GEEK"))
   console.log(isSameLength("GUVI","GEEEK"))

//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
return Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))   
}
console.log(getDistance(100, 100, 400, 300))

//Write a function called “getNthElement”.
function getNthElement(array,n){
    return array[n]
  } 
console.log(getNthElement([1,3,5],1))

//Write a function called “getLastElement”.
function getLastElement(array){
  return array[array.length-1]
 }
 console.log(getLastElement([1, 2, 3, 4]))

//Write a function called “getProperty”.
var obj = {
    mykey: "value"
   };
   function getProperty(obj, key){
    return obj.hasOwnProperty(key) ?obj[key] : undefined; 
  }
   console.log(getProperty(obj,'mykey'));
  console.log(getProperty(obj,'dummykey'));

//Write a function called “addProperty”.
var obj = {
 };
 function addProperty(obj, key) {
    obj[key] = "true";
    return obj;
 }
 console.log(addProperty(obj,'mykey'))
