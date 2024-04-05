// how to open the console without inspect

// :-- ctrl+shift+i;

// console.log("hello")

// //using for loop
// for(let i=0;i<=5;i++){
//     console.log(i)
// }

// using while loop
// let j=1;
// while(j<5){
//     console.log(j)
// }
// j++;

// using do  while loop
// let k=1
// do{
//     console.log(k)
//     k++;
// }
// while(k<5)

// ----------------------------------------------------------------------------------------------------------------

//2.write a function to add two numbers and return the result
// x=2;
// y=5;
/*function add(x,y){
    result=x+y;
    return result;

}
add (x,y);
console.log(result)*/

/*let a=(x,y)=>{
    result=x+y;
    return result;

}
a(x,y);
console.log(result)*/

//-------------------------------------------------------------------------------------------------
// 3. write a function to create area of recatangle

// h=3;
// w=6;

// function areaofrectangle(h,w){
//     area=h*w;
//     return area;
// }
// areaofrectangle(h,w);
// console.log(area)

/*let areaoftwo=(w,h)=>{
    area=h*w;
       return area;


}
areaoftwo(w,h);
console.log(area)*/
//------------------------------------------------------------------------------------------------------
//4. write a function that takes a string and return the reversed version of it
// let str= "hello word"

// function reversestring(){
// return str.split("").reverse().join("");
// }

// let str2=reversestring();
// console.log(str2)

//-------------------------------------------------------------------------------------------------------------

//5. write a function that checks if a number is even or odd and return even odd accordingly

/*let num=7;
let checknum=(num)=>{
    if(num%2==0)
    {
        console.log("num is even")
    }
    else
    {
        console.log("num is odd")
    }
}
checknum(num);*/

//--------------------------------------------------------------------------------------------------------------

// 6. create a program that checks if a given year is leap year
// year=2015
// let isleapyear= (year)=>{
// if(year%4==0&& year%100!=0 || year % 400==0){
//     console.log("this is leap year")
// }
// else
// {
//     console.log("this is not leap year")
// }

// }
// isleapyear(year);

// ------------------------------------------------------------------------------

// 7. find the sum of the Array
// let sum=0;
// let a=[1,4,2,5,3]
// for (let i=0;i<=5;i++)
// {
//     sum=sum+i;

// }
// console.log(sum)

//---------------------------------------------------------------------------------------------------------

//8. create an object representing a car with properties like make,model,and year.add a method to the car object to start the engine

// const car={
//     model:"BMW",
//     year:2023,
//     startengine:function(){
//         console.log("engine started")
//     }
    

 
// }
// car.startengine=function(){
//     console.log("engine started")
// }
// car.startengine();

// console.log(car.model)
// -------------------------------------------------------------------------------------------------------------
//9. change the text of a paragraph on a webpage using javacript

// let X=document.getElementById("para");

// X.textContent="hii my name is rachi i am learning javascript";

//---------------------------------------------------------------------------------------------------------------------
// 10. create a button dynamically and add it to the webpage
// let x= document.getElementById("container")
// let y=document.createElement("button")
// y.textContent="click me";
// x.appendChild(y);




//------------------------------------------------------------------------------------------------------------------------------

// 11. Add a click event listener to button that display an alert when clicked

// let btn = document.getElementById('btnn');

// btn.addEventListener("click", myfunction());

// function myfunction() {
//     alert("button clicked");
// }


// let btn = document.getElementById('btnn');

// btn.addEventListener("click", ()=>{
//     alert("button clicked");

// });

// ------------------------------------------------------------------------------------------

// 12 . write  a function that calculate the factorial of give number 

// let number = 3;

// if(number===0){
//     console.log("factorial of 0 is alwyas one")

// }
// if(number < 0)
// {
//     console.log("factorial of negative number is not exixsts")

// }
// if(number > 0){
//     let fact=1;
//     for(let i=1;i<=number;i++){
       
//         fact=fact*i;
//     }
//     console.log("factorial of"+ number + "is :"+fact)
// }

// -----------------------------------------------------------------------------------------------------------------------

// 13. create function that genrates a random number between a given range

// function getrandonnumber (min , max){
//     return Math.floor(Math.random()*(max-min+1) +min)
// }
// console.log(getrandonnumber(50,100))

// -------------------------------------------------------------------------------------------------------------------

// 14. write funcion that takes an array of numbers and returns a new array with only the even number

// let arr = [10,34,25,20,30,40,80]

// function filterevennum(arr){
//     return arr.filter(num=>num%2===0)
// }
// console.log(filterevennum(arr))

// ---------------------------------------------------------------------------------------------------------------------

// 15. use map() to double all the elements in an array

// let arr = [10,20,30,40,50,60,70]

// function maparray(arr){
//     return arr.map((item)=>item*2)
// }

// console.log(maparray(arr))

// ----------------------------------------------------------------------------------------------------

// 16. find the largets element in an array using the reduce() methods.

// let arr = [10,3,1,89,45,18]

// function findlargets (){
//     return arr.reduce((max, current)=>
//         current > max ?current : max 
//     )
// }

// let reduce = findlargets(arr)
// console.log(reduce)

// ------------------------------------------------------------------------------------------------------

// 17. Remove all occurrences of a specific element from an array

// let arr= [20,10,50,10,60]
// let target =10

// function removeduplicate (arr,target){
//     return arr.filter((item)=>item!==target)
// }

// let removed=removeduplicate(arr,target)
// console.log(removed)

// ---------------------------------------------------------------------------------------------

// 18.  create a function that display the currect date and time in a specific format

// function getcurrentdateandtime (){
//     let currentdate = new Date();
//     return currentdate.toLocaleString()
// }
// console.log(getcurrentdateandtime())

// -------------------------------------------------------------------------------------------------

// 19. Implement a try-catch block to handle an error that occurs during API data fetching 



// -----------------------------------------------------------------------------------------